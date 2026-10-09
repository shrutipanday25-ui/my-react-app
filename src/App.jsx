
import { useState } from "react";
import {
  Routes,
  Route,
  Link,
  Navigate,
  Outlet,
  useParams,
  useNavigate,
} from "react-router-dom";

const initialRecipes = [
  {
    id: "1",
    title: "Veg Sandwich",
    ingredients: ["Bread", "Tomato", "Cucumber", "Butter"],
    instructions: "Spread butter on bread. Add vegetables and serve.",
  },
  {
    id: "2",
    title: "Pasta",
    ingredients: ["Pasta", "Tomato Sauce", "Salt", "Cheese"],
    instructions: "Boil pasta, add sauce and salt, then add cheese.",
  },
  {
    id: "3",
    title: "Fruit Salad",
    ingredients: ["Apple", "Banana", "Grapes", "Orange"],
    instructions: "Cut all fruits into small pieces and mix them.",
  },
];

function MainLayout({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div>
      <h1>My Recipe Book</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/recipes">Browse Recipes</Link> |{" "}
        <Link to="/favorites">My Favorites</Link>{" "}

        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </nav>

      <hr />

      <p>
        Status: {isLoggedIn ? "Logged In" : "Logged Out"}
      </p>

      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Welcome to My Recipe Book!</h2>
      <p>Discover simple and delicious recipes.</p>
      <Link to="/recipes">Explore Recipes</Link>
    </div>
  );
}

function RecipeList({ recipes }) {
  return (
    <div>
      <h2>Browse Recipes</h2>

      {recipes.length === 0 ? (
        <p>No recipes available.</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>
                {recipe.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function RecipeDetails({ recipes, deleteRecipe }) {
  const { recipeId } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find((item) => item.id === recipeId);

  if (!recipe) {
    return (
      <div>
        <h2>Recipe not found</h2>
        <Link to="/recipes">Back to Recipes</Link>
      </div>
    );
  }

  function handleDelete() {
    deleteRecipe(recipe.id);
    navigate("/recipes");
  }

  return (
    <div>
      <h2>{recipe.title}</h2>

      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>

      <button onClick={handleDelete}>Delete Recipe</button>

      <br />
      <br />

      <Link to="/recipes">Back to Recipes</Link>
    </div>
  );
}

function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
}

function Favorites() {
  return (
    <div>
      <h2>My Favorites</h2>
      <p>Welcome! You can access your favorites page.</p>
      <p>Your favorite recipes will appear here.</p>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [recipes, setRecipes] = useState(initialRecipes);

  function deleteRecipe(id) {
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe) => recipe.id !== id)
    );
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        }
      >
        <Route index element={<Home />} />

        <Route
          path="recipes"
          element={<RecipeList recipes={recipes} />}
        />

        <Route
          path="recipes/:recipeId"
          element={
            <RecipeDetails
              recipes={recipes}
              deleteRecipe={deleteRecipe}
            />
          }
        />

        <Route
          path="favorites"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Favorites />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
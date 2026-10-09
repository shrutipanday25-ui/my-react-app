import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  const isPasswordInvalid =
    formData.password.length < 8;

  const isFormInvalid =
    formData.username.trim() === "" ||
    formData.email.trim() === "" ||
    isPasswordInvalid;

  return (
    <div>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
          />
        </div>

        <br />

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>

        <br />

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />

          {formData.password.length>0&&
          isPasswordInvalid &&(
            <p style={{color: "red"}}>
              Password must be at least 8 characters
            </p>
          )}
          </div>

          <br/>
          <button type="submit"disabled={isFormInvalid}>
            Submit
          </button>
          </form>
          </div>
          );
          }

          export default RegistrationForm;

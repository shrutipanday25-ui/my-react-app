import {useContext} from "react";
import { ThemeContext } from "./context/ThemeContext";
import Sidebar from "./Sidebar";
function MainLayout(){
    const {theme}=useContext (ThemeContext);
    return(
        <div className={theme==="light"?
            "layout-light": "layout-dark"
        }>
            <h1>Main Layout</h1>
            <Sidebar/>

        </div>
    );
}
export default MainLayout;
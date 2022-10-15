import React, { useState } from "react";
import Movies from "./component/Movies";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("white");
  const [cardTheme, setCardTheme] = useState("#808080");

  const changeTheme = () =>{
    if(theme === "#454545"){
      setTheme("white")
    }else setTheme("#454545")
    if(cardTheme === "#808080"){
      setCardTheme("#B3B3B3")
    }else setCardTheme("#808080")
    
  }
  return (
    <div className="dark">
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Movie List</span>
          <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={changeTheme}/>
          {theme==="white"?<label class="form-check-label text-white"  for="flexSwitchCheckDefault">Dark Mode</label> : 
          <label class="form-check-label text-white" for="flexSwitchCheckDefault">Ligh Mode</label>}
          </div>
        </div>
      </nav>
      <Movies theme={theme} cardTheme={cardTheme}/>
    </div>
  );
}
export default App;
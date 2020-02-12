import React from "react"; //importamos mod React
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "../logo.svg"; //importamos el fich
import "./App.css";
import CrearUsuario from "./crearUsuario";
import ListarUsuarios from "./listarUsuarios";

function App() {
  let estiloLogo = {
    //objeto de JS con CSS
    width: "10em"
  };
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} style={estiloLogo} className="App-logo" alt="logo" />
        <h1>Operaciones CRUD usuarios</h1>
      </header>
      <nav>
        <Link to="/">Listado</Link>
        <Link to="/registro"> Crear Usuario</Link>
      </nav>
        <Route path="/" exact component={ ListarUsuarios }/> 
        <Route path="/registro" component= { CrearUsuario}/>
      
    </div>
    </Router>
  );
}


export default App;

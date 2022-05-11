import ReactDom from "react-dom"
import App from "./App.jsx"
import {BrowserRouter as Router} from 'react-router-dom';
import "./style.scss"

ReactDom.createRoot(document.getElementById("root")).render(<Router><App/></Router>)

import { NavLink,Routes,Route } from "react-router-dom"
import Whiskey from "./whiskey.jsx"
import Hazel from "./hazel.jsx"
import Tubby from "./tubby.jsx"
import whiskeyPic from "./images/whiskey.jpg"
import hazelPic from "./images/hazel.jpg"
import tubbyPic from "./images/tubby.jpg"

function App() {
  return (
    <div className="App">
      <h1>Click on the picture to get further information</h1>
      <nav>
        <NavLink to="whiskey">
          <div className="wrapper">
            <img width="100px" src={whiskeyPic} alt=""/>
            Whiskey
          </div>
        </NavLink>
        
        <NavLink to="Hazel"><div className="wrapper"><img width="100px" src={hazelPic} alt=""/>Hazel</div></NavLink>
        <NavLink to="Tubby"><div className="wrapper"><img width="100px" src={tubbyPic} alt=""/>Tubby</div></NavLink>
      </nav>
      <Routes>
        <Route path="whiskey" element={<Whiskey/>}/>
        <Route path="Hazel" element={<Hazel/>}/>
        <Route path="Tubby" element={<Tubby/>}/>
        <Route path="*"></Route>
      </Routes>
    </div>
  );
}


export default App;
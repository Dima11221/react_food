import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Header} from "./layout/Header/Header.tsx";
import {Footer} from "./layout/Footer/Footer.tsx";
import {Home} from "./components/Pages/Home/Home.tsx";
import {NotFound} from "./components/Pages/NotFound/NotFound.tsx";
import './styles/main.scss'
import {Category} from "./components/Pages/Category/Category.tsx";
import {Recipe} from "./components/Pages/Recipe/Recipe.tsx";
function App() {


  return (
    <Router>
      <Header title='React Food' />
        <div className="mainWrapper">
          <Routes>
            <Route path="/react_food" element={<Home />}/>
            <Route path='/category/:name' element={<Category />}/>
            <Route path='/meal/:id' element={<Recipe />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
      <Footer />
    </Router>
  )
}

export default App

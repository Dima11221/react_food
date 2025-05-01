import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Header} from "./layout/Header/Header.tsx";
import {Footer} from "./layout/Footer/Footer.tsx";
import {Home} from "./components/Pages/Home/Home.tsx";
import {About} from "./components/Pages/About/About.tsx";
import {Contact} from "./components/Pages/Contact/Contact.tsx";
import {NotFound} from "./components/Pages/NotFound/NotFound.tsx";
import './styles/main.scss'
import {Category} from "./components/Pages/Category/Category.tsx";
import {Recipe} from "./components/Pages/Recipe/Recipe.tsx";
function App() {


  return (
    <Router>
      <Header title='Rect Food' />
        <main className="mainWrapper">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contacts" element={<Contact />}/>
            <Route path='/category/:name' element={<Category />}/>
            <Route path='/meal/:id' element={<Recipe />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </main>
      <Footer />
    </Router>
  )
}

export default App
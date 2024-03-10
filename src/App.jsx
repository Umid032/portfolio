import { Fragment } from "react"
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import Portfolio from "./pages/Portfolio";
import {Link, Route, Routes} from "react-router-dom"
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Fragment>
      <header>
        <nav>
          <Link to={"/portfolio"}>Главное</Link>
          <Link to={"/portfolio/services"}>Услуги</Link>
          <Link to={"/portfolio/projects"}>Портфолио</Link>
          <Link to={"/portfolio/contacts"}>Контакты</Link>

        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/portfolio" index element={<Home/>}/>

          <Route path="/portfolio/services" element={<Services/>}/>

          <Route path="/portfolio/projects" element={<Portfolio/>}/>

          <Route path="/portfolio/contacts" element={<Contacts/>}/>

          <Route path="*" element={<NotFound/>}/>

        </Routes>
      </main>
      </Fragment>
  )
}

export default App; 
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Service from './Components/Service/Service'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Project from './Components/Project/Project'

    
const App=()=>{
return(
    <div>
        
        <Navbar/>
        <Home/>
        <About/>
        <Service/>
        <Project/>
        <Contact/>
        <Footer/>
    </div>
)
}

export default App;
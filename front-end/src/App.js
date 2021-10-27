import './App.css';
import Admin from "./compoment/admin";
import {BrowserRouter,Route} from 'react-router-dom'
import Navigation from './navigation';
import Acceuil from './acceuil'
import Propritaire from './propritaire';
import ColocsEtudiants from './ColocsEtudiants';
import ColocsTravailleurs from './contactt';
import Publiervotreannonces from './Publiervotreannonces';
import detail from './detail';
import Quisommenous from './quisommenous';
import Footer from './footer';
import Formulaire from'./formulaireproposition';
import Offrelogement from './offre';
import ContactForm from'./contact.js';
import Signin from './compoment/Authentification/sgininn'
import Signup from './compoment/Authentification/inscription'
import PrivetRoute from "./compoment/PrivetRoute"
import Comentaire from './comentaire';
import Contactti from'./contactt';
import Profil from './Profile'
function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
       <Navigation/>
      
       <div>
         
       <Route exact path="/" component={Acceuil} /> 
       <Route  path="/acceuil" component={Acceuil} /> 
       <Route  path="/ColocsEtudiants" component={ColocsEtudiants} /> 
       {/*<Route  path="/ColocsTravailleurs" component={ColocsTravailleurs}/>*/}
      <PrivetRoute  path="/Admin" component={Admin} /> 
      <Route  path="/Propritaire"  component={Propritaire}/> 
      <Route  path="/Publiervotreannonces"  component={Publiervotreannonces}/> 
      <Route path="/detail" component={detail}/>
      <Route  path="/quisommenous" component={ Quisommenous}/>
      <Route  path="/formulaireproposition" component={Formulaire} /> 
      <Route  path="/offre" component={Offrelogement} /> 
      <Route  path="/contact" component={ContactForm} /> 
     <Route  path="/inscription" component={Signup } /> 
      <Route  path="/sgininn" component={Signin } /> 
      <Route  path="/comentaire" component={Comentaire}/>
      <Route  path="/contactt" component= {Contactti}/>
      <Route path="/profile" component={Profil}/>
      </div>
      <Footer/>
      </BrowserRouter>
    
    </div>
    
  );
}

export default App;



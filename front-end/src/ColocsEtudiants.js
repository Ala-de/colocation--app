import React from 'react'
import './App.css';
import IMGcard6 from "./IMAGES/etudiant imagee.jpg"
import IMGcard7 from "./IMAGES/groupe.webp"
export default function ColocsEtudiants() {
    return (
      <section class="history-area">
          <div class="row about-section ">
               <div className="col-md-6 imagee">
      <img src={IMGcard6}/>
  </div>
  <div className="col-md-5 inner-container">
    <h1>À PROPOS DE NOUS </h1>
    <p className="text">
    Consultez les colocataires cherchant une chambre dans votre région et trouver la personne idéale pour votre colocation. Offrez leur votre chambre directement ou attendez qu'ils vous contactent, c'est votre choix!
    Grâce à  Colocs vous apporte son aide afin que vous puissiez trouver votre colocation idéale.
    </p>
    
  </div>
 
</div>
   </section>     
    )
}

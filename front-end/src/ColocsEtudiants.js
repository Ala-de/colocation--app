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
    <h1>About Us</h1>
    <p className="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
    </p>
    <div class="skills">
      <span>Web Design</span>
      <span>Photoshop & Illustrator</span>
      <span>Coding</span>
    </div>
  </div>
 
</div>
   </section>     
    )
}

import React from 'react'
import {Card,Button} from 'react-bootstrap'
import IImg from "./IMAGES/slide.jpg";
import IMGcard1 from "./IMAGES/cardimage.png"
import IMGcard2 from "./IMAGES/cardimage2.jpg"
import IIMGcard3 from "./IMAGES/cardimage3.jpg"
import IMGcard4 from "./IMAGES/cardimage4.jpg"
import imgcard5 from "./IMAGES/10septt.jpg"
import Cardoo from "./compoment/CardCarousel"
import imgcard6 from "./IMAGES/10 sept.jpg"
import imgcard7 from "./IMAGES/téléchargement.jpeg"
import imgcard8 from "./IMAGES/appartement-photo.jpg"
import './App.css';
import'./CardCarousel.css';
import detail from "./detail"
import Admin from "./compoment/admin"
import ScrollUpButton from "react-scroll-up-button";
import {Carousel} from '3d-react-carousal';
import {BrowserRouter,Link,Route} from 'react-router-dom'
export default function Acceuil() {
  let slides = [
    <img  src="https://www.vanupied.com/wp-content/uploads/68550354.jpg" alt="1" style={{marginTop:"100px",width:"200%"}}/>,
    <img  src="https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg" alt="2" style={{marginTop:"100px",width:"200%"}}/>  ,
    <img  src="" alt="3" style={{marginTop:"100px",width:"200%"}}/>  ,
    <img  src="https://picsum.photos/800/303/?random"  style={{marginTop:"100px",width:"200%"}}/>  ,
    <img src="https://picsum.photos/800/304/?random"  style={{marginTop:"100px",width:"200%"}}/>   ];
  
    return (
        <div>
         
         <section class="history-area">
       <Carousel slides={slides} autoplay={true} interval={1000}/>
     </section>
       
       <section class="history-area">
       <div class="container">
         
          
          <div class="row">
            <div class="col-lg-12">
              <div id="history-slid" class="carousel slide" data-ride="carousel" data-interval="false">
                
                <div class="carousel-inner">
                  <div class="carousel-item row active">
                    <div class="col-lg-6 col-md-12 pl-0">
                    <div class="history-img">
                        <img class="img-fluid" src="https://i.ibb.co/CKNmhMX/blog1.jpg" alt="" />
                      </div>
                    
                    </div>
                    <div class="col-lg-6 col-md-12 pr-0">
                    <div class="history-content">
                        <p class="title-bg-small primary-bg wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="500ms">
                          inscription </p>
                        <h2 class="column-title wow fadeInUp" >Inscrivez-vous
gratuitement sur le site</h2>
                        <p className="colorparagrathe">
                        L'inscription sur le site Etuloge est gratuite et ne prend que quelques minutes. Renseignez vos informations et accédez facilement au catalogue d’appartement étudiant à louer dans votre ville.
                        </p>
                        <p className="colorparagrathe">
                        Chaque annonce dispose d’informations claires comme le prix, les conditions, la configuration du logement (studio à louer meublé, deux pièces, appart plus grands pour colocation etc..), le nombre de chambres, les meubles, les équipements de la cuisine et de la salle de bain. L’offre d’Etuloge représente une alternative complémentaire aux cités universitaires (Cités U) et résidences universitaires classiques gérées par les CROUS.
                        </p>
                      </div>
                    
                    </div>
                  </div>
           
                  
                 
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="history-area">
       <div class="container">
         
          
          <div class="row">
            <div class="col-lg-12">
              <div id="history-slid" class="carousel slide" data-ride="carousel" data-interval="false">
                
                <div class="carousel-inner">
                  <div class="carousel-item row active">
                    <div class="col-lg-6 col-md-12 pl-0">
                      
                      <div class="history-content">
                        <p class="title-bg-small primary-bg wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="500ms">
                          NOS OFFRES</p>
                        <h2 class="column-title wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="700ms">Trouvez un logement étudiant et envoyez votre dossier en ligne</h2>
                        <p className="colorparagrathe">
                        Dégotez votre appartement pour étudiant sur Etuloge. L’interface disponible vous permet de visualiser un prix de loyer clair, de monter votre dossier de location en ligne et de le soumettre au propriétaire du logement. 
                        </p>
                        <p className="colorparagrathe">
                        Votre dossier de location étudiant vous servira à candidater pour plusieurs logements dans la région Sud (Marseille, Aix-en-Provence, Nice, Toulon, Cannes, Antibes et alentours) et en région parisienne, et nous avons l’ambition de nous étendre à d’autres villes étudiantes de France, vous gagnez ainsi un temps précieux dans vos démarches et recherches. Utilisez la messagerie mise à disposition pour échanger et demander plus d'informations sur un logement sélectionné.
                        </p>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12 pr-0">
                    <div class="history-img">
                        <img class="img-fluid" src="https://i.ibb.co/CKNmhMX/blog1.jpg" alt="" />
                      </div>
                    </div>
                  </div>
           
                  
                 
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
      </section>
      <section className="history-area">
      <div className="service"> La plateforme tout-en-un <font color="#2ec1cc">qui simplifie la location</font></div>
       
        <div className="LIMHA3ALIMIN">
       
        <div className="jibha ">
          <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1590424012201x637389423830273300%2FIcone%25201.png?w=128&h=128&auto=compress&fit=crop&dpr=1"></img>
          <p className="service"><font className="fon"> Trouvez facilement et réservez <br></br> </font>votre logement étudiant en 1 clic dans votre ville</p>
        </div>
        <div className="jibha">
          <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1590423854399x639251143653548700%2FIcone%25202.png?w=128&h=128&auto=compress&fit=crop&dpr=1"></img>
          <p className="service"><font className="fon"> Un service unique<br></br></font> pour des démarches rapides, à distance et documents en ligne</p>
        </div>
        <div className="jibha">
          <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1590424021073x780180383969628800%2FIcone%25203.png?w=128&h=128&auto=compress&fit=crop&dpr=1"></img>
          <p className="service"><font className="fon"> Signez votre bail<br></br></font> par signature électronique et emménagez en toute sérénité</p>
        </div>
        </div>
        </section>     
         
  </div>

 
 
 
 
  
       
    )
}

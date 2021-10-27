import React from 'react'
import './App.css';
import {Link} from 'react-router-dom'
import quisommenous from './quisommenous';
import { SocialIcon } from 'react-social-icons';
export default function Footer() {
    return (
        <div>
            <footer class="bg-light text-center text-lg-start">
  
  <div class=" p-4">
    
    <div class="row">
      
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Annonces</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <Link to={`/offre`} class="text-dark" >Colocation À Tunis</Link> 
          </li>
          <li>
          <Link to={`/offre`} class="text-dark">Colocation À Ben arous</Link> 
          </li>
          <li>
          <Link to={`/offre`}    class="text-dark">Colocation À Manouba</Link>
          </li>
          <li>
          <Link to={`/offre`}  class="text-dark">Colocation À  Ariana</Link>
          </li>
        
          </ul>
      </div>
      

      
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase mb-0">LIENS UTILES</h5>

        <ul class="list-unstyled">
          <li>
          <Link to='/quisommenous'class="text-dark">Qui sommes-nous?</Link> 
            
          </li>
          <li>
            <a href="#" class="text-dark">Publier une annonce</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Locataire</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Propriétaire</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Blogs</a>
          </li>
        </ul>
      </div>
      

      <div class="col-lg-3 col-md-6 mb-4 mb-md-0 ">
      <h5 class="text-uppercase mb-0">COLOCCS</h5>
        <p style={{color:"#000"}}>La communauté des graphistes et des designers. Trouvez un graphiste freelance ou recrutez un nouveau collaborateur.</p>
        
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0 ">
        

        <ul class="list-unstyled mb-0 d-flex">
          <li>
           <SocialIcon url="https://www.linkedin.com/in/ala-ben-abdallah-564899a3/"/>
          </li>
          <li>
          <SocialIcon url="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"/>
          </li>
          <li>
          <SocialIcon url="https://www.instagram.com/?hl=fr"/>
          </li>
          <li>
          <SocialIcon url="https://www.facebook.com/campaign/landing.php?&campaign_id=1661759179&extra_1=s%7Cc%7C520791443741%7Ce%7Cfacebook%27%7C&placement=&creative=520791443741&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1661759179%26adgroupid%3D64795132555%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D1012760%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjw7MGJBhD-ARIsAMZ0eetDIy_ueSK43_64QkqDBqwzXtl29huag6cJF-NyEVNf-8JP1UKpkj8aApxZEALw_wcB"/>

          </li>
          <li>
          <SocialIcon url="https://github.com/Ala-de"/>
          </li>
          <li>
          <SocialIcon url="https://discord.com/channels/@me"/>
          </li>
          <li>
          <SocialIcon url="https://www.youtube.com/"/>
          </li>
          <li>
          <SocialIcon url="https://www.whatsapp.com/?lang=fr"/>
          </li>
          
        </ul>
        </div>
      </div>
      

      
     
      
    </div>
        </div>
     
        </footer>
        <div class="text-center p-3">
  copyright© 2021 Ala-dev-Simplon.
    <a class="text-dark" href="#">Colocs.tn</a>
  </div>
    </div>
    
    )
}

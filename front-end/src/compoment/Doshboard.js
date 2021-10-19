import React from 'react'
import { Link } from 'react-router-dom';
import IImg from '/home/ala/Bureau/colocsapp/front-end/src/IMAGES/cle.jpeg'
import "./material-dashboard.css"
const Doshboard = () => {
 
    return( 
    <div class="dark-edition">
    <div class="wrapper ">
<div class="sidebar" data-color="purple" data-background-color="black" data-image="../assets/img/sidebar-2.jpg">
{/*       
    Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

    Tip 2: you can also add an image using data-image tag */}

  <div class="logo"><a href="http://www.creative-tim.com" class="simple-text logo-normal">
  <img src={IImg} alt="..." className="logo-dash mb-5"/>
   <p class="NON-ADMIN">colocs App</p>
    </a></div>
  <div class="sidebar-wrapper">
    <ul class="nav">
      <li class="nav-item active  ">
        <Link class="nav-link" to="">
          <i class="material-icons">dashboard</i>
          
        </Link>
      </li>
      <li class="nav-item ">
        <Link class="nav-link" to="./artisan">
          <i class="material-icons">person</i>
          
          {/* <p>User Profile</p> */}
        </Link>
      </li>
      <li class="nav-item ">
        <Link class="nav-link" to="./users">
          <i class="material-icons">profile</i>
          
        </Link>
      </li>
     
     
      <li class="nav-item ">
        <Link class="nav-link" to="./map.html">
          <i class="material-icons">Coocation</i>
          <p></p>
        </Link>
      </li>

       
    </ul>
  </div>
</div>
<div class="main-panel">
  </div>
  {/* Navbar */}
  <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top " id="navigation-example">
  
    <div class="container-fluid">
      <div class="navbar-wrapper">
    
        <a class="navbar-brand" href="javascript:void(0)">Dashboard</a>
      </div>
      </div>
      </nav>
  {/* End Navbar */}
  <div class="content">
    <div class="container-fluid">
    


      
 
      </div>
    </div>
  </div>
  <footer class="footer">
    <div class="container-fluid">
      <nav class="float-left">
        
      </nav>
      <div class="copyright float-right" id="date">
       
      <p>copyright&copy; 2021 Ala-dev-Simplon.Colocs.tn</p>
      </div>
    </div>
  </footer>
  
  


<div class="fixed-plugin">
<div class="dropdown show-dropdown">
  <a href="#" data-toggle="dropdown">
    <i class="fa fa-cog fa-2x"> </i>
  </a>
  <ul class="dropdown-menu">
    <li class="header-title"> Sidebar Filters</li>
    <li class="adjustments-line">
      <a href="javascript:void(0)" class="switch-trigger active-color">
        <div class="badge-colors ml-auto mr-auto">
          <span class="badge filter badge-purple active" data-color="purple"></span>
          <span class="badge filter badge-azure" data-color="azure"></span>
          <span class="badge filter badge-green" data-color="green"></span>
          <span class="badge filter badge-warning" data-color="orange"></span>
          <span class="badge filter badge-danger" data-color="danger"></span>
        </div>
        <div class="clearfix"></div>
      </a>
    </li>
    <li class="header-title">Images</li>
    <li>
      <a class="img-holder switch-trigger" href="javascript:void(0)">
        <img src="../assets/img/sidebar-1.jpg" alt=""/>
      </a>
    </li>
    <li class="active">
      <a class="img-holder switch-trigger" href="javascript:void(0)">
        <img src="../assets/img/sidebar-2.jpg" alt=""/>
      </a>
    </li>
    <li>
      <a class="img-holder switch-trigger" href="javascript:void(0)">
        <img src="../assets/img/sidebar-3.jpg" alt=""/>
      </a>
    </li>
    <li>
      <a class="img-holder switch-trigger" href="javascript:void(0)">
        <img src="../assets/img/sidebar-4.jpg" alt=""/>
      </a>
    </li>
    <li class="button-container">
      <a href="https://www.creative-tim.com/product/material-dashboard-dark" target="_blank" class="btn btn-primary btn-block">Free Download</a>
    </li>
        {/* <li class="header-title">Want more components?</li>
        <li class="button-container">
            <a href="https://www.creative-tim.com/product/material-dashboard-pro" target="_blank" class="btn btn-warning btn-block">
              Get the pro version
            </a>
        </li>  */}
    <li class="button-container">
      <a href="https://demos.creative-tim.com/material-dashboard-dark/docs/2.0/getting-started/introduction.html" target="_blank" class="btn btn-default btn-block">
        View Documentation
      </a>
    </li>
    <li class="button-container github-star">
      <a class="github-button" href="https://github.com/creativetimofficial/material-dashboard/tree/dark-edition" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
    </li>
    <li class="header-title">Thank you for 95 shares!</li>
    <li class="button-container text-center">
      <button id="twitter" class="btn btn-round btn-twitter"><i class="fa fa-twitter"></i> &middot; 45</button>
      <button id="facebook" class="btn btn-round btn-facebook"><i class="fa fa-facebook-f"></i> &middot; 50</button>
      <br/>
      <br/>
    </li>
  </ul>
</div>

</div>
</div>
    )

      }
export default Doshboard
import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../App.css';
import { Jumbotron } from 'react-bootstrap';







// var ready = (callback) => {
//     if (document.readyState !== "loading") callback();
//     else document.addEventListener("DOMContentLoaded", callback);
//   }
//   ready(() => {
//     document.querySelector(".landing").style.height = window.innerHeight + "px";
//   })


export class Frontpage extends Component {

    constructor(){
        super();
        this.state = {
          numberOfRepos: 0
    
        }
      }
      componentDidMount() {
        fetch('https://api.github.com/users/Moreno092/repos')
        .then(response => response.json())
        .then(json => { console.log(json.length)
           this.setState({
             numberOfRepos: json.length
           })
        });
      }

    render()  {
      return(
        <div className="landing">
            
          <div class="overlay"></div>
          <div className="container" id="Background">
          <div class="B1">
          <Jumbotron>
          <div className="animated-text">  
            <h1>Awesome , Student  &amp; Developer</h1>
        </div>
        </Jumbotron>
         <p className="About" >A social and driven guy who is passionate about fixing problem solutions

I am very easy to learn new things and adapted well. Works well in a group but can also take responsibility.

I think my previous experiences can be helpful in my job as a system developer! Because I have worked in web design, I am passionate about fixing problem solutions.

But of course I am also nice and helpful. From my latest job in wordpress design, I have learned to work fast and efficiently, under stress and pressure.

I hope you find what you read interesting! If you want to contact me regarding jobs etc, you can just click on the "Contact me" link below
</p> 


<i class="bi bi-phone"></i>

</div>
         </div >
       

         <hr />
          <div className="Repo">

<p>Number of repos right now: {this.state.numberOfRepos}</p>
<p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg></p>
            </div>
            

<hr class="linedivader"></hr> 


<div class="container" id="conteiner2" >
  <div class="row">
    <div class="col-sm-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="90" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
  <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
</svg>
  <p>Education</p>
    </div>
    <div class="col-sm-9">
      <div class="row">
        <div class="col-8 col-sm-6">

        </div>
        <div class="col-4 col-sm-6">
        <h1>Art Collage</h1>
          <p>A diploma course where I got to study html5, Wordpress, SEO and how to structure your own website.</p>
        </div>
      </div>
    </div>
  </div>
</div>








<div class="container" id="conteiner2">
  <div class="row">
    <div class="col-sm-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="90" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
  </svg>
  <p>Education</p>
    </div>
    <div class="col-sm-9">
      <div class="row">
        <div class="col-8 col-sm-6">

        </div>
        <div class="col-4 col-sm-6">
        <h1>Handelsakademin</h1>
            <p>At Handelsakademin I studied Object Oriented Programming (OOP) where I learned to be a complete programmer during my two years where I learned to handle c #, javascript, html, css, and also work in the same way as you do in working life with scrum .</p>
        </div>
      </div>
    </div>
  </div>
</div>




<hr class="linedivader"></hr>   


<div class="container" id="conteiner2" >
  <div class="row">
    <div class="col-sm-3">
    <h1>Self-employed</h1>
    <p> I had my own company in wordpress web design where I designed and made websites for customers around Gothenburg</p>
    </div>
    <div class="col-sm-9">
      <div class="row">
        <div class="col-8 col-sm-6">
           

        </div>
        <div class="col-4 col-sm-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="90" fill="currentColor" class="bi bi-journal-medical" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v.634l.549-.317a.5.5 0 1 1 .5.866L9 6l.549.317a.5.5 0 1 1-.5.866L8.5 6.866V7.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L7 6l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V4.5A.5.5 0 0 1 8 4zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
</svg>
<p>Experience</p>
        </div>
      </div>
    </div>
  </div>
  </div>

<div class="container" id="conteiner2" >
  <div class="row">
    <div class="col-sm-3">
    <h1>Freelancer</h1>
            <p> Right now I freelance most at a large web development company in sthlm called EmpireWebbByrå where I help design and code websites</p>
    
    </div>
    <div class="col-sm-9">
      <div class="row">
        <div class="col-8 col-sm-6">
           

        </div>
        <div class="col-4 col-sm-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="90" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
</svg>
        </div>
      </div>
    </div>
  </div>
  </div>



  <hr></hr>
  <div class="container" id="conteiner2" >
  <div class="row">
    <div class="col-sm-3">
    

    </div>
    <div class="col-sm-9" id="conteiner2">
      <div class="row">
        <div class="col-8 col-sm-6">
        <h1 className="Contact1">Contact Me</h1>
        </div>
        <div class="col-4 col-sm-6" id="contact">
       
        </div>
      </div>
    </div>
  </div>



  <div class="container" id="conteiner2" >
  <div class="row">
    <div class="col-sm-3">
    

    </div>
    <div class="col-sm-9">
      <div class="row">
        <div class="col-8 col-sm-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="90" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg>
        </div>
        <div class="col-4 col-sm-6" id="contact">
        <a href="tel:0761740977">Telefon</a>
        </div>
      </div>
    </div>
  </div>

  <div class="container" id="conteiner2" >
  <div class="row">
    <div class="col-sm-3">
    
    </div>
    <div class="col-sm-9">
      <div class="row">
        <div class="col-8 col-sm-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="90" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
        </svg>

        </div>
        <div class="col-4 col-sm-6" id="contact">
        <a href = "mailto: felipe_moreno@live.se">Email</a>
        </div>
      </div>
    </div>
  </div>
  </div>

  <div class="container" id="conteiner2" >
  <div class="row">
    <div class="col-sm-3">
    
    </div>
    <div class="col-sm-9">
      <div class="row">
        <div class="col-8 col-sm-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="90" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg>
           
     </div>
        <div class="col-4 col-sm-6" id="contact">
        <a href="https://www.linkedin.com/in/felipe-nyberg/">LinkedIn</a >
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>


  <div class="container" id="conteiner2" >
  <div class="row">
    <div class="col-sm-3">
    
    </div>
    <div class="col-sm-9">
      <div class="row">
        <div class="col-8 col-sm-6">
           
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="90" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
        </div>
        <div class="col-4 col-sm-6" id="contact">
        <a href="https://www.linkedin.com/in/felipe-nyberg/" rel="noopener noreferrer" target="_blank"><p>Github</p></a>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
</div>

     
      )
    }
  }

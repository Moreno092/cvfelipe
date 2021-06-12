import React,{ Component } from 'react';
import '../App.css';


export class Navbar extends Component {
render(){
return(
<nav class="navbar navbar-expand-lg navbar-light bg-light" id="Mynavbar">
  <div class="container-fluid">
    <a class="navbar-brand" href="http://localhost:3000/cvfelipe"><b>Felipes CV</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" ></a>
        <a class="nav-link" href="http://localhost:3000/cvfelipe"></a>
        <a class="nav-link" href="http://localhost:3000/cvfelipe"></a>
        <a class="nav-link disabled" href="http://localhost:3000/cvfelipe" tabindex="-1" aria-disabled="true"></a>
      </div>
    </div>
  </div>
</nav>
)
}
}

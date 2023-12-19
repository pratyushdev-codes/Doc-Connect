import React from 'react'

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-dark" style={{borderRadius:"20px", backgroundColor:"lightblue", marginTop:"8px", marginRight:"10px", marginLeft:"10px"}}> 
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Doc Connect</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
       

        <li class="nav-item">
          <a class="nav-link" href="#">Locate Us</a>
        </li>

         <li class="nav-item">
          <a class="nav-link" href="#">Emergency Help Line</a>
        </li>
               
        <li class="nav-item">
          <a class="nav-link" href="#">Careers</a>
        </li>
       
    
       
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{borderRadius:"20px"}}/>
        <button class="btn btn-outline-primary" type="submit" style={{borderRadius:"20px"}}>Search</button>
      </form>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Navbar
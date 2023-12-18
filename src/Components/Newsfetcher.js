import React from 'react'

export default function Newsfetcher() {
   let {title, description , imageUrl , url , author , date , souece}= this.props;




  return (

<div class="card" style={{width: '18rem'}}>
  <img src={!imageUrl ?  "https://media.istockphoto.com/id/187925868/vector/newspaper-cover-page.jpg?s=612x612&w=0&k=20&c=SantJnFi_0dCOD_HUXgRSJxagvgL7Wp_F_e-rFSUV_E=": imageUrl} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}...</h5>
    <p class="card-text">{description}...</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

    
  )
}

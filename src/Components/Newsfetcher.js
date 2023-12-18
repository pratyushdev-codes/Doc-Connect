import React from 'react'

export default function Newsfetcher() {
   let {title, description , imageUrl , url , author , date , source}= this.props;

  return (

    <div className="my-3 mx-auto   text-white align= center">

    <div className="card">
    <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style ={{left:'90%', zIndex:'1'}}>
          {source}

        </span> 
  <img src={!imageUrl ?  "https://media.istockphoto.com/id/187925868/vector/newspaper-cover-page.jpg?s=612x612&w=0&k=20&c=SantJnFi_0dCOD_HUXgRSJxagvgL7Wp_F_e-rFSUV_E=": imageUrl} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}...</h5>
    <p class="card-text">{description}...</p>
    <p class="card-text text-grey"><small class="text">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>



    <a href={url} class="btn btn-primary">Read More</a>
  </div>
</div> 
</div>

    
  )
}

import React from 'react'
import no from '../components/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'

const Newsitems=(props)=> {
  
    let {title, description,imageUrl,newsurl,author,date,source} = props;
    return (
     
      <div className='container'><div className="card shadow  mb-5  " style={{width: "18rem"}}>
      <img src={!imageUrl?no:imageUrl} className="card-img-top " alt="..."/>
      <div className="card-body">
        <h5 className="card-title ">{title}...</h5>
        <p className="card-text">{description}...</p>
        <span className="badge text-bg-info">{source}</span>
        <p className=" card-text"><small className="text-body-secondary  ">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
        <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More&rarr;</a>
      </div>
    </div>
    </div>
    )
  
}

export default Newsitems
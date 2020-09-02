import React from "react";

const ImageList = (props) => {
  const images = props.images.map(({id,urls,description}) => {
    return <div className="container"><img  key={id } src={urls.regular} alt={description}  style={{display:'flex',width:'200px',height:'190px',justifyContent:'space-evenly',margin:'10px',alignItems:'center'}}/></div>
  });

  return(

    <div class="container ui cards" style={{display:"flex"}}>
  {images}
  </div>
  )
};

export default ImageList;

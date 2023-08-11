import React, {useState} from "react";

const BoxModal = () => {

  const [showImage, setShowImage] = useState(null)

  const imageHandler =(myImage)=>{
      setShowImage(myImage)
  }

  const closeHandler =()=>[
     setShowImage(null)
  ]

  return (
    <div className="imageSection">
      <img src="Men/1.jpg" alt="" onClick={()=>imageHandler("Men/1.jpg")}/>
      <img src="Men/2.jpg" alt="" onClick={()=>imageHandler("Men/2.jpg")} />
      <img src="Men/3.jpg" alt="" onClick={()=>imageHandler("Men/3.jpg")} /> 
      <img src="Men/4.jpg" alt="" onClick={()=>imageHandler("Men/4.jpg")} />
{
  showImage && 
  <div className="container">
    <div className="modal">
      <img src={showImage} alt="" />
      <button onClick={closeHandler}>Close</button>
    </div>
  </div>
}
    
    </div>
  );
};

export default BoxModal;

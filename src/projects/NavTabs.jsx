
import React, {useState} from 'react'

const NavTabs = () => {

    const [showTab, setShowTab] = useState(1)

   const tabHandler =(city)=>{
        setShowTab(city)
   }

  return (
   <div className="tabSection">
    <div className="navbar">
        <ul>
            <li onClick={()=>tabHandler(1)} className={showTab ===1? "active": " "} >Delhi</li>
            <li onClick={()=>tabHandler(2)} className={showTab ===2? "active": " "}>Mumbai</li>
            <li onClick={()=>tabHandler(3)} className={showTab ===3? "active": " "}>Hyderabad</li>
            <li onClick={()=>tabHandler(4)} className={showTab ===4? "active": " "}>Bangalore</li>
        </ul>
    </div>
    <div className="content">
        <div className={`tab1 ${showTab ===1? "active": " "}`} >
           This is Delhi COntent
        </div>
        <div className={`tab2 ${showTab ===2? "active": " "}`}>
          I am From Mumbai
        </div>
        <div className={`tab3 ${showTab ===3? "active": " "}`}>
           Hello Hyderabad
        </div>
        <div className={`tab4 ${showTab ===4? "active": " "}`}>
            I am fro Bangalore
        </div>
    </div>
   </div>

  )
}

export default NavTabs
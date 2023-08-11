

import React, {useState} from 'react'

const ToggleEffect = () => {

    const [show, setShow] = useState(false)

    const showHandler =()=>{
            setShow(!show)
    }

  return (
    <div className="accSection">
        <div className="box1" onClick={showHandler}>
            <h2>What is React ?</h2>
        </div>

{show && 

<div className="box2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore facilis corporis nobis itaque in, autem sequi ducimus adipisci dolorem quibusdam ex iusto minima at, dolores quia voluptate maxime inventore sunt natus atque nisi cupiditate? Porro cum provident consequatur iusto esse exercitationem, qui et nisi nemo praesentium fuga tempore labore eius.</p>
        </div>
}

        
    </div>
  )
}

export default ToggleEffect
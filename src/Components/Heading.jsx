import React from 'react'
import "../App.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import  { useEffect, useState } from 'react'
import Translation from '../Components/Placement/Pdata.json';

const Heading = () => {

  const [language,setLanguage]=useState("English")
  const [content,setContent] = useState({})

  useEffect(()=>{

    if(language=="English"){
      setContent(Translation.english)
  
    }
    else if (language=="Kannada"){
      setContent(Translation.kannada)
    }
  
  })

  return (
    <>
  <div className='head1'>
<LocationOnIcon/><span style={{fontWeight:"bold"}}>{content.city}</span>


<select value={language} onChange={(e)=>{setLanguage(e.target.value)}}>
<option>English</option>
<option>Kannada</option>
<option>Hindi</option>
</select>


  </div>

<img  src="Images/logo.jpg" className="img-fluid" alt="..."></img>
<div style={{backgroundColor:"lightblue"}}>
<marquee><h5 style={{color:"red"}}><span className='News'>News</span>{content.note}</h5></marquee>
</div>

    </>
  )
}

export default Heading

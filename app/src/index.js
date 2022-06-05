import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'


import Content from './Components/Content'
import Download from './Components/Download'

const root = createRoot(document.getElementById("root"))
root.render(
  <div>
    <Content/>
    <Download/>

    {/* <span id="review-container">
    <h2 id="review-heading">There's only two types of people in this world. Ones who use Music and ones who don't.</h2>
      <Review content={review1_content}/>
      <Review content={review2_content}/>
      <Review content={review3_content}/>
    </span> */}
  </div>
);




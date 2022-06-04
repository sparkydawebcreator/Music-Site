import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'

import Welcome from './Components/Welcome'
import Content from './Components/Content'
import Download from './Components/Download'

const root = createRoot(document.getElementById("root"))

root.render(
  <div>
    <Content/>
    <Download/>
  </div>
);



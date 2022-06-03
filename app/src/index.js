import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Welcome from './Components/Welcome'
import Options from './Components/Options'
import DoAnything from './Components/DoAnything'
import Snippets from './Components/Snippets'

const root = createRoot(document.getElementById("root"))

root.render(
  <div>
    <Welcome/>
    <Snippets/>
    <Options/>
  </div>
);
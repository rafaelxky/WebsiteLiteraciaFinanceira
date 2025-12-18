import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { TestArticlesService } from './services/articles/TestArticlesService.js'
import { TestUserService } from './services/users/TestUserService.js'
import { TestSecurityService } from './services/security/TestSecurityService.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// main
  // header 
    // search bar
    // read btn
    // login / logout
  // footer 
    // info
  // body 
    // title
    // text
    // btn
// login 
  // form 
// articles page
  // grelha de artigos
// article page
  // title 
  // body

// services
  // user
  // loggin
  // articles

// models
  // article
  /*
  {
    "id": "int",
    "title": "title",
    "body": "body"
  }
  user:
  {
    "id": "int",
    "username": "string",
    "email": "string"
  }
  loggin:
  {
    "token": "string"
  }
  */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     for(const prop in reactElement.props) {
//         if(prop === 'children') continue;
//         domElement.setAttribute(prop, reactElement.props[prop])
//     }
//     container.appendChild(domElement)

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // anotherElement
    // reactElement
    <App/>
  
)

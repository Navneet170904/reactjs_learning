import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")} 
          className="outlline-none px-4 py-1 rounded-full text-black shawdow-lg" 
          style={{backgroundColor: "red"}}> Red</button>
          <button
          onClick={() => setColor("green")} 
          className="outlline-none px-4 py-1 rounded-full text-black shawdow-lg" 
          style={{backgroundColor: "green"}}> Green</button>
          <button
          onClick={() => setColor("blue")}  
          className="outlline-none px-4 py-1 rounded-full text-black shawdow-lg" 
          style={{backgroundColor: "blue"}}> Blue</button>
          <button 
          onClick={() => setColor("black")} 
          className="outlline-none px-4 py-1 rounded-full text-white shawdow-lg" 
          style={{backgroundColor: "black"}}> Black</button>
          <button 
          onClick={() => setColor("lavender")} 
          className="outlline-none px-4 py-1 rounded-full text-black shawdow-lg" 
          style={{backgroundColor: "lavender"}}> Lavender</button>
          <button 
          onClick={() => setColor("pink")} 
          className="outlline-none px-4 py-1 rounded-full text-black shawdow-lg" 
          style={{backgroundColor: "pink"}}> Pink</button>
          <button 
          onClick={() => setColor("yellow")} 
          className="outlline-none px-4 py-1 rounded-full text-black shawdow-lg" 
          style={{backgroundColor: "yellow"}}> Yellow</button>
          <button 
          onClick={() => setColor("grey")} 
          className="outlline-none px-4 py-1 rounded-full text-black shawdow-lg" 
          style={{backgroundColor: "grey"}}> Grey</button>
        </div>
      </div>
    </div>
  )
}

export default App

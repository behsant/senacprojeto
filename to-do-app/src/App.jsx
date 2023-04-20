import { Button, TextField } from "@mui/material"
import "./style.css"
import { useState } from "react"

function App() {
const [textTarefa,setTextTarefa] = useState("");

function click(){
  console.log(textTarefa)
}

  return (
   <form className="form-container">
    
    <TextField value={textTarefa} 
    id="standard-basic" 
    label="Tarefa" 
    variant="standard" 
    placeholder="Digite a tarefa" 
    onChange={({target})=> setTextTarefa(target.value)}
    />

    <Button variant="contained" onClick={click}>ADD</Button>
   </form>
  )
}

export default App

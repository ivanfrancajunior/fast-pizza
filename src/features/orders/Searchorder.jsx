import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Searchorder = () => {
const [query, setQuery] = useState('')
const navigate= useNavigate() 
    
  const handleSubmit =(e) =>{
    e.preventDefault()
    if(!query) return 
    setQuery("")
    return navigate(`/order/${query}`)

  }  
return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setQuery(e.target.value)} placeholder='Serch order #' className='border border-purple-500 p-1 rounded-md'/>
    </form>
  )
}

export default Searchorder
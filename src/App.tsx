import { useEffect } from "react"
import { useHeadlineContext } from "./hooks/useHeadlineContext"
import { fetchTopHeadlines } from "./logic/getTopHeadlines"

function App() {
  const { dispatch } = useHeadlineContext()
  // Este useEffect setea el state del reducer, TO DO: 💠Manejar el error, osea si falla mostrar componente, y mover la funcion getHeadlines a carpeta logic
  useEffect(()=> {
      const getHeadlines = async()=> {
        const headlines = await fetchTopHeadlines()
        try {
        dispatch({type: 'get-top-headlines', payload:{result: headlines!.output}})
      } catch {
        dispatch({type: 'set-error-in-top-headlines'})
      }
    } 
    
    getHeadlines()
  },[])

  return (
    <>
      <h1>Hello world</h1>
    </>
  )
}

export default App

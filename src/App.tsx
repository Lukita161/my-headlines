import { useEffect } from "react"
import { useHeadlineContext } from "./hooks/useHeadlineContext"
import { fetchTopHeadlines } from "./logic/getTopHeadlines"
import { TopHeadlines } from "./components/TopHeadlines"

function App() {
  // Esta funcion devuelve los valores del fetch que no son null ni undefined
  
const { dispatch } = useHeadlineContext()
// Este useEffect setea el state del reducer, TO DO: 💠Manejar el error, osea si falla mostrar componente, y mover la funcion getHeadlines a carpeta logic
useEffect(()=> {
      const getHeadlines = async()=> {
        try {
            const headlines = await fetchTopHeadlines()
            /*const filteredArray = filterValidHeadlines(headlines!.output)*/
            if(headlines!.success) {
              dispatch({type: 'get-top-headlines', payload:{result: headlines!.output}})
            }
          }
      catch {
        dispatch({type: 'set-error-in-top-headlines'})
      }
    } 
    getHeadlines()
  }, [dispatch])

  return (
    <>
      <header className="w-screen p-4 bg-primary-blue">
        <h1 className="font-black text-4xl text-white">My Newslatter</h1>
      </header>
      <main className=" bg-dark-blue mt-16">
        <TopHeadlines />
      </main>
    </>
  )
}

export default App

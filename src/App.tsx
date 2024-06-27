import { useEffect } from "react"
import { useHeadlineContext } from "./hooks/useHeadlineContext"
import { fetchTopHeadlines } from "./logic/getTopHeadlines"
import { TopHeadlines } from "./components/TopHeadlines"
import { Headlines } from "./types"
import * as v from 'valibot'
import { verifiedHeadlinesSchema } from "./schema/schemas"

function App() {
  // Esta funcion devuelve los valores del fetch que no son null ni undefined
  const filterValidHeadlines = (array: Headlines)=> {
    const filteredArray = array.filter(object => Object.values(object).every(value => value !== null && value !== undefined))
    const verifySchema = v.safeParse(verifiedHeadlinesSchema, filteredArray) 
    return verifySchema
}
  const { dispatch } = useHeadlineContext()
  // Este useEffect setea el state del reducer, TO DO: 💠Manejar el error, osea si falla mostrar componente, y mover la funcion getHeadlines a carpeta logic
  useEffect(()=> {
      const getHeadlines = async()=> {
        const headlines = await fetchTopHeadlines()
        try {
            const filteredArray = filterValidHeadlines(headlines!.output)
            if(filteredArray.success) {
              dispatch({type: 'get-top-headlines', payload:{result: filteredArray.output}})
            }
      } catch {
        dispatch({type: 'set-error-in-top-headlines'})
      }
    } 
    
    getHeadlines()
  },[])

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

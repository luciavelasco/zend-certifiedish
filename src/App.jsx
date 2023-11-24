import { useState } from "react";
import './App.css';
import { Results, Start, Test } from "./pages";
import { Timer } from "./pages/times";

/*
Login
Start page
Question (Go back?/Are you sure?)
Results page
 */

// const useAuth = () => ({ loggedIn: true })

const App = () => {
  // const { loggedIn } = useAuth()
  const [page, setPage] = useState()
  const [results, setResults] = useState(undefined)

  /*
    TODO: this will clear your results modal
   */

  return (
    <>
      {/*{loggedIn ? <Start/> : <LogIn/>}*/}
      {page === `test` ? <Test setPage={setPage} setResults={setResults}/> :
       page === `results` ? <Results setPage={setPage} answers={results}/> :
        <Start setPage={setPage} />}
    </>
  )
}

export default App


import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'

// Data Load
const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())

function App() {

  return (
    <>

      <Suspense 
      fallback={<h4>Countries are Loading bro wait</h4>}>
        <Countries 
        countriesPromise={countriesPromise}>
        </Countries>
      </Suspense>
      
    </>
  )
}

export default App

import './App.css'
import Card from './Card'

function App() {
  const prop1 = {name: "Farman Ali", description:"This is description about a failed person, name Farman Ali who failed due to it's lazyness. But it's okay he'll rewrite his story.", btnText: "Show Miror"}

  return (
    <>
      <h1 className='mb-4'>Chai Aur React</h1>
      <div className='flex justify-center justify-items-center gap-5 p-4 flex-row flex-wrap'>
      <Card myProps={prop1}/>
      </div>
    </>
  )
}

export default App

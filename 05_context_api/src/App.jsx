import './App.css'
import { Signup, Profile } from './components'
import { UserContextProvider } from './Context'
function App() {


  return (
    <>
      <UserContextProvider>
        <Signup/>
        <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App

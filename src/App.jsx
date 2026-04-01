import Phone from "./components/Phone"
import phoneDetails from "./components/phoneDetails.json"

function App() {


  return (
    <>
      {phoneDetails.map((phone) => {
        return <Phone key={phone.id} phone={phone} />
      })}
    </>

  )
}

export default App

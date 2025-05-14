import Cards from "./components/Cards"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <div className="cards">
        <Cards imageUrl = "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D" title = "card 1" content = "first card" />
        <Cards imageUrl = "./game.png" title = "card 2" content = "first card" />
        <Cards imageUrl = "./game.png" title = "card 3" content = "first card" />
        <Cards imageUrl = "./game.png" title = "card 4" content = "first card" />
      </div>
      <Footer />
    </>
  )
}

export default App

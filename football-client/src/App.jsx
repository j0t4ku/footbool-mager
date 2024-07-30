import './App.css'
import Footer from './containers/Footer'
import Navbar from './containers/Navbar'
import Results from './containers/Results'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <div className='flex justify-center'>
        <section className='w-5/6 py-6 '>
          <Results></Results>
        </section>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App

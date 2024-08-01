import './App.css'
import Footer from './containers/Footer'
import Navbar from './containers/Navbar'
import Teams from './containers/Teams'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <div className='flex justify-center'>
        <section className='w-5/6 py-6 '>
          <Teams></Teams>
        </section>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App

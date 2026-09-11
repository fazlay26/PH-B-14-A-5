
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Technology from './components/Technology'
import type iTechnology from './Types/TechnologyTypes'
import { ToastContainer } from 'react-toastify'


const technologyPromise = async():Promise<iTechnology[]> =>{
    const res = await fetch('/public/data.json');
    const data = await res.json();
    return data;

}

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Suspense fallback={<p>Loading Technology</p>}>
      <Technology technologyPromise={technologyPromise()}></Technology>
      <ToastContainer></ToastContainer>
    </Suspense>
    <Footer></Footer>
      
    </>
  )
}

export default App

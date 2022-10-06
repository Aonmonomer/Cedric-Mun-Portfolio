import './App.css'
import About from './pages.js/About'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Projects from './pages.js/Projects'

function App() {
  return (
    <div className="header_container">
      <header className="profile_image">
        <img src="https://i.ibb.co/yfPQD4m/IMG-3559.jpg" alt="Cedric-image" />
        <h1>Cedric Seng Kit Mun</h1>
      </header>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

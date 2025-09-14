import React from 'react'
import { Container } from 'react-bootstrap'
import SiteNavbar from './components/SiteNavbar'
import SiteFooter from './components/SiteFooter'
import Home from './pages/Home'
import Cursos from './pages/Cursos'

export default function App() {
  const [route, setRoute] = React.useState('home')
  return (
    <>
      <SiteNavbar onNavigate={setRoute} />
      <Container className="my-4">
        {route === 'home' ? <Home /> : <Cursos />}
      </Container>
      <SiteFooter />
    </>
  )
}

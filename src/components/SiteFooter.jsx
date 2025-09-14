import React from 'react'
import { Container } from 'react-bootstrap'

export default function SiteFooter() {
  return (
    <footer className="bg-dark text-light py-3 mt-4">
      <Container className="text-center">
        <div>Integrantes: Nombre Apellido - 1234567, Otro Nombre - 7654321</div>
        <div className="small">Repositorio: T1-DW</div>
      </Container>
    </footer>
  )
}

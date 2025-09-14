import React from 'react'
import { Carousel, Row, Col, Card } from 'react-bootstrap'

const cursos = [
  { id: 1, titulo: 'Programación', descripcion: 'Introducción a la programación y algoritmos.' },
  { id: 2, titulo: 'Bases de Datos', descripcion: 'Modelado y consultas SQL.' },
  { id: 3, titulo: 'Sistemas Operativos', descripcion: 'Gestión de procesos y memoria.' },
  { id: 4, titulo: 'Desarrollo Web', descripcion: 'HTML, CSS, JS y frameworks.' },
  { id: 5, titulo: 'Ética Profesional', descripcion: 'Consideraciones éticas en TI.' }
]

export default function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <div style={{height:200, background:'#6c757d', color:'white'}} className="d-flex align-items-center justify-content-center">
            <h3>Bienvenido al sitio de cursos</h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{height:200, background:'#343a40', color:'white'}} className="d-flex align-items-center justify-content-center">
            <h3>Explora los cursos y su contenido</h3>
          </div>
        </Carousel.Item>
      </Carousel>

      <h2 className="mt-4">Cursos disponibles</h2>
      <Row>
        {cursos.map(c => (
          <Col key={c.id} xs={12} md={6} lg={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{c.titulo}</Card.Title>
                <Card.Text>{c.descripcion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

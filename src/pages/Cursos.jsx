import React from 'react'
import { Accordion, Table, ListGroup } from 'react-bootstrap'

const data = [
  {
    id: 'programacion',
    titulo: 'Programación',
    puntos: ['Variables y tipos', 'Estructuras de control', 'Funciones', 'Estructuras de datos', 'Algoritmos básicos'],
    tabla: [['Tema','Horas'], ['Algoritmos','10'], ['Estructuras de control','8'], ['Funciones','6']]
  },
  {
    id: 'bd',
    titulo: 'Bases de Datos',
    puntos: ['Modelado entidad-relación', 'Normalización', 'SQL', 'Índices', 'Transacciones'],
    tabla: [['Comando','Descripción'], ['SELECT','Consulta de datos'], ['INSERT','Insertar dato'], ['UPDATE','Actualizar dato']]
  },
  {
    id: 'sistemas',
    titulo: 'Sistemas Operativos',
    puntos: ['Procesos y hilos', 'Planificación', 'Memoria', 'Sistemas de archivos', 'Seguridad'],
    tabla: [['Concepto','Descripción'], ['Proceso','Instancia de programa'], ['Hilo','Subunidad de ejecución']]
  },
  {
    id: 'desarrollo',
    titulo: 'Desarrollo Web',
    puntos: ['HTML/CSS', 'JavaScript', 'Frameworks', 'Accesibilidad', 'Responsive Design'],
    tabla: [['Tecnología','Uso'], ['HTML','Estructura'], ['CSS','Estilos'], ['JS','Comportamiento']]
  },
  {
    id: 'etica',
    titulo: 'Ética Profesional',
    puntos: ['Código de conducta', 'Privacidad', 'Responsabilidad', 'Propiedad intelectual', 'Impacto social'],
    tabla: [['Tema','Detalle'], ['Privacidad','Protección de datos'], ['Propiedad','Derechos de autor']]
  }
]

export default function Cursos() {
  return (
    <div>
      <h2>Detalle de Cursos</h2>
      <Accordion defaultActiveKey="0">
        {data.map((c, idx) => (
          <Accordion.Item eventKey={String(idx)} key={c.id}>
            <Accordion.Header>{c.titulo}</Accordion.Header>
            <Accordion.Body>
              <h5>Puntos clave</h5>
              <ListGroup className="mb-3">
                {c.puntos.map((p, i) => <ListGroup.Item key={i}>{p}</ListGroup.Item>)}
              </ListGroup>

              <h5>Tabla resumen</h5>
              <Table striped bordered hover>
                <tbody>
                  {c.tabla.map((row, i) => (
                    <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
                  ))}
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

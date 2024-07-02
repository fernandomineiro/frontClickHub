import React from 'react';

import { Container, Row, Col, Card, Form, Table } from 'react-bootstrap';
const Map = () =>{
    return (
      <Container className="mt-5">
      <h2 className="text-white">Mapeador de anúncios <span className="badge bg-info text-dark">beta</span></h2>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Mapeador de anúncios</li>
        </ol>
      </nav>
      <Card className="bg-dark text-white mb-4">
        <Card.Body>
          <Card.Title>Mapear anúncios</Card.Title>
          <Form>
            <Form.Group controlId="formIntegration">
              <Form.Label>Integração</Form.Label>
              <Form.Control as="select">
                <option>Selecione uma integração</option>
                {/* Adicione outras opções aqui */}
              </Form.Control>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
      <Card className="bg-dark text-white">
        <Card.Body>
          <Card.Title>Sua fila de mapeamento</Card.Title>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Código</th>
                <th>Canal</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="3" className="text-center">Nenhum mapeamento encontrado</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
    )
}

export default Map;
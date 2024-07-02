import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Table, Modal,  InputGroup, FormControl } from 'react-bootstrap';

const KitCreator = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
      <Container className="mt-5">
        <h2>Criador de Kits</h2>
        <p>
          <a href="#">Home</a> {'>'} <a href="#">Kits</a> {'>'} Criador de Kits
        </p>
        <Row>
          <Col md={6}>
            <h4>Informações do Kit</h4>
            <Form>
              <Form.Group controlId="formKitName" className="mb-3">
                <Form.Label>Qual o nome desse Kit?</Form.Label>
                <Form.Control type="text" placeholder="Nome do Kit" />
              </Form.Group>
              <Form.Group controlId="formKitPrice" className="mb-3">
                <Form.Label>Qual o preço desse Kit?</Form.Label>
                <Form.Control type="text" placeholder="Preço do Kit" />
              </Form.Group>
              <Form.Group controlId="formKitDescription" className="mb-3">
                <Form.Label>Descrição</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Descrição do Kit" />
              </Form.Group>
            </Form>
          </Col>
          <Col md={6}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h4>Produtos do Kit</h4>
            <Button onClick={handleShow} variant="warning" className="mb-3">
              <i className="bi bi-plus-circle"></i> Adicionar Produto
            </Button>
            </div>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>IMG</th>
                  <th>SKU</th>
                  <th>Produto</th>
                  <th>Qtde</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="5" className="text-center">
                    Nenhum produto adicionado
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Button variant="success" className="mt-3">
          <i className="bi bi-check-circle"></i> Criar Kit
        </Button>
        </div>
      </Container>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Selecionar Produto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Buscar"
              aria-label="Buscar"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">
              <i className="bi bi-search"></i>
            </InputGroup.Text>
          </InputGroup>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Img</th>
                <th>Produto</th>
                <th>Custo</th>
                <th>Selecionar</th>
              </tr>
            </thead>
            <tbody>
              {/* Exemplo de linhas, deve ser preenchido dinamicamente */}
              <tr>
                <td>
                  <img src="https://via.placeholder.com/50" alt="Produto 1" />
                </td>
                <td>Aplicador De Tag Preto</td>
                <td>R$ 12,99</td>
                <td>
                  <Button variant="warning">Selecionar</Button>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="https://via.placeholder.com/50" alt="Produto 2" />
                </td>
                <td>Prendedor Papel Binder 25mm 48 Unidades</td>
                <td>R$ 10,99</td>
                <td>
                  <Button variant="warning">Selecionar</Button>
                </td>
              </tr>
              {/* Adicione mais produtos conforme necessário */}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
      </>
    );
  };
  
  export default KitCreator;
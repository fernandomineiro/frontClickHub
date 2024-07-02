import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const InfoPedido = () => {
  return (
    <div className="container mt-5">
      <h2>Informações do pedido</h2>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridClientType">
            <Form.Label>Tipo de cliente</Form.Label>
            <Form.Control as="select">
              <option>Pessoa Física</option>
              <option>Pessoa Jurídica</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control type="text" placeholder="Nome do cliente" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCPF">
            <Form.Label>CPF</Form.Label>
            <Form.Control type="text" placeholder="Ex: 012.345.678-90" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCEP">
            <Form.Label>CEP</Form.Label>
            <Form.Control type="text" placeholder="Ex: 12345-678" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridStreet">
            <Form.Label>Rua</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridNumber">
            <Form.Label>Número</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridComplement">
            <Form.Label>Complemento</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridNeighborhood">
            <Form.Label>Bairro</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Cidade</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>UF</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridIntegration">
            <Form.Label>Integração</Form.Label>
            <Form.Control as="select">
              <option>Selecionar</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridSaleValue">
            <Form.Label>Valor da venda</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Row>
        <div style={{display: 'flex', justifyContent: 'end'}}>
        <Button style={{backgroundColor: 'red', color: 'white', border:'none'}} className="me-2"> <i style={{ fontSize: '18pt'}} className="bi bi-less" ></i> <label style={{position: 'relative', top: '-3px', fontWeight: '700'}}>Cancelar</label></Button>
        <Button style={{backgroundColor: 'orange', color: 'black', border:'none'}}> <i style={{ fontSize: '18pt'}} className="bi bi-plus"></i> <label style={{position: 'relative', top: '-3px', fontWeight: '700'}}>Criar</label></Button>
        </div>
      </Form>
    </div>
  );
};

export default InfoPedido;
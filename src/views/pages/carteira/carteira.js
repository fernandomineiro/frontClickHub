import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Button, Form, InputGroup, FormControl, Table, Row, Col,  Card, } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const StyledTitleStart = styled.label`
display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
    font-size: 14pt;
`;

const StyledTitle = styled.label`
 backgroud-color: black;
 font-weight: 600; 
 margin-top: 5px;
`;


const Carteira = () =>{
  const navigate = useNavigate();
  const goToAdd = ()  =>{
    navigate('/infopedido');
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
    return (
      <>
        <div className="container">
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <StyledTitleStart>Carteira</StyledTitleStart>
            <Button  onClick={handleShow} style={{backgroundColor:'orange', border: 'none', color: 'black'}} className="mb-3">
              <i className="bi bi-plus-circle"></i> Adicionar Saldo
            </Button>
            </div> 
  <div className="row" style={{marginBottom: '10px'}}>
    <div className="col-3">
    <div className="card" style={{position: 'relative', height: '120px'}}>
  <div className="card-body" style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
  <p style={{fontSize: '14px', fontWeight: '400', marginBottom: '-0px'}}>Saldo Atual</p>
  <p style={{fontSize: '26px', fontWeight: '600', marginBottom: '-2px'}}>R$ 0,00</p>
  </div>
  <div>
  <button className="btn btn-warning mx-1"><i className="bi bi-box"></i></button>
  </div>
  </div>
</div>
    </div>
    <div className="col-3">
    <div className="card" style={{position: 'relative', height: '120px'}}>
  <div className="card-body" style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
  <p style={{fontSize: '14px', fontWeight: '400', marginBottom: '-0px'}}>ENTRADAS</p>
  <p style={{fontSize: '26px', fontWeight: '600', marginBottom: '-2px'}}>R$ 0,00</p>
  <p style={{fontSize: '12px', cursor: 'pointer'}}>Ver entradas</p>
  </div>
  <div>
  <button className="btn btn-warning mx-1"><i className="bi bi-box"></i></button>
  </div>
  </div>
</div>
    </div>
    
    <div className="col-3">
    <div className="card" style={{position: 'relative', height: '120px'}}>
  <div className="card-body" style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
  <p style={{fontSize: '14px', fontWeight: '400', marginBottom: '-0px'}}>SAÍDAS</p>
  <p style={{fontSize: '26px', fontWeight: '600', marginBottom: '-2px'}}>R$ 0,00</p>
  <p style={{fontSize: '12px', cursor: 'pointer'}}>ver saídas</p>
  </div>
  <div>
  <button className="btn btn-warning mx-1"><i className="bi bi-box"></i></button>
  </div>
  </div>
</div>
    </div>

    <div className="col-3">
    <div className="card" style={{position: 'relative', height: '120px'}}>
  <div className="card-body" style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
  <p style={{fontSize: '14px', fontWeight: '400', marginBottom: '-0px'}}>TOTAL EM CACSBACK RECEBIDO</p>
  <p style={{fontSize: '26px', fontWeight: '600', marginBottom: '-2px'}}>R$ 0,00</p>

  </div>
  <div>
  <button className="btn btn-warning mx-1"><i className="bi bi-box"></i></button>
  </div>
  </div>
</div>
    </div>

  </div>


{/* <div className="container mt-4">
      <Row>
        <Col md={3}>
          <Card className="text-white bg-dark mb-3">
            <Card.Body>
              <Card.Title>Saldo Atual</Card.Title>
              <Card.Text>
                <h3>R$ 0,00</h3>
              </Card.Text>
              <Card.Footer className="text-muted">
                <i className="bi bi-wallet2" style={{ fontSize: '1.5rem', color: 'yellow' }}></i>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-white bg-dark mb-3">
            <Card.Body>
              <Card.Title>Entradas</Card.Title>
              <Card.Text>
                <h3>R$ 0,00</h3>
                <small>Ver entradas</small>
              </Card.Text>
              <Card.Footer className="text-muted">
                <i className="bi bi-arrow-up-circle" style={{ fontSize: '1.5rem', color: 'green' }}></i>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-white bg-dark mb-3">
            <Card.Body>
              <Card.Title>Saídas</Card.Title>
              <Card.Text>
                <h3>R$ 0,00</h3>
                <small>Ver saídas</small>
              </Card.Text>
              <Card.Footer className="text-muted">
                <i className="bi bi-arrow-down-circle" style={{ fontSize: '1.5rem', color: 'red' }}></i>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-white bg-dark mb-3">
            <Card.Body>
              <Card.Title>Total em Cashback Recebido</Card.Title>
              <Card.Text>
                <h3>R$ 0,00</h3>
              </Card.Text>
              <Card.Footer className="text-muted">
                <i className="bi bi-arrow-repeat" style={{ fontSize: '1.5rem', color: 'purple' }}></i>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div> */}

  <div className="container my-5 text-white" style={{ backgroundColor: '#181818', padding: '20px', borderRadius: '10px' }}>
      <h5>EXTRATO DO PERÍODO</h5>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Data</th>
            <th>Código</th>
            <th>Código Venda</th>
            <th>Integração</th>
            <th>Cliente</th>
            <th>Valor da Venda</th>
            <th>Custo</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="8" className="text-center">Nenhum pedido encontrado</td>
          </tr>
        </tbody>
      </Table>
    </div>
</div>
<Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Saldo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formAmount">
              <Form.Label>Quanto você quer adicionar?</Form.Label>
              <Form.Control type="text" placeholder="R$ 100,00" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPaymentMethod">
              <Form.Label>Forma de pagamento</Form.Label>
              <Form.Select>
                <option>Pix</option>
                <option>Cartão de Crédito</option>
                <option>Boleto</option>
              </Form.Select>
            </Form.Group>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Valor</th>
                  <th>Taxa Mercado Pago</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>R$ 100,00</td>
                  <td>R$ 0,00</td>
                </tr>
                <tr>
                  <td colSpan="2" className="text-right">Total: R$ 100,00</td>
                </tr>
              </tbody>
            </Table>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="Digite seu e-mail" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDocumentType">
              <Form.Label>Documento</Form.Label>
              <Form.Select>
                <option>CPF</option>
                <option>CNPJ</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDocumentNumber">
              <Form.Label>Número do CPF</Form.Label>
              <Form.Control type="text" placeholder="Digite o número do CPF" />
            </Form.Group>
            <Button variant="success" type="submit">
              Criar Pix
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
</>

    )
}

export default Carteira;
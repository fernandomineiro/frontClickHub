import React, { useState } from 'react';
import styled from 'styled-components';
import { Table, Dropdown, DropdownButton, Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const StyledTitle = styled.label`
 backgroud-color: black;
 font-weight: 600; 
 margin-top: 5px;
`;

const Pedidos = () =>{
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const infoPedido = () =>{
    navigate('/infopedido');
  }
    
    return (
      <>
        <div className="container">
  <div className="row" style={{marginBottom: '10px'}}>
    <div className="col-4">
    <div className="card" style={{position: 'relative'}}>
  <div className="card-body" style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
  <p style={{fontSize: '14px', fontWeight: '400', marginBottom: '-0px'}}>PEDIDOS NO PERIODO</p>
  <p style={{fontSize: '26px', fontWeight: '600', marginBottom: '-2px'}}>0</p>
  <p style={{fontSize: '12px', cursor: 'pointer'}}>Ver pedidos</p>
  </div>
  <div>
  <button className="btn btn-warning mx-1"><i className="bi bi-box"></i></button>
  </div>
  </div>
</div>
    </div>
    <div className="col-4">
    <div className="card" style={{position: 'relative'}}>
  <div className="card-body" style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
  <p style={{fontSize: '14px', fontWeight: '400', marginBottom: '-0px'}}>VENDIDO NO PERIODO</p>
  <p style={{fontSize: '26px', fontWeight: '600', marginBottom: '-2px'}}>0</p>
  <p style={{fontSize: '12px', cursor: 'pointer'}}>Ver pedidos</p>
  </div>
  <div>
  <button className="btn btn-warning mx-1"><i className="bi bi-box"></i></button>
  </div>
  </div>
</div>
    </div>
    <div className="col-4">
    <div className="card" style={{position: 'relative'}}>
  <div className="card-body" style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
  <p style={{fontSize: '14px', fontWeight: '400', marginBottom: '-0px'}}>PEDIDOS NO PERIODO</p>
  <p style={{fontSize: '26px', fontWeight: '600', marginBottom: '-2px'}}>0</p>
  <p style={{fontSize: '12px', cursor: 'pointer'}}>Ver pedidos</p>
  </div>
  <div>
  <button className="btn btn-warning mx-1"><i className="bi bi-box"></i></button>
  </div>
  </div>
</div>
    </div>
    
  </div>
  <div className="row" style={{marginBottom: '10px'}}>
    <div className="col-4">
    <div className="card" style={{position: 'relative'}}>
  <div className="card-body" style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
  <p style={{fontSize: '14px', fontWeight: '400', marginBottom: '-0px'}}>NÃO PAGOS</p>
  <p style={{fontSize: '26px', fontWeight: '600', marginBottom: '-2px'}}>0</p>
  <p style={{fontSize: '12px', cursor: 'pointer'}}>Mostrar</p>
  </div>
  <div>
  <button className="btn btn-warning mx-1"><i className="bi bi-box"></i></button>
  </div>
  </div>
</div>
    </div>
    <div className="col-4">
    <div className="card" style={{position: 'relative'}}>
  <div className="card-body" style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
  <p style={{fontSize: '14px', fontWeight: '400', marginBottom: '-0px'}}>PROCESSANDO</p>
  <p style={{fontSize: '26px', fontWeight: '600', marginBottom: '-2px'}}>0</p>
  <p style={{fontSize: '12px', cursor: 'pointer'}}>Mostrar</p>
  </div>
  <div>
  <button className="btn btn-warning mx-1"><i className="bi bi-box"></i></button>
  </div>
  </div>
</div>
    </div>
    <div className="col-4">
    <div className="card" style={{position: 'relative'}}>
  <div className="card-body" style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
  <p style={{fontSize: '14px', fontWeight: '400', marginBottom: '-0px'}}>ENVIADOS</p>
  <p style={{fontSize: '26px', fontWeight: '600', marginBottom: '-2px'}}>0</p>
  <p style={{fontSize: '12px', cursor: 'pointer'}}>Mostrar</p>
  </div>
  <div>
  <button className="btn btn-warning mx-1"><i className="bi bi-box"></i></button>
  </div>
  </div>
</div>
    </div>
    
  </div>

  <div className="row" style={{marginBottom: '10px'}}>
    <div className="col-4">
    <div className="card" style={{position: 'relative'}}>
  <div className="card-body" style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
  <p style={{fontSize: '14px', fontWeight: '400', marginBottom: '-0px'}}>COM PENDÊNCIAS</p>
  <p style={{fontSize: '26px', fontWeight: '600', marginBottom: '-2px'}}>0</p>
  <p style={{fontSize: '12px', cursor: 'pointer'}}>Mostrar</p>
  </div>
  <div>
  <button className="btn btn-warning mx-1"><i className="bi bi-box"></i></button>
  </div>
  </div>
</div>
    </div>
    <div className="col-4">
    <div className="card" style={{position: 'relative'}}>
  <div className="card-body" style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
  <p style={{fontSize: '14px', fontWeight: '400', marginBottom: '-0px'}}>REEMBOLSOS</p>
  <p style={{fontSize: '26px', fontWeight: '600', marginBottom: '-2px'}}>0</p>
  <p style={{fontSize: '12px', cursor: 'pointer'}}>Mostrar</p>
  </div>
  <div>
  <button className="btn btn-warning mx-1"><i className="bi bi-box"></i></button>
  </div>
  </div>
</div>
    </div>
    <div className="col-4">
    <div className="card" style={{position: 'relative'}}>
  <div className="card-body" style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
  <p style={{fontSize: '14px', fontWeight: '400', marginBottom: '-0px'}}>CANCELAMENTOS</p>
  <p style={{fontSize: '26px', fontWeight: '600', marginBottom: '-2px'}}>0</p>
  <p style={{fontSize: '12px', cursor: 'pointer'}}>Mostrar</p>
  </div>
  <div>
  <button className="btn btn-warning mx-1"><i className="bi bi-box"></i></button>
  </div>
  </div>
</div>
    </div>
    
  </div>

  <div className="container my-5 text-white" style={{ backgroundColor: '#181818', padding: '20px', borderRadius: '10px' }}>
      <h5>Todos os pedidos de 01/06/2024 até 30/06/2024</h5>
      <div className="d-flex justify-content-between align-items-center my-3">
        <DropdownButton id="dropdown-basic-button" title="Itens por página">
          <Dropdown.Item href="#/10">10 por página</Dropdown.Item>
          <Dropdown.Item href="#/20">20 por página</Dropdown.Item>
          <Dropdown.Item href="#/50">50 por página</Dropdown.Item>
        </DropdownButton>
        <div>
          <button onClick={handleShow} className="btn btn-warning mx-1"><i className="bi bi-cloud-download"></i></button>
          <button onClick={handleShow2} className="btn btn-warning mx-1"><i className="bi bi-sliders"></i></button>
          <button onClick={() => infoPedido()} className="btn btn-warning mx-1"><i className="bi bi-plus"></i></button>
        </div>
      </div>
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
  <Modal.Title>
    <i className="bi bi-cloud-arrow-down"></i> Importar pedidos
  </Modal.Title>
</Modal.Header>
<Modal.Body>
  <Form>
    <Form.Group controlId="formDateFrom">
      <Form.Label>De</Form.Label>
      <Form.Control type="date" />
    </Form.Group>
    <Form.Group controlId="formDateTo" className="mt-3">
      <Form.Label>Até</Form.Label>
      <Form.Control type="date" />
    </Form.Group>
  </Form>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Fechar
  </Button>
  <Button variant="warning">
    <i className="bi bi-search"></i> Procurar
  </Button>
</Modal.Footer>
</Modal>
<Modal show={show2} onHide={handleClose2} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="bi bi-sliders"></i> Filtrar Pedidos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formSearchTerm">
              <Form.Label>Por Termo</Form.Label>
              <Form.Control type="text" placeholder="Digite o termo de busca, Ex: João ou 20002734187230" />
            </Form.Group>
            <Form.Group controlId="formStatus" className="mt-3">
              <Form.Label>Por Status</Form.Label>
              <Form.Select>
                <option>Todos</option>
                <option>Ativo</option>
                <option>Inativo</option>
                {/* Adicione mais opções conforme necessário */}
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formDateFrom" className="mt-3">
              <Form.Label>De</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group controlId="formDateTo" className="mt-3">
              <Form.Label>Até</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group controlId="formChannel" className="mt-3">
              <Form.Label>Por Canal</Form.Label>
              <Form.Select>
                <option>Todos</option>
                <option>Canal 1</option>
                <option>Canal 2</option>
                {/* Adicione mais opções conforme necessário */}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Limpar Tudo
          </Button>
          <Button variant="warning">
            <i className="bi bi-search"></i> Filtrar
          </Button>
        </Modal.Footer>
      </Modal>
</>
    )
}

export default Pedidos;
import React, { useState } from 'react';
import classNames from 'classnames'

import { BrowserRouter as Router, Route, Routes, Link, } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { Table, Dropdown, DropdownButton, Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const products = [
  {
    id: 1,
    imageUrl: 'https://media.istockphoto.com/id/1094614600/pt/vetorial/vector-set-of-school-supplies.jpg?s=612x612&w=0&k=20&c=3SBmfw1cj32ZXUvAnQcaDWoK9U4A0H3SqK9lMOeZ0YA=',
    title: 'Prendedor Papel Binder 25mm 48 unidades',
    price: 'R$ 10,99',
  },
  {
    id: 2,
    imageUrl: '/path/to/image2.jpg',
    title: 'Prendedor Papel Binder 12 peças Metal 51mm Grande',
    price: 'R$ 11,99',
  },
];

const Dashboard = () => {
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
  const goToInfo = ()  =>{
    navigate('/infopedido');
  }
  return (
    <>
      <div className="container my-5 text-white" style={{ backgroundColor: '#181818', padding: '20px', borderRadius: '10px' }}>
      <h2 className="mb-4" >Resumo Geral</h2>
      <div className="row">
        <div className="col-md-6 col-lg-3 mb-3">
          <div className="card bg-dark text-white h-60">
            <div className="card-body">
            <h5 className="card-title">Pedidos Hoje</h5>
              <p className="card-text display-4"style={{fontSize: '16pt'}} >0</p>
              <a href="#" className="btn btn-warning">Ver Pedidos</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-3">
          <div className="card bg-dark text-white h-60">
            <div className="card-body">
              <h5 className="card-title" style={{fontSize: '12pt'}}>Faturado Hoje</h5>
              <p className="card-text display-4" style={{fontSize: '16pt'}}>R$ 0,00</p>
              <a href="#" className="btn btn-warning">Ver Pedidos</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-3">
          <div className="card bg-dark text-white h-60">
            <div className="card-body">
              <h5 className="card-title">Faturado Esse Mês</h5>
              <p className="card-text display-4" style={{fontSize: '16pt'}}>R$ 0,00</p>
              <a href="#" className="btn btn-warning">Ver Relatórios</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-3">
          <div className="card bg-dark text-white h-60">
            <div className="card-body">
              <h5 className="card-title">Saldo Atual</h5>
              <p className="card-text display-4" style={{fontSize: '16pt'}}>R$ 0,00</p>
              <a href="#" className="btn btn-warning">Ver Carteira</a>
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-dark text-white mt-3">
        <div className="card-body">
          <h5 className="card-title">Notificações</h5>
          <p className="card-text" style={{textAlign: 'center'}}>Nenhuma pendência no momento</p>
          <a href="#" className="btn btn-warning text-center" style={{textAlign: 'center'}}>Ver Pendências</a>
        </div>
      </div>
    </div>
    <div className="container my-5 text-white" style={{ backgroundColor: '#181818', padding: '20px', borderRadius: '10px' }}>
      <h2 className="mb-4">Endereço para os canais de venda</h2>
      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="cep" className="form-label">CEP</label>
            <input type="text" className="form-control" id="cep" defaultValue="06460-055" />
          </div>
          <div className="col-md-6">
            <label htmlFor="numero" className="form-label">Número</label>
            <input type="text" className="form-control" id="numero" defaultValue="100" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12">
            <label htmlFor="endereco" className="form-label">Endereço</label>
            <input type="text" className="form-control" id="endereco" defaultValue="Alameda Inajá" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12">
            <label htmlFor="complemento" className="form-label">Complemento</label>
            <input type="text" className="form-control" id="complemento" defaultValue="Galpão 6" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="bairro" className="form-label">Bairro</label>
            <input type="text" className="form-control" id="bairro" defaultValue="Tamboré" />
          </div>
          <div className="col-md-6">
            <label htmlFor="cidade" className="form-label">Cidade</label>
            <input type="text" className="form-control" id="cidade" defaultValue="Barueri" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="uf" className="form-label">UF</label>
            <input type="text" className="form-control" id="uf" defaultValue="SP" />
          </div>
        </div>
      </form>
    </div>

    <div className="container mt-5">
      <h2>Lançamentos</h2>
      <Carousel>
        {products.map(product => (
          <Carousel.Item key={product.id}>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="card mb-4">
                  <img src={product.imageUrl} className="card-img-top" alt={product.title} />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
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
        <button  className="btn btn-warning mx-1"><i className="bi bi-cloud-download"></i></button>
          <button  className="btn btn-warning mx-1"><i className="bi bi-sliders"></i></button>
          <button  className="btn btn-warning mx-1"><i className="bi bi-plus"></i></button>
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

export default Dashboard

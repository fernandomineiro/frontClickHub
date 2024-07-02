import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import styled from 'styled-components';

const StyledTitle = styled.label`
 backgroud-color: black;
 font-weight: 600; 
 margin-top: 5px;
`;

const StyledSelect = styled.label`
 backgroud-color: black;
 font-weight: 600;
 margin-top: 5px;
`;

const StyledTitleStart = styled.label`
display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
`;

const StyledTitleChild = styled.p`
position: relative;
text-align: center; 
font-weight: 800; 
font-size: 16pt; 
`

const StyledTitleCard = styled.p`
font-family: poppins, sans-serif;
    font-weight: 500;
    font-size: 1rem;
    border: 0;
    padding-left: 20px;
    padding-top: 10px;
    border-radius: 5px;
    margin-bottom: -2px;
`

const StyledSubTitleCard = styled.p`
position: relative;
font-weight: 700;
font-size: 1.75rem;
padding-left: 20px;


`

const Catalogo = () => {

    return (
        <div className="row">
            <StyledTitleStart>Catálogo de Produtos</StyledTitleStart>

            <div class="container" style={{marginBottom: '10px'}}>
  <div class="row">
    <div class="col">
    <div style={{display: 'flex',flexDirection: 'column', height: '80px'}} className="card custom-card">
        <StyledTitleCard>Total de Produtos</StyledTitleCard>
        <StyledSubTitleCard>25</StyledSubTitleCard>
    </div>
    </div>
    <div class="col">
    <div style={{display: 'flex',flexDirection: 'column', height: '80px'}} className="card custom-card">
        <StyledTitleCard>Vendendo</StyledTitleCard>
        <StyledSubTitleCard>25</StyledSubTitleCard>
    </div>
    </div>
    <div class="col">
    <div style={{display: 'flex',flexDirection: 'column', height: '80px'}} className="card custom-card">
        <StyledTitleCard>Não Vendendo</StyledTitleCard>
        <StyledSubTitleCard>25</StyledSubTitleCard>
    </div>
    </div>
  </div>
</div>

            <div className="col-md-12" >
                <StyledTitleChild>Produtos</StyledTitleChild>

                <div className="row">
                <div className="col-4">
                </div>
                <div className="col-4" style={{display:'flex', justifyContent: 'space-between'}}>
                <button type="button" style={{backgroundColor: 'orange', color:'black', border: 'none'}} className="btn btn-primary">
      <i className="bi bi-search"></i> Filtrar
    </button>
    <Dropdown >
      <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{backgroundColor: 'orange', color:'black', border: 'none'}}>
      <i className="bi bi-upload"></i>
      </Dropdown.Toggle>
      
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">EXPORTAÇÃO CSV PADRÃO</Dropdown.Item>
        <Dropdown.Item href="#/action-2">EXPORTAÇÃO CSV PADRÃO SHOPIFY</Dropdown.Item>
        <Dropdown.Item href="#/action-2">EXPORTAÇÃO CSV PADRÃO NUVEM SHOP</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{backgroundColor: 'orange', color:'black', border: 'none'}}>
      <i className="bi bi-chat-dots"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Exibir em tela</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Criar Kit</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Criar Variação</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>

                <div className="col-4">
                </div>
                </div>

                <div className="row">
                    <div className="col-3">
                    <StyledTitle>Itens por página </StyledTitle>
                    <select className="form-select" style={{marginBottom: '10px'}} aria-label="Default select example">
                       
 <option >10 por página</option>
 <option >30 por página</option> 
 <option >50 por página</option>
 <option >100 por página</option>
</select>
                    </div>
                    <div className="col-3">

                    </div>
                    <div className="col-6">
                    <StyledTitle>Anúncio Rápido </StyledTitle>
                    <select style={{marginBottom: '10px'}} className="form-select" aria-label="Default select example">   
 <option >Indiferente</option>
 <option >Somente disponível</option> 
 <option >Somente Indisponível</option>
</select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                    <StyledTitle>Busca Termo </StyledTitle>
                    <input style={{marginBottom: '10px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="col-6">
                    <StyledTitle>Filtrar por categoria </StyledTitle>
                    <select style={{marginBottom: '10px'}} className="form-select" aria-label="Default select example">
                    <option >Todas Categorias</option>
 <option >Lançamentos</option>
 <option >Bebês</option>
 <option >Cuidado Pessoal</option>
 <option >Datas Sazonias</option>
</select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                    <StyledTitle>Ordenar por </StyledTitle>
                    <select style={{marginBottom: '10px'}} className="form-select" aria-label="Default select example">
                    <option >Novos</option>
 <option >Mais Antigos</option>
 <option >Bebês</option>
 <option >Estoque (maior para o menor)</option>
 <option >Estoque (menor para o maior)</option>
</select>
                    </div>
                    <div className="col-6">
                     
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <tbody>

                            <tr>
                                <td>
                                    <div className="card" style={{ width: '100%' }}>
                                        <img src="https://www.lojachinashop.com.br/image/cache/data/redes-socais-rodape/094559-800x600.jpg" className="card-img-top" alt="Imagem do Card" />
                                        <div className="card-body">
                                            <h6 className="card-title">Carrinho de corrida</h6>
                                            <p className="card-text">SKU: 7845</p>
                                            <p className="card-text" style={{ color: 'black', fontWeight: '600' }}>R$ 45,35 </p>
                                            <div className="d-flex">
                                                <a style={{ fontSize: '10px', backgroundColor: 'orange', border: 'none', fontWeight: 600 }} className="btn btn-primary me-2">EM ESTOQUE</a>
                                                <a style={{ fontSize: '10px', backgroundColor: 'black', border: 'none', fontWeight: 600 }} className="btn btn-secondary">AINDA NÃO VENDE</a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="card" style={{ width: '100%' }}>
                                        <img src="https://www.lojachinashop.com.br/image/cache/data/redes-socais-rodape/094559-800x600.jpg" className="card-img-top" alt="Imagem do Card" />
                                        <div className="card-body">
                                            <h6 className="card-title">Carrinho de corrida</h6>
                                            <p className="card-text">SKU: 7845</p>
                                            <p className="card-text" style={{ color: 'black', fontWeight: '600' }}>R$ 45,35 </p>
                                            <div className="d-flex">
                                                <a style={{ fontSize: '10px', backgroundColor: 'orange', border: 'none', fontWeight: 600 }} className="btn btn-primary me-2">EM ESTOQUE</a>
                                                <a style={{ fontSize: '10px', backgroundColor: 'black', border: 'none', fontWeight: 600 }} className="btn btn-secondary">AINDA NÃO VENDE</a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="card" style={{ width: '100%' }}>
                                        <img src="https://www.lojachinashop.com.br/image/cache/data/redes-socais-rodape/094559-800x600.jpg" className="card-img-top" alt="Imagem do Card" />
                                        <div className="card-body">
                                            <h6 className="card-title">Carrinho de corrida</h6>
                                            <p className="card-text">SKU: 7845</p>
                                            <p className="card-text" style={{ color: 'black', fontWeight: '600' }}>R$ 45,35 </p>
                                            <div className="d-flex">
                                                <a style={{ fontSize: '10px', backgroundColor: 'orange', border: 'none', fontWeight: 600 }} className="btn btn-primary me-2">EM ESTOQUE</a>
                                                <a style={{ fontSize: '10px', backgroundColor: 'black', border: 'none', fontWeight: 600 }} className="btn btn-secondary">AINDA NÃO VENDE</a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="card" style={{ width: '100%' }}>
                                        <img src="https://www.lojachinashop.com.br/image/cache/data/redes-socais-rodape/094559-800x600.jpg" className="card-img-top" alt="Imagem do Card" />
                                        <div className="card-body">
                                            <h6 className="card-title">Carrinho de corrida</h6>
                                            <p className="card-text">SKU: 7845</p>
                                            <p className="card-text" style={{ color: 'black', fontWeight: '600' }}>R$ 45,35 </p>
                                            <div className="d-flex">
                                                <a style={{ fontSize: '10px', backgroundColor: 'orange', border: 'none', fontWeight: 600 }} className="btn btn-primary me-2">EM ESTOQUE</a>
                                                <a style={{ fontSize: '10px', backgroundColor: 'black', border: 'none', fontWeight: 600 }} className="btn btn-secondary">AINDA NÃO VENDE</a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Catalogo
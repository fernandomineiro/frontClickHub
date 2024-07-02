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

const Integracao = () => {

    return (
        <div className="row">
            <StyledTitleStart>Integrações</StyledTitleStart>



            <div className="col-md-12" >
          

                <div className="row">
                <div className="col-4">
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
                    <StyledTitle>Busca Termo </StyledTitle>
                    <input style={{marginBottom: '10px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                </div>

                <div className="table-responsive">
                    <table className="table table-bordered">
                        <tbody>

                            <tr>
                                <td>
                                    <div className="card" style={{width: '15.1rem'}}>
                                        <img style={{height: '140px', width: '100%'}} src="https://s2.glbimg.com/Bu6upvmSg6SRv0za635uXphThKo=/620x430/e.glbimg.com/og/ed/f/original/2020/03/28/mercado-livre.jpg" className="card-img-top" alt="Imagem do Card" />
                                        <div className="card-body">
                                            <h6 className="card-title">Mercado Livre</h6>
                                            <p className="card-text"><StyledTitle>clientId </StyledTitle>
                    <input style={{marginBottom: '2px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></p>
                    <p className="card-text"><StyledTitle>client_secret </StyledTitle>
                    <input style={{marginBottom: '2px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></p>
                    <p className="card-text"><StyledTitle>access_token </StyledTitle>
                    <input style={{marginBottom: '2px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></p>
                                            <div className="d-flex">
                                                <a style={{ fontSize: '10px', backgroundColor: 'orange', border: 'none', fontWeight: 600 }} className="btn btn-primary me-2">CONECTAR</a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="card" style={{width: '15.1rem'}}>
                                         <img style={{height: '140px', width: '100%' }} src="https://logodownload.org/wp-content/uploads/2014/06/magalu-logo-0.png" className="card-img-top" alt="Imagem do Card" />
                                         <div className="card-body">
                                            <h6 className="card-title">Magazine Luiza</h6>
                                            <p className="card-text"><StyledTitle>clientId </StyledTitle>
                    <input style={{marginBottom: '2px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></p>
                    <p className="card-text"><StyledTitle>client_secret </StyledTitle>
                    <input style={{marginBottom: '2px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></p>
                    <p className="card-text"><StyledTitle>access_token </StyledTitle>
                    <input style={{marginBottom: '2px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></p>
                                            <div className="d-flex">
                                                <a style={{ fontSize: '10px', backgroundColor: 'orange', border: 'none', fontWeight: 600 }} className="btn btn-primary me-2">CONECTAR</a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="card" style={{width: '15.1rem'}}>
                                       <img style={{height: '140px', width: '100%'}} src="https://www.mobills.com.br/blog/wp-content/uploads/2023/04/logo-shopee-review-simples.png" className="card-img-top" alt="Imagem do Card" />
                                       <div className="card-body">
                                            <h6 className="card-title">Shopee</h6>
                                            <p className="card-text"><StyledTitle>clientId </StyledTitle>
                    <input style={{marginBottom: '2px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></p>
                    <p className="card-text"><StyledTitle>client_secret </StyledTitle>
                    <input style={{marginBottom: '2px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></p>
                    <p className="card-text"><StyledTitle>access_token </StyledTitle>
                    <input style={{marginBottom: '2px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></p>
                                            <div className="d-flex">
                                                <a style={{ fontSize: '10px', backgroundColor: 'orange', border: 'none', fontWeight: 600 }} className="btn btn-primary me-2">CONECTAR</a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="card" style={{width: '15.1rem'}}>
                                         <img style={{height: '140px', width: '100%'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/B2W_Digital_logo.png/1200px-B2W_Digital_logo.png" className="card-img-top" alt="Imagem do Card" />
                                         <div className="card-body">
                                            <h6 className="card-title">B2W Digital</h6>
                                            <p className="card-text"><StyledTitle>clientId </StyledTitle>
                    <input style={{marginBottom: '2px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></p>
                    <p className="card-text"><StyledTitle>client_secret </StyledTitle>
                    <input style={{marginBottom: '2px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></p>
                    <p className="card-text"><StyledTitle>access_token </StyledTitle>
                    <input style={{marginBottom: '2px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></p>
                                            <div className="d-flex">
                                                <a style={{ fontSize: '10px', backgroundColor: 'orange', border: 'none', fontWeight: 600 }} className="btn btn-primary me-2">CONECTAR</a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="card" style={{width: '15.1rem'}}>
                                        <img style={{height: '140px', width: '100%'}} src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png" className="card-img-top" alt="Imagem do Card" />
                                        <div className="card-body">
                                            <h6 className="card-title">Amazon</h6>
                                            <p className="card-text"><StyledTitle>clientId </StyledTitle>
                    <input style={{marginBottom: '2px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></p>
                    <p className="card-text"><StyledTitle>client_secret </StyledTitle>
                    <input style={{marginBottom: '2px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></p>
                    <p className="card-text"><StyledTitle>access_token </StyledTitle>
                    <input style={{marginBottom: '2px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></p>
                                            <div className="d-flex">
                                                <a style={{ fontSize: '10px', backgroundColor: 'orange', border: 'none', fontWeight: 600 }} className="btn btn-primary me-2">CONECTAR</a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="card" style={{width: '15.1rem'}}>
                                         <img style={{height: '140px', width: '100%'}} src="https://logodownload.org/wp-content/uploads/2017/05/leroy-merlin-logo-1.png" className="card-img-top" alt="Imagem do Card" />
                                         <div className="card-body">
                                            <h6 className="card-title">Leroy Merlin</h6>
                                            <p className="card-text"><StyledTitle>clientId </StyledTitle>
                    <input style={{marginBottom: '2px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></p>
                    <p className="card-text"><StyledTitle>client_secret </StyledTitle>
                    <input style={{marginBottom: '2px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></p>
                    <p className="card-text"><StyledTitle>access_token </StyledTitle>
                    <input style={{marginBottom: '2px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></p>
                                            <div className="d-flex">
                                                <a style={{ fontSize: '10px', backgroundColor: 'orange', border: 'none', fontWeight: 600 }} className="btn btn-primary me-2">CONECTAR</a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="card" style={{width: '15.1rem'}}>
                                       <img style={{height: '140px', width: '100%'}} src="https://i3.wp.com/1000logos.net/wp-content/uploads/2023/04/Carrefour-logo.png" className="card-img-top" alt="Imagem do Card" />
                                       <div className="card-body">
                                            <h6 className="card-title">Carrefour</h6>
                                            <p className="card-text"><StyledTitle>clientId </StyledTitle>
                    <input style={{marginBottom: '2px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></p>
                    <p className="card-text"><StyledTitle>client_secret </StyledTitle>
                    <input style={{marginBottom: '2px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></p>
                    <p className="card-text"><StyledTitle>access_token </StyledTitle>
                    <input style={{marginBottom: '2px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></p>
                                            <div className="d-flex">
                                                <a style={{ fontSize: '10px', backgroundColor: 'orange', border: 'none', fontWeight: 600 }} className="btn btn-primary me-2">CONECTAR</a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="card" style={{width: '15.1rem'}}>
                                         <img style={{height: '140px', width: '100%'}} src="https://logos-world.net/wp-content/uploads/2023/01/Submarino-Logo-2013.png" className="card-img-top" alt="Imagem do Card" />
                                         <div className="card-body">
                                            <h6 className="card-title">Submarino</h6>
                                            <p className="card-text"><StyledTitle>clientId </StyledTitle>
                    <input style={{marginBottom: '2px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></p>
                    <p className="card-text"><StyledTitle>client_secret </StyledTitle>
                    <input style={{marginBottom: '2px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></p>
                    <p className="card-text"><StyledTitle>access_token </StyledTitle>
                    <input style={{marginBottom: '2px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /></p>
                                            <div className="d-flex">
                                                <a style={{ fontSize: '10px', backgroundColor: 'orange', border: 'none', fontWeight: 600 }} className="btn btn-primary me-2">CONECTAR</a>
                                                
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

export default Integracao
import React, { useState } from "react";
import styled from 'styled-components';

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

const fornecedor = ()  =>{
    const empresas = [
        {
          nome: "HAYAMAX",
          categorias: [
            "CASA & CONSTRUÇÃO",
            "ESPORTES, LAZER & HOBBIES",
            "TECNOLOGIA & ELETRÔNICOS"
          ]
        },
        {
          nome: "LAQUILA",
          categorias: ["VEÍCULOS & PEÇAS"]
        },
        {
          nome: "AGIS DISTRIBUIDORA",
          categorias: ["TECNOLOGIA & ELETRÔNICOS"]
        },
        {
          nome: "Vanral Musical Dropshipping",
          categorias: ["ESPORTES, LAZER & HOBBIES"]
        },
        {
          nome: "MUSICAL EXPRESS",
          categorias: ["ESPORTES, LAZER & HOBBIES"]
        },
        {
          nome: "SHOPPEÇAS AUTOPEÇAS",
          categorias: ["VEÍCULOS & PEÇAS"]
        },
        {
          nome: "BKR1",
          categorias: [
            "ESPORTES, LAZER & HOBBIES",
            "TECNOLOGIA & ELETRÔNICOS"
          ]
        },
        {
          nome: "Grupo Pbk Probike",
          categorias: [
            "ESPORTES, LAZER & HOBBIES",
            "VEÍCULOS & PEÇAS"
          ]
        },
        {
          nome: "girass cosméticos",
          categorias: ["MODA & BELEZA"]
        },
        {
          nome: "universo drop",
          categorias: ["ESPORTES, LAZER & HOBBIES"]
        },
        {
          nome: "DECCORALLE DECOR",
          categorias: ["CASA & CONSTRUÇÃO"]
        },
        {
          nome: "RICO DISTRIBUIDORA",
          categorias: [
            "CASA & CONSTRUÇÃO",
            "TECNOLOGIA & ELETRÔNICOS"
          ]
        },
        {
          nome: "VITRINE OUTLET",
          categorias: ["MODA & BELEZA"]
        },
        {
          nome: "macaw",
          categorias: ["MODA & BELEZA"]
        },
        {
          nome: "TROVARELLI MÓVEIS",
          categorias: ["CASA & CONSTRUÇÃO"]
        },
        {
          nome: "FLORATTA JOIAS",
          categorias: ["MODA & BELEZA"]
        },
        {
          nome: "ALL NATIONS",
          categorias: ["TECNOLOGIA & ELETRÔNICOS"]
        },
        {
          nome: "ODERÇO DISTRIBUIDORA",
          categorias: [
            "CASA & CONSTRUÇÃO",
            "ESPORTES, LAZER & HOBBIES",
            "TECNOLOGIA & ELETRÔNICOS"
          ]
        },
        {
          nome: "FRANCA SAPATOS",
          categorias: ["MODA & BELEZA"]
        },
        {
          nome: "GAZIN ATACADO",
          categorias: [
            "CASA & CONSTRUÇÃO",
            "ESPORTES, LAZER & HOBBIES",
            "TECNOLOGIA & ELETRÔNICOS"
          ]
        },
        {
          nome: "HAYONIK",
          categorias: [
            "ESPORTES, LAZER & HOBBIES",
            "TECNOLOGIA & ELETRÔNICOS"
          ]
        },
        {
          nome: "EUROPIO BRINQUEDOS",
          categorias: ["ESPORTES, LAZER & HOBBIES"]
        },
        {
          nome: "BM SHOP",
          categorias: ["MODA & BELEZA"]
        },
        {
          nome: "ESQUADRIAS BRASIL",
          categorias: ["CASA & CONSTRUÇÃO"]
        },
        {
          nome: "KEYCASA",
          categorias: ["TECNOLOGIA & ELETRÔNICOS"]
        }
      ];

    return(
    <div className="row">
    <StyledTitleStart>Integrações</StyledTitleStart>
    <div className="container mt-4">
    <ul className="list-group">
      {empresas.map((item, index) => (
        <li key={index} className="list-group-item">
         Nome: {item.nome}, Categoria(s): {item.categorias}
        </li>
      ))}
    </ul>
  </div>
  </div>
    )
}

export default fornecedor;
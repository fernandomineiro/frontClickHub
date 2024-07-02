import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import styled from 'styled-components';

const StyledTitle = styled.label`
 backgroud-color: black;
 font-weight: 600;
 margin-top: 5px;
`;

const StyledSTitleText = styled.div`
font-size: .7rem;
    text-transform: uppercase;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: .5rem;
    display: flex;
}
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

const Catalog = () => {

    return (
        <div className="row">
            <StyledTitleStart>Placa Decorativa</StyledTitleStart>

            <div className="container" style={{marginBottom: '10px'}}>
  <StyledSTitleText><p>HOME >></p><p>CATÁLOGO DE PRODUTOS >></p><p>Placa Decorativa</p></StyledSTitleText>
</div>


            <div className="container">
  <div className="row">
    <div className="col">
      Column
    </div>
    <div className="col">
      Column
    </div>

  </div>
</div>

</div>
    )
}

export default Catalog
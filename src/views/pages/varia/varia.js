import { Table, Dropdown, DropdownButton } from 'react-bootstrap';
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
    font-size: 14pt;
`;

const StyledTitleChild = styled.p`
position: relative;
text-align: center; 
font-weight: 800; 
font-size: 16pt; 
`

const StyledTitle = styled.label`
 backgroud-color: black;
 font-weight: 600; 
 margin-top: 5px;
`;

const Varia = () =>{
 
    return (
        <div className="row">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <StyledTitleStart>Minhas Variações</StyledTitleStart>
            <button className="btn btn-warning mx-1"><i class="bi bi-box"></i></button>
            </div>
        
        
        <div className="container my-5 text-white" style={{ backgroundColor: '#181818', padding: '20px', borderRadius: '10px' }}>


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
                    <div className="col-6">
                    <StyledTitle>Busca na Página </StyledTitle>
                    <input style={{marginBottom: '10px'}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="col-3">
                    <StyledTitle>Ordenar por </StyledTitle>
                    <select className="form-select" style={{marginBottom: '10px'}} aria-label="Default select example">
                       
 <option >id ordem crescente</option>
 <option >id ordem decrecente</option> 

</select>
                    </div>
                    </div>
        <div>
          {/* <button className="btn btn-warning mx-1"><i className="fas fa-sync-alt"></i></button>
          <button className="btn btn-warning mx-1"><i className="fas fa-filter"></i></button>
          <button className="btn btn-warning mx-1"><i className="fas fa-plus"></i></button> */}
     
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Data da Criação</th>
            <th>SKU</th>
            <th>Produtos no kit</th>
            <th>Custo</th>
            <th>Peso</th>
            <th>Largura</th>
            <th>Altura</th>
            <th>Comprimento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="8" className="text-center">Nenhuma variação encontrado</td>
          </tr>
        </tbody>
      </Table>
    </div>
    </div>
    )
}

export default Varia;
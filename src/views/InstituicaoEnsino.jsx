import { useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Form } from "react-bootstrap";

function InstituicaoEnsino() {
  let [instituicoesEnsino, setInstituicoesEnsino] = useState([
    { nome: "IFPB - Campus Guarabira", codigo: "1000", qtdMatriculas: 600 },
  ]);

  let [nome, setNome] = useState("");
  let [codigo, setCodigo] = useState(0);
  let [qtdMatriculas, setQtMatriculas] = useState(0);

  const handleClick = (event) => {};

  const handleSubmit = (event) => {
    event.preventDefault();
    setInstituicoesEnsino([
      ...instituicoesEnsino,
      { nome: nome, codigo: codigo, qtdMatriculas: qtdMatriculas },
    ]);
    console.log("Submit no form");
    console.log();
    
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Pesquisa</Form.Label>
                <Form.Control type="text" placeholder="Digite" />
              </Form.Group>
            </Form>
          </Col>

          <Col>
            <Button onClick={handleClick} variant="primary" type="button">
              Submit
            </Button>
          </Col>
        </Row>

        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              name="nome"
              placeholder="Digite o nome"
              value={nome}
              onChange={(event) => {
                setNome(event.target.value);
                console.log("digitando");
              }}
            />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="codigo">
            <Form.Label>codigo</Form.Label>
            <Form.Control
              type="number"
              name="qtMatricula"
              placeholder="Digite o codigo"
              value={codigo}
              onChange={(event) => {
                setCodigo(event.target.value);
                console.log("digitando"); 
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="qtMatricula">
            <Form.Label>Qt matricula</Form.Label>
            <Form.Control
              type="number"
              name="qtMatricula"
              placeholder="Digite a qt de matricula"
              value={qtdMatriculas}
              onChange={(event) => {
                setCodigo(event.target.value);
                console.log("digitando"); 
              }}
            />
          </Form.Group>

          <Button onClick={handleSubmit} variant="primary" type="button">
            Enviar
          </Button>
        </Form>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Código</th>
              <th>Matrículas</th>
            </tr>
          </thead>
          <tbody>
            {instituicoesEnsino.map((element, i) => {
              return (
                <tr key={i}>
                  <td>{element.nome}</td>
                  <td>{element.codigo}</td>
                  <td>{element.qtdMatriculas}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default InstituicaoEnsino;

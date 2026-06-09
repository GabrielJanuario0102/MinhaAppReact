import { Container, Row, Card, Badge } from "react-bootstrap";
import dados from "../datasets/escolasPB.json";

function Main() {
  const top30 = dados.slice(0, 3);

  return (
    <main>
      <Container>
        <div className="text-center mb-5">
          <h1 className="text-primary fw-bold"> Censo escolar 2025</h1>
          <p>As 3 escolas com maior número de matrículas</p>
        </div>

        <Row className="justify-content-center gap-3 my-4">
          {top30.map(
            ({ co_entidade, no_entidade, no_municipio, qt_mat_bas }, index) => (
              <Card
                key={co_entidade}
                style={{ width: "18rem" }}
                className="shadow-sm border-1 rounded-3"
              >
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Badge bg="black" className="p-2 fs-6">
                      {index + 1}º Lugar
                    </Badge>
                  </div>
                  <div className="mt-3 pt-2 border-top">
                    <Card.Title className="fw-bold text-dark fs-5 mb-2">
                      {no_entidade}
                    </Card.Title>

                    <Card.Subtitle className="mb-2 text-muted">
                      <strong>Município:</strong> {no_municipio}
                    </Card.Subtitle>
                    <Card.Text></Card.Text>
                    <div className="mt-3 pt-2 border-top">
                      <Card.Text className="fw-bold text-primary text-decoration-none">
                        {qt_mat_bas} Matrículas
                      </Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ),
          )}
        </Row>
      </Container>
    </main>
  );
}

export default Main;

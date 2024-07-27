import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CardExample() {
  return (
    <Row xs={1} md={3} className="g-4 justify-content-end"> {/* Añade la clase justify-content-end */}
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx} className="me-2"> {/* Añade la clase me-1 para margin-right */}
          <Card style={{ width: '12rem' }}> {/* Reduce el tamaño de la tarjeta */}
            <Card.Img variant="top" src={`Imagenes/imagen-1.png`} /> {/* Cambia la fuente de la imagen */}
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Colombia
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardExample;




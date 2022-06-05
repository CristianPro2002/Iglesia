import React from 'react'
import './Body.css'
import Card from 'react-bootstrap/Card'
import { CardGroup } from 'react-bootstrap'
const Body = () => {
    return (
        <div>
            <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://public-rf-upload.minhawebradio.net/146210/news/2b403950e9ce1c68f2acfb5b930a776a.png" />
    <Card.Body>
      <Card.Title>Encuentros</Card.Title>
      <Card.Text>
      Son tres días diseñados para ser confrontados con nuestros pecados, heridas, traumas, temores, luchas, orgullos, complejos y situaciones del pasado que impide que el propósito de Dios se realice en nuestra vida.

Lo hacemos porque todos hemos tenido experiencias dolorosas que afectan la forma en que nos relacionamos con los demás y fijan en nosotros ideas equivocadas acerca de Dios y de nosotros mismos. Todos necesitamos la sanidad que solo el Señor puede darnos. Sin embargo, el Encuentro por sí solo no cambia vidas, únicamente Jesús lo hace.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://1.bp.blogspot.com/-5XyRlLAO-1I/XfPGleVpujI/AAAAAAAAo6Q/whGVU-Zy_xcc24JWTRHERgwGJ7pSV0SNACLcBGAsYHQ/s1600/como-ayunar.jpg" />
    <Card.Body>
      <Card.Title>Ayunos</Card.Title>
      <Card.Text>
      El ayuno es un tiempo sagrado en el cual un cristiano se abstiene de comida u otros placeres y se enfoca en Dios.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://conmensajecristiano.com/wp-content/uploads/2018/12/predicas-predicaciones-cristianas.jpg" />
    <Card.Body>
      <Card.Title>Predicaciones</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
        </div>
    )
}

export default Body

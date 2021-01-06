import Head from 'next/head';
import {Jumbotron, Button, Row, Col, Container} from 'react-bootstrap'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Watch Together</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

      <Container>
      <Row className="heroRow">
        <Col className="heroImageCol">
          <img className="heroImage" src={require('../Assets/hero-image.jpg')} /> 
        </Col>

        <Col className="heroTextCol">
          <h1>Watch Together</h1>
          <p>
            Watch moviews with friends
          </p>
          <p>
            <Button href="/player-page" variant="primary">Start watching</Button>
            <Button href="/downloader-page" variant="primary">Get movie</Button>
          </p>
        </Col>
        
      </Row>
      </Container>

      </main>
    </div>
  )
}

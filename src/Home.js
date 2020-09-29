import React from 'react';
import { Container, Card, CardDeck, Row, Col , Button} from 'react-bootstrap';
import history from './History';
import './Home.css';

function Home(props) {
    var rows = [];
    console.log(props.allDevelopers.length);
    props.allDevelopers.forEach(element => {
      rows.push(
        <Card border="primary" className="card">
        <div>
        <Card.Title className="cardDiv">
          <Card.Img variant="top" src={element.logo} className="cardLogoImage"/>
          <Card.Title className="cardTitle">
            {element.title}
            <br/>
            <div className="subTitleDiv">
            <Card.Subtitle className="cardSubTitle1">
              <b>{element.totalExp}</b>
              <br/>
              Years Exp.
            </Card.Subtitle>
            <Card.Subtitle className="cardSubTitle2">
              <b>{element.totalProjects}</b>
              <br/>
              Projects
            </Card.Subtitle>
            </div>
          </Card.Title>
        </Card.Title>
        </div>
          <Card.Body>
            <Card.Text className="cardText">
              {element.desc}
            </Card.Text>
            <Card.Link href="#" className="cardLink">{element.imgTitle}</Card.Link><br/><br/>
            <div className="containerDiv">
              <Card.Img variant="bottom" src={element.imgURL} className="cardImage" alt="TESTING"/>
              <div class="imageText">
                <b>{element.imgTitle}</b>
                <br/>
                {element.location}
              </div>
              </div>
          </Card.Body>
        </Card>
      )
    });
    return(
      <>
        <h1 className="titleText1">
          <span className="titleSpanText">Featured</span> Developers
        </h1>
        <p className="titleText2">Prominent developers in Bangalore</p>
        <div>
          <Button variant="primary" className="buttonAdd" onClick={() => history.push('/FormPage')}>+ ADD NEW DEVELOPER</Button>
        </div>
        <br/>
        <CardDeck className="cardDeck">
          {rows}
        </CardDeck>
      </>
    )
}

export default Home;

import { Container, Card, Row, Col, Button, Spinner } from "react-bootstrap";
import {useState, useEffect} from 'react'
import "./Photos.css";
import axios from "axios";
import  {Link} from 'react-router-dom';



const Photos = () => {
  const [photos, setPhotos] = useState([]);

    useEffect(()=>{
      axios
      .get("https://picsum.photos/v2/list")
      .then((res) => setPhotos(res.data))
       .catch((err) => console.log(err.message));
  }, [])

  
     
  return (
    <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col md={10}>
            <h1 className="display-4" style={{ textAlign: "left" }}>
              Photos
            </h1>
            <p className="lead" style={{ textAlign: "left" }}>
              Eplore range of images from Unsplash
            </p>
          </Col>

         
        </Row>

        <hr />

        <Row>
          { photos.length ?  photos.map((photo) => (
              <Col md={4} className="photos-card" key={photo.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={photo.download_url} />
                  <Card.Body>
                    <Card.Title>{photo.author}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <a className="btn btn-dark" href={photo.url}  style={{marginRight: '10px'}}>
                     
                      View details
                    </a>
                    <Link className="btn btn-dark" to={`/photos/${photo.id}`}>
                      
                      View enlarged 
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            )) : <Spinner animation="border"/>}
        </Row>
      </Container>
  )
}

export default Photos;

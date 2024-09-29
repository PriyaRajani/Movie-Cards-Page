import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import React from 'react';


function App() {
 
  const cardData = [
    { title: 'Yeh Jawani Hai Deewani', text: 'Some quick example text for Card 1', imgSrc: '../images/th1.jpeg',actor1:'Ranbir Kapoor',actor2:'Deepika Padukone' ,type:'RomCom'},
    { title: '3 Idiots', text: 'Some quick example text for Card 2', imgSrc: '../images/th2.jpeg',actor1:'Amir Khan',actor2:'R Madhavan',type:'Comedy' },
    { title: 'Chennai Express', text: 'Some quick example text for Card 3', imgSrc: '../images/th3.jpeg',actor1:'Sharukh Khan',actor2:'Deepika Padukone',type:'Romance,Thriller' },
    { title: 'Bhajrangi Bhaijan', text: 'Some quick example text for Card 4', imgSrc: '../images/th4.jpeg',actor1:'Salman Khan',actor2:'Harshaali Malhotra',type:'Comedy,Thriller' },
    { title: 'Secret Superstar', text: 'Some quick example text for Card 5', imgSrc: '../images/th5.jpeg',actor1:'Aamir Khan' ,actor2:'Zaira Wasim',type:'Emotional'},
    { title: 'DDLJ', text: 'Some quick example text for Card 6', imgSrc: '../images/th6.jpeg',actor1:'Sharukh Khan',actor2:'Kajol' ,type:'Romance' },
    { title: 'Tamasha', text: 'Some quick example text for Card 7' , imgSrc: '../images/th7.jpeg',actor1:'Ranbir Kapoor',actor2:'Deepika Padukone' ,type:'RomCom'},
    { title: 'Drishyam', text: 'Some quick example text for Card 8' , imgSrc: '../images/th8.jpeg',actor1:'Ajay Devgn',actor2:'Tabu',type:'Suspense,Thriller'},
    { title: 'Padmavat', text: 'Some quick example text for Card 9', imgSrc: '../images/th9.jpeg',actor1:'Ranveer Singh',actor2:'Deepika Padukone' ,type:'Thriller,Patriotic'},
    
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'center',alignItems:'center' }}>
      {cardData.map((card, index) => (
        <Card key={index} style={{ width: '18rem', margin: '1rem' }}>
          <Button variant="success" style={{width:'48%',height:'30px',marginInlineStart:'18px',marginBlock:'6px' ,fontSize:'12px',padding:'2px 8px'}}>Now-Streaming</Button>
           
          <Card.Img variant="top" src={card.imgSrc} style={{  height: '240px',borderRadius: 0 }} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{card.actor1}</ListGroup.Item>
            <ListGroup.Item>{card.actor2}</ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:'#F6F5F5',fontStyle:'italic',color:'gray'}}>{card.type}</ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
    </div>
  );
}

export default App;

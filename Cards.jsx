// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

import React from 'react';
import { Button, Card } from 'react-bootstrap';

function Cards() {
  return (
    <Card className='cardsty' style={{ width: '18rem'}}>
      <Card.Img className='cardimg' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnv05OiXwxtbjrvtyuxt6xSTUo25190kcF4A&usqp=CAU" />
      <Card.Body className='cardsty'>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
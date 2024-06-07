// src/App.js
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './components/name';
import Price from './components/price';
import Description from './components/description';
import Image from './components/Image';
import './App.css';

const App = () => {
    const firstName = "Whyte"; // Provide your first name here
    const message = firstName ? `Hello, ${firstName}!` : "Hello, there!";

    return (
        <Container className="mt-5">
            <Card style={{ width: '25rem' }}>
                <Card.Body style={{backgroundColor: 'pink', borderColor: 'white'}}>
                    <Image  />
                    <Card.Title><Name /></Card.Title>
                    <Card.Text><Price /></Card.Text>
                    <Card.Text><Description /></Card.Text>
                </Card.Body>
            </Card>
            <div className="mt-3">
                <h2>{message}</h2>
                {firstName && <img src="https://www.thecable.ng/wp-content/uploads/2023/06/G.png" alt="Profile" />}
            </div>
        </Container>
    );
};

export default App;

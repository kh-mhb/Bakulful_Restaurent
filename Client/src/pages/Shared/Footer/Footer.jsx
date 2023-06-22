import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='mt-5'>
            <Container fluid className="bg-dark text-light">
                <Row>
                    <Col md={4} className="text-center py-3">
                        <h5>Contact Us</h5>
                        <p>Email: bakulful@gmail.com</p>
                        <p>Phone: 01700000000</p>

                    </Col>
                    <Col md={4} className="text-center py-3">
                        <h5>About Us</h5>
                        <p>Bakulful Restaurant is a uniquely crafted dining experience that transports you to a world of exquisite flavors and unparalleled ambiance. As soon as you step inside, you'll be enveloped in a warm and welcoming atmosphere, with tastefully decorated interiors that seamlessly blend modern and traditional elements.The menu at Bakulful Restaurant is a culinary masterpiece, featuring a wide array of dishes that are expertly crafted by our team of highly skilled chefs. From mouthwatering appetizers to delectable entrees and decadent desserts, every dish is made with the freshest ingredients and infused with bold, rich flavors that will tantalize your taste buds.</p>
                    </Col>
                    <Col md={4} className="text-center py-3">
                        <h5>Follow Us</h5>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center py-3">
                        © 2023 BakulFul Restaurent
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer; <h2>This is header</h2>
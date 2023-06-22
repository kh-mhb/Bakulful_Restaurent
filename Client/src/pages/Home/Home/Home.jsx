import React from 'react';
import { Link } from 'react-router-dom';
import HomeCarousel from './HomeCarousel';
import { Button, Col, Container, Row } from 'react-bootstrap';
import offer from '../../../../public/offer.jpg'

const Home = () => {
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <p className='my-5 fs-4 p-2 text-center'>
                Bakulful is a wonderful restaurant that is sure to satisfy any food lover's cravings. Located in a lively part of town, the restaurant boasts a welcoming and comfortable atmosphere with stylish decor and cozy seating arrangements.

                At Bakulful, you can indulge in a diverse and flavorful menu that features an array of delectable dishes made with fresh, high-quality ingredients. Whether you're in the mood for savory appetizers, hearty entrees, or decadent desserts, there is something for everyone on the menu.

                The restaurant's talented chefs are passionate about creating innovative and delicious dishes that combine traditional flavors with modern techniques, resulting in a truly unforgettable dining experience. The friendly and attentive staff are always on hand to make sure that your dining experience is nothing short of excellent.

                Whether you're looking to enjoy a romantic dinner for two, a night out with friends, or a celebratory meal with family, Bakulful is the perfect destination for any occasion. <br />
                <Link to='/category/0' > <Button variant='outline-primary my-2 fs-4 fw-bold'>View all dishes </Button> </Link></p>

            <Container>

                <Row className='align-items-center p-2'>
                    <Col lg={6}>
                        <p className='p-2 fs-2 fw-bold' > <span className='fst-italic text-danger fs-1 '>HI !</span> you can take the offer right?</p>

                    </Col>
                    <Col>
                        <img src={offer} className='img-fluid' alt="" />

                    </Col>


                </Row>
            </Container>

        </div>
    );
};

export default Home; <h1>This is home1</h1>
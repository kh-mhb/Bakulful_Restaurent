import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';


const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>

                    <Col lg={9} sm={4}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3} sm={4}><RightNav></RightNav></Col>
                </Row>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;
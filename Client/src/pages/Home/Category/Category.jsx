import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Home/NewsCard/NewsCard';
import { Col, Row } from 'react-bootstrap';
import LeftNav from '../../Shared/LeftNav/LeftNav';
import RightNav from '../../Shared/RightNav/RightNav';

const Category = () => {
    let { id } = useParams();
    const categoryChef = useLoaderData();
    return (

        <div>
            <Row>
                <Col lg={3} sm={12}><LeftNav></LeftNav></Col >
                <Col lg={9} sm={12}>
                    <Row>

                        {
                            categoryChef.map(chef => <Col lg={6} sm={12} md={12}>  <NewsCard
                                key={chef._id}
                                chef={chef}
                            >

                            </NewsCard></Col>)
                        }
                    </Row>
                </Col>


            </Row>

        </div>
    );
};

export default Category;
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaBeer, FaFacebook, FaGithub, FaInstagram, FaTwitch } from 'react-icons/fa';
import QZone from '../QZone/QZone';



const RightNav = () => {
    return (
        <div className='p-2'>
            <h4>Login With</h4>
            <Button className='mb-2' variant="outline-primary"> <FaFacebook /> Login With FaceBook</Button>
            <Button variant="outline-secondary"> <FaGithub></FaGithub> Login With GitHub</Button>
            <div className='mt-2'>
                <ListGroup >
                    <ListGroup.Item className='text-center'> Join With Us</ListGroup.Item>

                    <ListGroup.Item variant="warning"><FaFacebook></FaFacebook> FaceBook</ListGroup.Item>
                    <ListGroup.Item variant="info"> <FaTwitch></FaTwitch> Twitter</ListGroup.Item>
                    <ListGroup.Item variant="dark"> <FaInstagram></FaInstagram> Instragram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>

        </div>
    );
};

export default RightNav; 
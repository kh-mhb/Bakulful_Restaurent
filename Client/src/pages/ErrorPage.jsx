import React from 'react';
import error from '../../public/error.png'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const ErrorPage = () => {
    return (
        <div className='container  '>
            <img src={error} alt="" className='img-fluid d-block' />
            <Link to='/' className='d-flex justify-content-center text-decoration-none  fw-bold button'><Button variant="outline-primary">Go Back</Button></Link>
        </div>
    );
};

export default ErrorPage;
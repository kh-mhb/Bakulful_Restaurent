import React from 'react';
import qz1 from '../../../assets/qZone1.png';
import qz2 from '../../../assets/qZone2.png';
import qz3 from '../../../assets/qZone3.png';
import bg from '../../../assets/bg.png';
import { Col, Container, Image, Row } from 'react-bootstrap';


const QZone = () => {
    return (
        <div className=' mt-2 p-4' >
            <h4>Q-Zone</h4>
            <div>
                <img src={qz1} alt="" />
                <img src={qz2} alt="" />
                <img src={qz3} alt="" />
            </div>
            <hr></hr>

            <hr></hr>
            <div>     <img src={bg} alt="" />
            </div>
        </div>

    );
};

export default QZone;
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaHeart, FaReact, FaThumbsUp } from 'react-icons/fa';
import ModalToViewRecipe from '../../../ModalToViewRecipe/ModalToViewRecipe';
import Modal from 'react-bootstrap/Modal';
import { AuthContext } from '../../../../AuthProvider';
import { toast } from 'react-toastify';

const NewsCard = ({ chef }) => {

    const { chefPicture, chefName, yearsOfExperience, nameRecipes, likes, viewRecipes, _id } = chef;
    const [isDisable, setIsDisable] = useState(false);
    const [selected, setSelected] = useState("workd")
    console.log(viewRecipes)
    const [show, setShow] = useState(false);
    const { fvrtarray, setfvrtarray } = useContext(AuthContext)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const addToFvrt = () => {
        const fvrt = fvrtarray;
        fvrt.push(chef);
        setfvrtarray(fvrt);
        setIsDisable(true);
        toast("Added to favourite");
        console.log(fvrtarray);
    }
    return (
        <div>
            {/* {
                selected && <ModalToViewRecipe></ModalToViewRecipe>
            } */}


            <div className='p-2'>
                <Card className="text-center">
                    <img className='fluid' src={chefPicture} alt="" />
                    <Card.Body>
                        <Card.Title>{chefName}</Card.Title>
                        <div>
                            <p>Experience:{yearsOfExperience} years</p>
                            <h4>Chef Special:{nameRecipes}</h4>
                        </div>
                        <Card.Text>

                        </Card.Text>

                        <Button variant="primary" onClick={handleShow}>
                            View Recipe
                        </Button>
                    </Card.Body>
                    <Card.Footer className="text-muted  mt-1"> <FaThumbsUp></FaThumbsUp> {likes}<Button variant="outline-danger" disabled={isDisable} className='mx-2' onClick={addToFvrt}><FaHeart /></Button> </Card.Footer>
                </Card>


                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{nameRecipes}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{viewRecipes}</Modal.Body>

                </Modal>
            </div>
        </div>
    );
};

export default NewsCard;
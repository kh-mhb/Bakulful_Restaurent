import React, { useContext } from 'react';
import hdimg from '../../../assets/top-imgae.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Button, Image } from 'react-bootstrap';
import { AuthContext } from '../../../AuthProvider';





const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleToLogOut = () => {
        logOut()
            .then(result => {

                console.log("Logged Out")
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className='text-center'>

                <img src={hdimg} alt="" />
                <Marquee speed={20} className='text-secondary'>
                    Eat Fresh,Feel Fresh & Be Fresh
                </Marquee>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Link to="/" className='nav-link text-white fs-4  fw-bold'>BakulFul Restaurent</Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <NavLink className='nav-link' exact to="/" activeClassName="active">Home</NavLink>

                                <NavLink activeClassName="active" className=' nav-link' to='/blogs'>Blogs</NavLink>


                            </Nav>
                            <Nav>

                                {
                                    user ? <>

                                        <Image src={user.photoURL} className='mx-2' alt={user?.displayName} roundedCircle style={{ width: "40px", height: "40px" }}></Image>
                                        <Button varient="primary" onClick={handleToLogOut}>Log Out</Button>
                                    </> : <>
                                        <Link className='mx-2' to='/login'><Button variant='primary'>Login</Button></Link>
                                        <Link className='mx-2' to='/registration'><Button variant='primary'>Registration</Button></Link>
                                    </>
                                }

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <p>{moment().format("dddd, MMMM .YYYY")}</p>
            </div>
        </div>
    );
}

export default Header;
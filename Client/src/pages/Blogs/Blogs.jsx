import React, { useRef } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import { useReactToPrint } from 'react-to-print';
import { FaPrint } from 'react-icons/fa';

const Blogs = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    return (
        <Container>
            <Button onClick={handlePrint} variant="outline-primary"><FaPrint /></Button>

            <Container ref={componentRef}>


                {/* <p>working</p> */}


                <Row>
                    <Col xs={12} md={6}>
                        <h3>Tell us the differences between uncontrolled and controlled components.</h3>
                        <p>An uncontrolled component is a component that manages its own state internally and does not rely on any external state management. Uncontrolled components usually have their own internal state and methods for manipulating that state. Examples of uncontrolled components in React include simple form elements like input, select, and textarea. These components are easy to use, but can be limited in functionality and can be difficult to test.

                            On the other hand, controlled components rely on an external source of state to manage their values and behavior. In React, this external source of state is typically a parent component that passes down values and methods as props. Controlled components do not have their own internal state, and instead rely entirely on the state passed down from the parent component. Controlled components are more powerful and flexible, but also require more setup and can be more complex to use.</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <h3>How to validate React props using PropTypes

                        </h3>
                        <p>Install the prop-types package using npm or yarn.
                            Import PropTypes from the prop-types package in your React component file.
                            Define the prop types for your component by adding a propTypes object to your component.
                            Use the defined prop types to validate the props passed to your component.
                            If a prop does not match its defined type, a warning will appear in the console.
                            Using PropTypes to validate your props helps catch errors early in development and makes your components more robust and reusable. The package provides built-in prop types like string, number, bool, array, object, and func. You can also define your custom prop types.</p>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs={12} md={6}>
                        <h3>Tell us the difference between nodejs and express js.

                        </h3>
                        <p>Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code on the server-side. It uses an event-driven, non-blocking I/O model to handle I/O operations efficiently and can be used to build scalable network applications, real-time applications, and backend services. Node.js provides several built-in modules for handling HTTP, TCP, DNS, and other network protocols.

                            Express.js, on the other hand, is a web application framework for Node.js. It provides a set of features and tools for building web applications, RESTful APIs, and web services on top of Node.js. Express.js is built on top of Node.js's built-in HTTP module and provides a simpler and more concise API for handling HTTP requests, routing, middleware, and view rendering. Express.js allows developers to create modular, scalable, and maintainable web applications with less code.

                            In short, Node.js is a runtime environment that enables developers to run JavaScript code on the server-side, while Express.js is a web application framework for Node.js that provides a set of features and tools for building web applications, RESTful APIs, and web services.</p>
                    </Col>

                </Row>
            </Container>
        </Container>

    );
};

export default Blogs;
import React from "react";
import { Button, ButtonGroup } from 'react-bootstrap';

const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 px-3">
            <a className="navbar-brand p-1">Pizzería Mamma Mia!</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                <ButtonGroup>
                    <Button variant="outline-light" className="ms-2">🍕 Home</Button>
                    {token ? (
                        <>
                            <Button variant="outline-light" className="ms-2">🔓 Profile</Button>
                            <Button variant="outline-light" className="ms-2">🔒 Logout</Button>
                        </>
                    ) : (
                        <>
                            <Button variant="outline-light" className="ms-2">🔐 Login</Button>
                            <Button variant="outline-light" className="ms-2">🔐 Register</Button>
                        </>
                    )}
                </ButtonGroup>
                <button className="btn btn-outline-info total-button">
                        🛒 Total: ${total.toLocaleString()}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;





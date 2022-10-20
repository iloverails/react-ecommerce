import React, {useState} from 'react';
import { Container, Nav, Navbar, Button, Image, Form, Modal, InputGroup } from 'react-bootstrap';
// @ts-ignore
import styled from 'styled-components';

import { Login } from '../features/auth/login/Login'

import { useAppSelector, useAppDispatch } from '../app/hooks';

export default function Header() {
    const dispatch = useAppDispatch();

    const handleClickLogout = () => {
        // dispatch(logOut());
    };


    const SearchButton = styled(Button)`
        color: white
        
    `
    const Logo = styled(Image)`
        max-width: 110px;
        margin-right: 30px
    `

    const CatalogBtn = styled(Button)`
        margin-right: 30px;
    `

    const [show, setShow] = useState(false);

    const showLogin = () => setShow(true)
    const hideLogin = () => setShow(false)

    return (
        <header>
            <Container>
                <Navbar expand="lg">
                    <Navbar.Brand>
                        <Logo src="https://ir.ozone.ru/s3/cms/5a/t52/wc400/1doodle_2.png"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <CatalogBtn className="btn-primary"> Catalog </CatalogBtn>
                    <Nav.Item className="flex-grow-1 d-flex">
                        <InputGroup>
                            <Form.Control placeholder="Search items" className="shadow-none" aria-label="Search items"/>
                            <SearchButton variant="outline-secondary" className="btn-primary">
                                Button
                            </SearchButton>
                        </InputGroup>
                    </Nav.Item>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link onClick={showLogin}>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
            <Modal show={show} onHide={hideLogin}>
                <Login closeModal={hideLogin} />
            </Modal>
        </header>

    )
}
import React, {useState} from 'react';
import { Container, Nav, Navbar, Button, Image, Form, Modal, InputGroup } from 'react-bootstrap';
// @ts-ignore
import styled from 'styled-components';

import { Login } from '../features/auth/login/Login'
import { Register } from '../features/auth/register/Register'

import {userLogout} from '../features/auth/login/loginAPI'
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectIsLoggedIn } from '../features/auth/authSlice';

export default function Header() {
    const dispatch = useAppDispatch();
    let isLoggedIn = useAppSelector(selectIsLoggedIn);


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

    const [statusAuthForm, setStatusAuthForm] = useState('');

    const setAuthFormStatus = (status: string) => {
        setStatusAuthForm(status)
    }

    const toggleModal = (display: boolean, status?: string) => {
        if (status)
            setAuthFormStatus(status)

        setShow(display)
    }

    const switchAuthStatuses = (statusAuthForm: string) => {
        switch (statusAuthForm) {
            case 'login':
                return <Login toggleModal={toggleModal} setAuthFormStatus={setAuthFormStatus} />
            case 'register':
                return <Register toggleModal={toggleModal} setAuthFormStatus={setAuthFormStatus} />
            default:
                return <Login toggleModal={toggleModal} setAuthFormStatus={setAuthFormStatus} />
        }
    }

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
                            {
                                isLoggedIn ?
                                    <Nav.Link onClick={()=>{dispatch(userLogout())}}>Logout</Nav.Link>
                                    :
                                    <Nav.Link onClick={()=> { toggleModal(true, 'login') }}>Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
            <Modal show={show} onHide={()=>{ toggleModal(false) }}>
                { switchAuthStatuses(statusAuthForm) }
            </Modal>
        </header>

    )
}
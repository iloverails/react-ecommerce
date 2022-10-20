import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { login } from '../authSlice';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

type Props = {
    closeModal: (event: React.MouseEvent<HTMLElement>) => void
}
export function Login({ closeModal }: Props) {
    const dispatch = useAppDispatch();

    
    return (
        <div>
            <div className="border border-3 border-primary">
                <Card className="shadow">
                    <Card.Body>
                        <div className="mb-3 mt-md-4">
                            <h2 className="fw-bold mb-2 text-uppercase ">Brand</h2>
                            <p className=" mb-5">Please enter your login and password!</p>
                            <div className="mb-3">
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className="text-center">
                                            Email address
                                        </Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicPassword"
                                    >
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicCheckbox"
                                    >
                                        <p className="small">
                                            <a className="text-primary" href="#!">
                                                Forgot password?
                                            </a>
                                        </p>
                                    </Form.Group>
                                    <div className="d-grid">
                                        <Button variant="primary" type="submit">
                                            Login
                                        </Button>
                                    </div>
                                </Form>
                                <div className="mt-3">
                                    <p className="mb-0  text-center">
                                        Don't have an account?{" "}
                                        <a href="{''}" className="text-primary fw-bold">
                                            Sign Up
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

import React, { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {selectLoginStatus} from '../authSlice';
import { Card, Form, Button } from 'react-bootstrap';
import { useForm, SubmitHandler } from "react-hook-form";
import { userLogin } from './loginAPI'

type Props = {
    toggleModal: (status: boolean) => void,
    setAuthFormStatus: (status: string) => void
}
export function Login({toggleModal, setAuthFormStatus}: Props) {
    const dispatch = useAppDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    let loginStatus = useAppSelector(selectLoginStatus);

    useEffect(() => {
        if (loginStatus === "finished") {
            toggleModal(false)
        }
    }, [ loginStatus ])

    type Inputs = {
        email: string,
        password: string
    };


    const onSubmit: SubmitHandler<Inputs>= (data: {email: string, password: string}) => {
        dispatch(userLogin(data))
    }

    const goToRegister = () => {
        setAuthFormStatus('register')
    }

    return (
        <div>
            <div className="border border-3 border-primary">
                <Card className="shadow">
                    <Card.Body>
                        <div className="mb-3 mt-md-4">
                            <h2 className="fw-bold mb-2 text-uppercase ">Brand</h2>
                            <p className=" mb-5">Please enter your login and password!</p>
                            <div className="mb-3">
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className="text-center">
                                            Email address
                                        </Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true })}/>
                                        {errors.email && <span>This field is required</span>}
                                    </Form.Group>

                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicPassword"
                                    >
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" {...register("password", { required: true })} />
                                        {errors.password && <span>This field is required</span>}
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
                                        Don't have an account?
                                        <a onClick={goToRegister} className="text-primary fw-bold">
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

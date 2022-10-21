import React, { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {selectRegisterStatus} from '../authSlice';
import { Card, Form, Button } from 'react-bootstrap';
import { useForm, SubmitHandler } from "react-hook-form";
import { userRegister } from './registerAPI'


type Props = {
    toggleModal: (status: boolean) => void,
    setAuthFormStatus: (status: string) => void
}
export function Register({toggleModal, setAuthFormStatus}: Props) {
    const dispatch = useAppDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    let registerStatus = useAppSelector(selectRegisterStatus);

    useEffect(() => {
        if (registerStatus === 'finished') {
            setAuthFormStatus('login')
        }
    }, [ registerStatus ])

    type Inputs = {
        email: string,
        password: string,
        username: string
    };


    const onSubmit: SubmitHandler<Inputs>= (data: Inputs) => {
        dispatch(userRegister(data))
    }

    const goToLogin = () => {
        setAuthFormStatus('login')
    }

    return (
        <div>
            <div className="border border-3 border-primary">
                <Card className="shadow">
                    <Card.Body>
                        <div className="mb-3 mt-md-4">
                            <h2 className="fw-bold mb-2 text-uppercase ">Brand</h2>
                            <p className=" mb-5">Form registration!</p>
                            <div className="mb-3">
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className="text-center">
                                            Email address
                                        </Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true })}/>
                                        {errors.email && <span>This field is required</span>}
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicUsername">
                                        <Form.Label className="text-center">
                                            Username
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="Enter username" {...register("username", { required: true })}/>
                                        {errors.username && <span>This field is required</span>}
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
                                            Sign Up
                                        </Button>
                                    </div>
                                </Form>
                                <div className="mt-3">
                                    <p className="mb-0  text-center">
                                        Do you already have account?{" "}
                                        <a onClick={goToLogin} className="text-primary fw-bold">
                                            Login
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

"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import "../../public/style/contact-us.scss";
import { Button, Form, Input, Textarea } from '@heroui/react';
import toast from 'react-hot-toast';

// The rest of your component code...


const ContactUs = () => {

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };





    const formSubmit = async (e) => {
        e.preventDefault();
        if (!data.firstName.trim() || !data.email.trim()) {
            toast.error("First Name and Email are required");
            return;
        }

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/contact-forms`, { data })
            console.log(response?.data)
            toast.success("Form submitted successfully!");
            setData({ firstName: '', lastName: '', email: '', message: '' });
            setErrors({});
        }
        catch (error) {
            console.log(error)
            toast.error("Error submitting form!")
        }

    }

    return (
        <div>
            <section className="contact-banner padding-80 mt-16">
                <div className="container">
                    <div className="contact-col">
                        <h3 className="text-left">Simplify your construction <br />
                            design journey with us</h3>
                        {/* <p className="grey mt-[15px]">Office ipsum you must be muted. Club blue game driving items <br />quarter while responsible.</p> */}
                        <form onSubmit={(e) => formSubmit(e)} className="form-col mt-10 flex flex-col gap-[15px]">
                            <div className="name-field flex flex-row gap-[15px]">
                                <div className='w-full'>
                                    <Input
                                    isRequired
                                        label="First Name"
                                        labelPlacement='inside'
                                        aria-label='first-name'
                                        value={data.firstName}
                                        onChange={(e) => setData({ ...data, firstName: e.target.value })}
                                        classNames={{ inputWrapper: "rounded-[6px]" }}
                                    />
                                    {/* <Input type="text" name="firstName" placeholder="First Name" value={data.firstName} /> */}
                                    {/* {errors.firstName && <span className="error-text">{errors.firstName}</span>} */}
                                </div>
                                <div className='w-full'>
                                    <Input

                                        label="Last Name"
                                        labelPlacement='inside'
                                        classNames={{ inputWrapper: "rounded-[6px]" }}
                                        aria-label='last-name'
                                        value={data.lastName}
                                        onChange={(e) => setData({ ...data, lastName: e.target.value })}
                                    />
                                    {/* {errors.lastName && <span className="error-text">{errors.lastName}</span>} */}
                                </div>
                            </div>
                            <div>
                                <Input
                                isRequired
                                    label="Email"
                                    labelPlacement='inside'
                                    classNames={{ inputWrapper: "rounded-[6px]" }}
                                    aria-label='email'
                                    type='email'
                                    value={data.email}
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                />
                                {/* {errors.email && <span className="error-text">{errors.email}</span>} */}
                            </div>
                            <div>
                                <Textarea
                                    classNames={{ inputWrapper: "rounded-[6px]" }}
                                    rows="7"
                                    name="message"
                                    placeholder="Enter message"
                                    value={data.message}
                                    onChange={(e) => setData({ ...data, message: e.target.value })}
                                />
                                {/* {errors.message && <span className="error-text">{errors.message}</span>} */}
                            </div>
                            <Button type="submit" className="primary-solid-btn h-14">Submit</Button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;

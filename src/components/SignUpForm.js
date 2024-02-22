
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpForm = () => {
    const initialState =
    {
        name: '',
        mobileNumber: '',
        email: '',
        password: '',
        address: '',
        pincode: '',
        city: ''
    }

    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const url = "https://vercel.com/shersha123/my-food-delivery-be/signup"
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validateForm()) {

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                toast.success("user create successfully")
                // setFormData(initialState)
                return await response.json();

            } catch (error) {
                console.log(error)
            }
        }
    };

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        // Name validation
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        }

        // Mobile number validation
        if (!formData.mobileNumber.match(/^\d{10}$/)) {
            errors.mobileNumber = 'Mobile number must be 10 digits';
            isValid = false;
        }
        // Email
        if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
            errors.email = 'Invalid email address';
            isValid = false;
        }
        // Password 
        if (formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
            isValid = false;
        }
        // Address
        if (!formData.address.trim()) {
            errors.address = 'Address is required';
            isValid = false;
        }
        // Pincode
        if (!formData.pincode.match(/^\d{6}$/)) {
            errors.pincode = 'Pincode must be 6 digits';
            isValid = false;
        }
        // City
        if (!formData.city.trim()) {
            errors.city = 'City is required';
            isValid = false;
        }
        setErrors(errors);
        return isValid;
    };



    return (
        <div className='signup-container'>
            <h2>Delivery Agent Sign Up</h2>

            <form onSubmit={handleSubmit} className='signup-form'>
                <div className='Form1'>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div>
                    <label>Mobile Number:</label>
                    <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                    />
                    {errors.mobileNumber && <span>{errors.mobileNumber}</span>}
                </div>
                <div>
                    <label>Email Address:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <div>
                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                    <div>
                        <label>Pincode:</label>
                        <input
                            type="text"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {errors.address && <span>{errors.address}</span>}
                    {errors.pincode && <span>{errors.pincode}</span>}
                </div>
                <div>
                    <label>City:</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                    {errors.city && <span>{errors.city}</span>}
                </div>
                <button type="submit">Sign Up</button>
            </form>

        </div>
    );
};

export default SignUpForm;

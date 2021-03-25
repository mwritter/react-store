import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignUpContainer } from './sign-up.styles';
import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const SignUp = ({ signUpStart }) => {
    const [userCredincals, setUserCredincals] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const { displayName, email, password, confirmPassword } = userCredincals;

    const handleSubmit = async evt => {
        evt.preventDefault();
        if (password !== confirmPassword) {
            alert("passwords dont match");
            return;
        }

        signUpStart({
            email,
            password,
            displayName
        });
    }

    const handleChange = evt => {
        const { name, value } = evt.target;
        setUserCredincals({ ...userCredincals, [name]: value })
    }

    return (
        <SignUpContainer>
            <h2 className="title">
                I do not have and account
                </h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit} className="sign-up-form">
                <FormInput
                    onChange={handleChange}
                    label='Display Name'
                    type='text'
                    name='displayName'
                    value={displayName}
                    required
                />
                <FormInput
                    onChange={handleChange}
                    label='Email'
                    type='email'
                    name='email'
                    value={email}
                    required
                />
                <FormInput
                    onChange={handleChange}
                    label='Password'
                    type='password'
                    name='password'
                    value={password}
                    required
                />
                <FormInput
                    onChange={handleChange}
                    label='Confirm Password'
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    required
                />
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);

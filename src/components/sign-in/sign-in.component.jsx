import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignInButtonContainer, SignInContainer } from './sign-in.styles';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [userCredentials, setCredentials] = useState({ email: '', password: '' })

    const handleSubmit = async evt => {
        evt.preventDefault();
        const { email, password } = userCredentials;

        emailSignInStart(email, password);
    }
    const { email, password } = userCredentials;

    const handleChange = evt => {
        const { value, name } = evt.target;
        setCredentials({ ...userCredentials, [name]: value });
    }

    return (
        <SignInContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    handleChange={handleChange}
                    label="Email"
                    name="email"
                    value={email}
                    type="email"
                    required
                />
                <FormInput
                    handleChange={handleChange}
                    label="Password"
                    name="password"
                    value={password}
                    type="password"
                    required
                />
                <SignInButtonContainer>
                    <CustomButton type="submit">
                        Sign In
                        </CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                        Sign In With Google
                        </CustomButton>
                </SignInButtonContainer>
            </form>
        </SignInContainer>
    );
}
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})
export default connect(null, mapDispatchToProps)(SignIn);
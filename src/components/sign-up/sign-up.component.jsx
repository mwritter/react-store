import React from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignUpContainer } from './sign-up.styles';
import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async evt => {
        evt.preventDefault();
        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;
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

    handleChange = evt => {
        const { name, value } = evt.target;
        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <SignUpContainer>
                <h2 className="title">
                    I do not have and account
                </h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput
                        onChange={this.handleChange}
                        label='Display Name'
                        type='text'
                        name='displayName'
                        value={displayName}
                        required
                    />
                    <FormInput
                        onChange={this.handleChange}
                        label='Email'
                        type='email'
                        name='email'
                        value={email}
                        required
                    />
                    <FormInput
                        onChange={this.handleChange}
                        label='Password'
                        type='password'
                        name='password'
                        value={password}
                        required
                    />
                    <FormInput
                        onChange={this.handleChange}
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
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);

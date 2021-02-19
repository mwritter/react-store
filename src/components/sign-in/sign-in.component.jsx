import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = evt => {
        evt.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = evt => {
        const { value, name } = evt.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sig-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        label="Email"
                        name="email"
                        value={this.state.email}
                        type="email"
                        required
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        label="Password"
                        name="password"
                        value={this.state.password}
                        type="password"
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
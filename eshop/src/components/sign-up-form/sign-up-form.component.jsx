import React, { useState } from 'react';
import './sign-up-form.styles.scss';
import Button from '../button/button.component';
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

function SignUpForm() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    // console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Password do not match');
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
            console.log({ displayName });
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }
        }
    };

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormFields({ ...formFields, [id]: value });
    };

    return (
        <div className='sign-up-container'>
            <h2>D'ont have an account </h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Diaplay Name'
                    type='text'
                    required
                    value={displayName}
                    onChange={handleChange}
                    id='displayName'
                />

                <FormInput
                    label='Email'
                    type='email'
                    required
                    value={email}
                    onChange={handleChange}
                    id='email'
                />

                <FormInput
                    label='Password'
                    type='password'
                    required
                    value={password}
                    onChange={handleChange}
                    id='password'
                />

                <FormInput
                    label='Confirm Password'
                    type='password'
                    required
                    value={confirmPassword}
                    onChange={handleChange}
                    id='confirmPassword'
                />
                <Button
                    
                    type='submit'>
                    Sign Up
                </Button>
            </form>
        </div>
    );
}

export default SignUpForm;

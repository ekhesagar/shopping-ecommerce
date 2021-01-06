import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'
import './sign-in.styles.scss';


class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email:'', password:'' })
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email'
                    value={this.state.email}
                    type="text"
                    label='email'
                    handleChange={this.handleChange}
                    required
                    />
                    
                    
                    <FormInput
                    name='password'
                    value={this.state.password}
                    type="password"
                    label='password'
                    handleChange={this.handleChange}
                    required
                    />

                    <div className='buttons'>
                        <CustomButton type="submit">Submit Form</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SignIn with Google</CustomButton>
                    </div>
                    
                </form>
            </div>
            
        )
    }
}

export default SignIn
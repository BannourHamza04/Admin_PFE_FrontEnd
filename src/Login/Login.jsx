import React, { useRef } from 'react'
import LoginService from '../Services/LoginService'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    
    const emailField = useRef()
    const passwordField = useRef()
    const navigate = useNavigate();
    const [_, setCookies] = useCookies(["access_token"])

    const ValidateForm = async () => {
        const email = emailField.current.value
        const password = passwordField.current.value
        let isFormValid = true

        // Function Email Validation
        function validateEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }

        if (password.length < 8) {
            toast.error('Password invalid, The Password must be at least 8 characters long ! ')
            isFormValid = false
        }

        if (!validateEmail(email)) {
            toast.error('Invalid email format ! ')
            isFormValid = false
        }

        if (isFormValid) {
            try {
                const admin = {
                    email: email,
                    password: password
                }
                const response = await LoginService.login(admin)
                if (response.status === 200) {
                    localStorage.setItem('admin_data', JSON.stringify(response.data.sessAdmin))
                    localStorage.setItem('token', response.data.token)
                    setCookies("access_token", response.data.token)
                    toast.success(response.data);
                    navigate('/Dashboard');
                }
                if(response.status === 202){
                    toast.error(response.data);
                }
                if(response.status === 400) {
                    toast.error(response.data);
                }
                if(response.status === 201){
                    toast.error(response.data);
                }
            } catch (err) {
                console.log(err)
            }

        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        ValidateForm()
    }

    return (
        <>
            <div>
                <ToastContainer position='top-center' />
            </div>
            <div class="row g-0 app-auth-wrapper">
            <div class="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
                <div class="d-flex flex-column align-content-end">
                    <div class="app-auth-body mx-auto">
                        <div class="app-auth-branding mb-4"><a class="app-logo" href="index.html"><img class="logo-icon me-2" src="assets/images/app-logo.svg" alt="logo" /></a></div>
                        <h2 class="auth-heading text-center mb-5">Log in to Portal</h2>
                        <div class="auth-form-container text-start">
                            <form class="auth-form login-form" onSubmit={handleSubmit}>
                                <div class="email mb-3">
                                    <label class="sr-only" for="signin-email">Email</label>
                                    <input id="signin-email" name="signin-email" type="email" class="form-control signin-email" placeholder="Email address" required="required" ref={emailField} />
                                </div>
                                <div class="password mb-3">
                                    <label class="sr-only" for="signin-password">Password</label>
                                    <input id="signin-password" name="signin-password" type="password" class="form-control signin-password" placeholder="Password" required="required" ref={passwordField}/>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn app-btn-primary w-100 theme-btn mx-auto">Log In</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
                <div class="auth-background-holder">
                </div>
                <div class="auth-background-mask"></div>
                <div class="auth-background-overlay p-3 p-lg-5">
                    <div class="d-flex flex-column align-content-end h-100">
                        <div class="h-100"></div>
                        <div class="overlay-content p-3 p-lg-4 rounded">
                            <h5 class="mb-3 overlay-title">Admin Dashboard for THE ATHLETIC APP</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}

import { useContext } from "react";
import { AppContext } from "../components/appStateProvider";
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router";


import '../styles/login.css'

export default function Login() {
    const context = useContext(AppContext);
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const userIn = context.state.userId;
    const Userlogin = ({ email, password }) => {

        // get the users data
        const user = localStorage.getItem(email);

        if (!user) {
            return alert('An account for this email was not found');
        }

        const userdata = JSON.parse(user);
        console.log(userdata);

        if (password !== userdata.password) {
            return alert('email or password was incorrect');
        }

        alert('login successful for ' + email);

        context.dispatch({
            type: 'LOGIN',
            payload: {
                isLoggedIn: true,
                userId: userIn,
                userEmail: userdata.email,
            },
        });
        History.push('/notes');


    };



    function loginHandler({email,password}){
        let userdata = {
            email: email,
            password: password,
        };

        fetch(
            'https://user-manager-three.vercel.app/api/user/login',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(userdata),
            }
        )
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.error) {
                    return alert(result.message);
                }
                alert("Login successful");

                context.dispatch({
                    type: 'LOGIN',
                    payload: result.body,
                });

                history.push("/notes");
            })
            .catch(err => {
                alert(
                    'Unable to complete request. Please try again after some time'
                );
                console.log({ err });
            });
    }

    return (
        <div className='login'>
            <form onSubmit={handleSubmit(loginHandler)}>
                <h2 className="form-title">Login</h2>
                <input
                 {...register("email", {required: true})} 
                 placeholder='Email'
                  type='text' />
                <input {...register("password", { required: true })} placeholder='Password' type='password' />
                <input className='animated' type='submit' value='Login' />
            </form>
        </div>

    )
}
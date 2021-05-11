import {useForm} from 'react-hook-form';
import './Login.css'
import app from '../module/Firebase'


function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm();
        const loginHandler = async (data) => {
        try {
            const loginUser = await app.auth().signInWithEmailAndPassword(data.email, data.password)
            return loginUser
            console.log('data', loginUser)
        } catch (e) {
            console.error(errors)
        }

    }


    return (
        <div className="main-login">

            <form className="login-form" onSubmit={handleSubmit(loginHandler)}>
                <h3>Log in</h3>
                <label htmlFor="email">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email"
                        {...register('email', {required: true})}
                        aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && <p className="login-errors" role="alert">This field is required</p>}
                </label>
                <label htmlFor="password">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        {...register('password', {required: true})}
                       />
                    {errors.password && <p className="login-errors" role="alert">This field is required</p>}
                </label>
                <button className="login-button">Log in</button>

            </form>


        </div>
    )

}

export default Login;

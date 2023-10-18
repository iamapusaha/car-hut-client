import { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



const SignUp = () => {
    const MySwal = withReactContent(Swal)
    const { createUser, signInWithGoogle, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState(null)
    const handeSignUp = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo-url')
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);
        if (password.length < 6) {
            setError('Your password should more than 6 characters')
        }
        else if (!/^(?=.*[A-Z]).+$/.test(password)) {
            setError('Your password must contain at least one capital letter')
        } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setError('Your password must contain at least one special character ')
        }
        else {
            setError(null)
            createUser(email, password)
                .then(result => {
                    updateUserProfile(name, photo)
                    console.log(result.user);
                    MySwal.fire(
                        'Good job!',
                        "Your new account is ready. We’re thrilled to have you with us!!",
                        'success'
                    )
                    // navigate('/')

                })
                .catch(error => {
                    console.error(error);
                    setError(error.message)
                })
        }
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                MySwal.fire(
                    'Good job!',
                    "Your new account is ready. We’re thrilled to have you with us!",
                    'success'
                )
                // navigate('/')
            })
            .catch(error => {
                console.error(error);
            })

    }
    return (
        <div>
            <div className=" my-16 px-3 md:px-0">
                <h1 className="text-4xl font-semibold text-center mb-3">Please Registration</h1>
                <div className="md:w-3/4 lg:w-1/2 mx-auto border-b-2 border-[#FFF781] px-3 md:px-1 mb-4"></div>
                <form onSubmit={handeSignUp} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" placeholder="photo url" name="photo-url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="flex gap-1">
                        <input type="checkbox" name="check-box" id="" />
                        <label htmlFor="check-box">Accept <a href="">Term & Conditions</a></label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#5056D2] text-white mb-2">Register</button>

                    </div>
                </form>
                <div className=' text-center'>
                    <button onClick={handleGoogleSignIn} className="md:w-3/4 lg:w-1/2 btn btn-outline bg-[#FFF781] text-base"><FcGoogle></FcGoogle>sign with google</button>
                </div>
                <p className="text-center mt-4">Dont’t Have An Account ? <Link className="text-red-400" to='/signin'>SignIn</Link></p>
                <p className="text-red-600 text-center mt-2 text-xl">{error}</p>
            </div>
        </div>
    );
};

export default SignUp;
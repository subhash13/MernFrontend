import { Link } from "react-router-dom";
const SignUp = () => {
    return (
        <div className="SignUp">
            <div className="signInNav d-flex justify-content-between align-items-center">
                <div className="logo d-flex align-items-center">
                    <img width="150" src="https://www.creativefabrica.com/wp-content/uploads/2020/02/11/Food-Logo-Graphics-1-70.jpg" alt="" />
                    <sapn className="logoTitle  fw-bolder fs-1">Foodie</sapn>
                </div>
                <div className="signUpOption">
                    <p className="fs-5 mt-3">
                        Already a User? &nbsp;{" "}
                        <Link
                            to="/"
                            className="text-decoration-none text-primary"
                            href=""
                        >
                            SignIn
                        </Link>
                    </p>
                </div>
            </div>
            <div className="signInForm d-flex flex-row-reverse justify-content-center align-items-center">
                <div className="signInImage">
                    <img width="650" src="images/signup.png" alt="" />
                </div>
                <div className="form w-25 mx-5">
                    <div className="title my-5 text-lg-start">
                        <h1 className="fw-bolder">Create an account</h1>
                        <p className="text-secondary">SignUp to continue</p>
                    </div>
                    <form action="">
                        <div className="name form-floating mb-3">
                            <input
                                className="form-control rounded-0"
                                type="text"
                                placeholder="Enter name"
                            />
                            <label for="floatingInput">Name</label>
                        </div>
                        <div className="email form-floating mb-3">
                            <input
                                className="form-control rounded-0"
                                type="email"
                                placeholder="Enter email address"
                            />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div className="password form-floating mb-3">
                            <input
                                className="form-control rounded-0"
                                type="password"
                                placeholder="Enter password"
                            />
                            <label for="floatingInput">Password</label>
                        </div>
                        <div className="confirmPassword form-floating mb-3">
                            <input
                                className="form-control rounded-0"
                                type="password"
                                placeholder="Confirm password"
                            />
                            <label for="floatingInput">Confirm Password</label>
                        </div>
                        <div className="signInButton">
                            <button className="px-5 my-3 btn btn-primary btn-lg rounded-5">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

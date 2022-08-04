import SignIn from "../SignIn/SignIn"

const Auth = () =>{
    return(
        <div className="auth">
            <div className="auth__sidebar">

            </div>
            <div className="auth__content">
                <SignIn />
            </div>
        </div>
    )
}

export default Auth
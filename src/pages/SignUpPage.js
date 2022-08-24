import Auth from "../components/Auth/Auth"
import SignUp from "../components/SignUp/SignUp"

const SignUpPage = () => {
    return (
        <main className="main">
            <Auth>
                <SignUp />
            </Auth>
        </main>
    )
}


export default SignUpPage
import Auth from "../components/Auth/Auth"
import SignIn from "../components/SignIn/SignIn"

const LoginPage = () => {
    return (
        <main className="main">
            <Auth>
                <SignIn />
            </Auth>
        </main>
    )
}


export default LoginPage
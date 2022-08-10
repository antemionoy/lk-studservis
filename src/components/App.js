import { Routes, Route, BrowserRouter } from "react-router-dom"
import LoginPage from '@/pages/LoginPage'
import SignUpPage from '@/pages/SignUpPage'
import HomePage from "../pages/HomePage"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />}></Route>
                <Route path='signup' element={<SignUpPage />}></Route>
                <Route path='home' element={<HomePage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
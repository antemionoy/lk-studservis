
import { Routes, Route, BrowserRouter } from "react-router-dom"
import LoginPage from '@/pages/LoginPage'
import SignUpPage from '@/pages/SignUpPage'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />}></Route>
                <Route path='signup' element={<SignUpPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
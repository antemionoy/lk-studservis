import { Routes, Route, BrowserRouter } from "react-router-dom"
import LoginPage from '@/pages/LoginPage'
import SignUpPage from '@/pages/SignUpPage'
import HomePage from "../pages/HomePage"
import WithdrawMoneyPage from "../pages/WithdrawMoneyPage"
import NewsPage from "../pages/NewsPage"
import SupportPage from "../pages/SupportPage"
import ProfilePage from "../pages/ProfilePage"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />}></Route>
                <Route path='signup' element={<SignUpPage />}></Route>
                <Route path='home' element={<HomePage />}></Route>
                <Route path='money' element={<WithdrawMoneyPage />}></Route>
                <Route path='news' element={<NewsPage />}></Route>
                <Route path='support' element={<SupportPage />}></Route>
                <Route path='profile' element={<ProfilePage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
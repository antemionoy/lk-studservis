import './Content.scss'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Sidebar from '../Sidebar/Sidebar'

const Content = ({ children }) => {
    return (
        <main className='main'>
            <div className="main__grid d-flex">
                <Sidebar />
                <div className="content">
                    <Header />
                    <div className="content__central">
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default Content
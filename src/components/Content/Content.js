import './Content.scss'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Statistics from '../Statistics/Statistics'

const Content = () => {
    return (
        <div className="content">
            <Header />
            <div className="content__central">
                <Statistics />
            </div>
            <Footer />
        </div>
    )
}

export default Content
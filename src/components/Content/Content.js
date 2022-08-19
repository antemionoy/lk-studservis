import './Content.scss'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Statistics from '../Statistics/Statistics'
import Traffic from '../Traffic/Traffic'
import Orders from '../Orders/Orders'

const Content = () => {
    return (
        <div className="content">
            <Header />
            <div className="content__central">
                <Statistics />
                <Traffic />
                <Orders />
            </div>
            <Footer />
        </div>
    )
}

export default Content
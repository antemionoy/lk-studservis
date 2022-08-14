import './Home.scss'
import Sidebar from "../Sidebar/Sidebar"
import Content from '../Content/Content'

const Home = () =>{
    return(
        <div className="home">
            <div className="home__grid d-flex">
                <Sidebar />
                <Content />
            </div>
        </div>
    )
}

export default Home
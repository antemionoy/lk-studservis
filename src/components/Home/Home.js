import './Home.scss'
import Sidebar from "../Sidebar/Sidebar"

const Home = () =>{
    return(
        <div className="home">
            <div className="home__grid d-flex">
                <Sidebar />
            </div>
        </div>
    )
}

export default Home
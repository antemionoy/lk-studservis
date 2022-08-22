import Content from "../components/Content/Content"
import Orders from "../components/Orders/Orders"
import Statistics from "../components/Statistics/Statistics"
import Traffic from "../components/Traffic/Traffic"

const HomePage = () => {
    return (
        <Content>
            <Statistics />
            <Traffic />
            <Orders />
        </Content>
    )
}

export default HomePage
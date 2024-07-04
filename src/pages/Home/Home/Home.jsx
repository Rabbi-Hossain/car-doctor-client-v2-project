import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import TimeManage from "../TimeManage/TimeManage";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <TimeManage></TimeManage>
        </div>
    );
};

export default Home;
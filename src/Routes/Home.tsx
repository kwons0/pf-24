import { Outlet } from "react-router-dom";
import Box from "../Components/box";
import Intro from "../Components/intro";
import List from "../Components/list";
import Footer from "../Components/footer";

function Home(){
    return(
        <div>
            <Intro/>
            <Box/>
            <List/>
            <Footer/>
            <Outlet/>
        </div>
    )
}
export default Home;
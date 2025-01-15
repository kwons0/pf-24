import { Outlet } from "react-router-dom";
import Box from "../Components/box";
import Intro from "../Components/intro";

function Home(){
    return(
        <div>
            <Intro/>
            <Box/>
            <Outlet/>
        </div>
    )
}
export default Home;
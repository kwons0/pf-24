import { Outlet } from "react-router-dom";
import Box from "../Components/box";
import Intro from "../Components/intro";
import List from "../Components/list";

function Home(){
    return(
        <div>
            <Intro/>
            <Box/>
            <List/>
            <Outlet/>
        </div>
    )
}
export default Home;
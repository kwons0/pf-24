import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { isModalOpen } from './atom';
import { useRecoilValue } from 'recoil';
import Home from './Routes/Home';
import Page from './Components/page';
import Project from './Components/project';

function Router(){
    const modalState = useRecoilValue(isModalOpen);

    return(
        <BrowserRouter>
            <Routes>
                {
                    modalState === true ? (
                        <Route path="/" element={<Home/>}>
                            <Route path="/project/:projectId" element={<Page/>}/>
                        </Route>
                    ) : (
                        <>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/project/:projectId" element={<Project/>}/>
                        </>
                    )
                }
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
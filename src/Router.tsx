import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { isModalOpen } from './atom';
import { useRecoilValue } from 'recoil';
import Home from './Routes/Home';
import Page from './Components/page';
import Animal from './Routes/project/animal';
import Luff from './Routes/project/luff';
import Sbrand from './Routes/project/sbrand';

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
                            <Route path="/project/luff" element={<Luff/>}/>
                            <Route path="/project/animal" element={<Animal/>}/>
                            <Route path="/project/sbrand" element={<Sbrand/>}/>
                        </>
                    )
                }
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
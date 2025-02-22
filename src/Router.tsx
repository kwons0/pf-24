import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Page from './Components/page';
import { isModalOpen } from './atom';
import Pf from './Routes/project/pf';
import Animal from './Routes/project/animal';
import Netflix from './Routes/project/netflix';
import Bestseller from './Routes/project/bestseller';
import { useRecoilValue } from 'recoil';
import Luff from './Routes/project/luff';

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
                            <Route path="/project/pf" element={<Pf/>}/>
                            <Route path="/project/netflix" element={<Netflix/>}/>
                            <Route path="/project/bestseller" element={<Bestseller/>}/>
                        </>
                    )
                }
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Pf from '../Routes/project/pf';
import Appjs from '../Routes/project/appjs';
import Netflix from '../Routes/project/netflix';
import Animal from '../Routes/project/animal';
import Bestseller from '../Routes/project/bestseller';
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atom";

const Overlay = styled(motion.div)`
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 99;
    background: rgba(0, 0, 0, 0.5); 
`
const ModalBox = styled(motion.div)<{isDark: boolean}>`
    position: fixed; left:50%; top: 50%;
    width: 85vw; max-width: 1000px; height: 90vh; z-index: 100; box-sizing: border-box; border-radius: 2rem;
    background: ${({theme, isDark}) => isDark ? theme.gray1 : "#fff"}; overflow-y: scroll;
`;

function Page(){
    const location = useLocation();
    const navigate = useNavigate();
    const { projectId } = useParams();
    const isDark = useRecoilValue(isDarkAtom)

    const onOverlayClick = () => {
        navigate('/')
    }

    const isModal = location.state?.modal;

    const renderProject = () => {
        switch ( projectId ) {
            case "pf": return <Pf/>;
            case "animal": return <Animal/>;
            case "netflix": return <Netflix/>;
            case "appjs": return <Appjs/>;
            case "bestseller": return <Bestseller/>;
            default: return null;
        }
    }


    return(
        <AnimatePresence>
            {
                isModal ? (
                    <>
                        <Overlay
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onOverlayClick}  
                        />
                        <ModalBox
                            isDark={isDark}
                            initial={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
                            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                            exit={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
                        >
                            {renderProject()}
                        </ModalBox>
                    </>
                ) : (
                    <div>{renderProject()}</div>
                )
            }
        </AnimatePresence>
    )
}
export default Page;
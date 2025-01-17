import { useLocation, useNavigate, useParams } from "react-router-dom";
import Pf from '../Routes/project/pf';
import Appjs from '../Routes/project/appjs';
import Netflix from '../Routes/project/netflix';
import Animal from '../Routes/project/animal';
import Bestseller from '../Routes/project/bestseller';
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const Overlay = styled(motion.div)`
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.5); z-index: 99;
`
const ModalBox = styled(motion.div)`
    position: fixed; left:50%; top: 50%;
    width: 80vw; height: 80vh; z-index: 100; box-sizing: border-box; border-radius: 2rem;
    background: ${(props)=>props.theme.gray1}; overflow: hidden;
`;

function Page(){
    const location = useLocation();
    const navigate = useNavigate();
    const { projectId } = useParams();

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
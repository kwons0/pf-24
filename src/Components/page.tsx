import { useLocation, useNavigate, useParams } from "react-router-dom";
import Animal from '../Routes/project/animal';
import styled, { useTheme } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atom";
import { CLOSE } from "../lib/svg";
import { breakpoints } from "../lib/constants";
import Luff from "../Routes/project/luff";
import Sbrand from "../Routes/project/sbrand";


const mediaTablet = `@media (max-width: ${breakpoints.tablet})`;

const ModalWrap = styled.div`position: relative;`
const Overlay = styled(motion.div)`
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 99;
    background: rgba(0, 0, 0, 0.5);
`
const ModalBox = styled(motion.div)<{isDark: boolean}>`
    position: fixed; left:50%; top: 50%;
    width: 85vw; max-width: 1000px; height: 90vh; z-index: 100; box-sizing: border-box; border-radius: 2rem;
    background: ${({theme, isDark}) => isDark ? theme.gray1 : "#fff"}; 
    overflow-y: scroll; -ms-overflow-style: none;
    &::-webkit-scrollbar{ display:none; }
    ${mediaTablet}{ width: 100vw; top: 55vh; border-radius: 1rem 1rem 0 0; }
`;
const CloseBtn = styled.span`
    display: inline-block; position: fixed; right:3vw; top: 5vh; 
    transform: translateY(-50%); z-index: 100; width: 30px; height: 30px; cursor: pointer;
    ${mediaTablet}{ right: 5vw; }
`

function Page(){
    const location = useLocation();
    const navigate = useNavigate();
    const { projectId } = useParams();
    
    const isDark = useRecoilValue(isDarkAtom)
    const theme = useTheme();

    const onOverlayClick = () => {
        navigate('/')
    }

    const isModal = location.state?.modal;

    const renderProject = () => {
        switch ( projectId ) {
            case "animal": return <Animal/>;
            case "sbrand": return <Sbrand/>;
            case "luff": return <Luff/>;
            default: return null;
        }
    }

    return(
        <AnimatePresence>
            <ModalWrap>
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
                        <CloseBtn onClick={onOverlayClick}><CLOSE color="#fff"/></CloseBtn>
                    </>
                ) : (
                    <>
                        <div>{renderProject()}</div>
                    </>
                )
            }
            </ModalWrap>
        </AnimatePresence>
    )
}
export default Page;
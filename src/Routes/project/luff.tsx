import styled from "styled-components";
import Cover from "../../Components/cover";
import { CAFE24 } from "../../lib/svg";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../../atom";
import { darkTheme, lightTheme } from "../../lib/theme";
import { breakpoints } from "../../lib/constants";
import { useEffect, useState } from "react";

const mediaTablet = `@media (max-width: ${breakpoints.tablet})`;

const ProjectBox = styled.div`
    position: relative;  -ms-overflow-style: none; overflow-x: hidden;
    &::-webkit-scrollbar { display: none; }
`
const GrayIcon = styled.img`filter: grayscale(1); width: auto; max-height: 16px;`

const Flex = styled.div<{align?: string, space?:string}>`
    display: flex; align-items:${(props)=>props.align || "flex-start"}; justify-content: ${(props)=>props.space};
    ${mediaTablet}{ display: block; }
`

const ImgFlexWrap = styled(Flex)<{pd?: string,mg?: string, wd?: string}>` position: relative;
    padding: ${(props) => props.pd}; margin: ${(props) => props.mg}; width: ${(props)=>props.wd};
    ${mediaTablet}{ width: 100%; }
`
const SpaceInTab = styled(ImgFlexWrap)<{wrap?: string}>` ${mediaTablet}{ display: flex !important; flex-wrap: ${(props)=>props.wrap};}`

function FindWindowWidth(){
    const [width, setWidth] = useState(window.innerWidth);
    useEffect( () => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize',handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[])
    return width;
}


function Luff(){
    const isDark = useRecoilValue(isDarkAtom)
    const iconColor = isDark ? darkTheme.textColor : lightTheme.textColor;

    const width = FindWindowWidth();
    const tabWidth = Number(breakpoints.tablet.split('px')[0])

    return(
        <ProjectBox>
            <Cover 
                group="개인 프로젝트"
                title="Luff 자사몰 리뉴얼"
                siteLink="https://luff.kr/" 
                githubLink="" 
                desc="라이프스타일 브랜드 ‘LUFF’는 일상 속 작은 즐거움과 실용성을 담은 제품을 선보입니다. 주로 가방과 북파우치를 제작하며, 심플하면서도 세련된 디자인이 특징입니다. 
                LUFF 대표님의 Pain Point를 해결하기 위해 자사몰 리뉴얼 프로젝트를 진행하게 되었습니다." 
                date="2024.3 ~ 2024.06, 3개월" 
                rate="기획 100%, 디자인 100%, 개발 100%"
                skills="HTML5, CSS3, Javascript" 
                preview="/asset/intro/list_luff.png"
                color="#E94F59"
            />
 
        {/* <SpaceInTab wrap="wrap" space="center" pd={width >= tabWidth ? "100px 10vw 0" : "100px 0 0"}> */}

        </ProjectBox>
    )
}
export default Luff;
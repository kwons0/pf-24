import styled from "styled-components";
import Cover from "../../Components/cover";
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

const Flex = styled.div<{align?: string, space?:string}>`
    display: flex; align-items:${(props)=>props.align || "flex-start"}; justify-content: ${(props)=>props.space};
    ${mediaTablet}{ display: block; }
`

const ImgFlexWrap = styled(Flex)<{pd?: string,mg?: string, wd?: string}>` position: relative;
    padding: ${(props) => props.pd}; margin: ${(props) => props.mg}; width: ${(props)=>props.wd};
    ${mediaTablet}{ width: 100%; }
`

function FindWindowWidth(){
    const [width, setWidth] = useState(window.innerWidth);
    useEffect( () => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize',handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[])
    return width;
}


function Sbrand(){
    const isDark = useRecoilValue(isDarkAtom)
    const iconColor = isDark ? darkTheme.textColor : lightTheme.textColor;

    const width = FindWindowWidth();
    const tabWidth = Number(breakpoints.tablet.split('px')[0])

    return(
        <ProjectBox>
            <Cover 
                group="협업 프로젝트(실무)"
                title="S사 자사몰 구축"
                siteLink="" 
                githubLink="" 
                desc="고도몰에서 카페24로의 플랫폼 이전을 진행하는 프로젝트입니다. 
                단순한 마이그레이션이 아닌 기존 사이트의 강점을 유지하면서도 새로운 플랫폼 환경에 최적화된 쇼핑몰을 구축하는 것을 목표로 진행했습니다." 
                date="2023.5 ~ 2023.08, 3개월" 
                rate="개발 100%"
                skills="HTML5, CSS3, Javascript" 
                preview="/asset/intro/list_sbrand.png"
                color="#6981af"
            />
 
        {/* <SpaceInTab wrap="wrap" space="center" pd={width >= tabWidth ? "100px 10vw 0" : "100px 0 0"}> */}

        </ProjectBox>
    )
}
export default Sbrand;
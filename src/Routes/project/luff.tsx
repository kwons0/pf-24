import styled from "styled-components";
import Cover from "../../Components/cover";
import { CAFE24 } from "../../Components/svg";
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
                bgimg="/asset/project/luff/pj3-cover.png" 
                favicon="/asset/project/luff/pj3-favi.svg"
                title="Luff 자사몰 리뉴얼"
                siteLink="https://luff.kr/" 
                githubLink="" 
                notionLink="https://www.notion.so/Luff-198f26733a5f80deacbddb221f8cd716?pvs=4" 
                desc="브랜드 Luff의 자사몰을 리뉴얼 하였습니다." 
                contents={ [ "검색 순위", "자사몰 혜택 강조", "UX 설계", "다양한 옵션 형태", "카테고리 구조화", "사이트 개인화" ] }
                date="2024.3 ~ 2024.06, 3개월" 
                rate="기획 100%, 디자인 100%, 개발 100%"
                skills="Javascript, CSS3" 
                icons={
                    [
                        { Component: GrayIcon, props: { src: "/asset/svg/javascript.svg" } },
                        { Component: GrayIcon, props: { src: "/asset/svg/css3.svg" } },
                        { Component: CAFE24, props: { color: iconColor } },
                    ]
                }
            />
 
        {/* <SpaceInTab wrap="wrap" space="center" pd={width >= tabWidth ? "100px 10vw 0" : "100px 0 0"}> */}

        </ProjectBox>
    )
}
export default Luff;
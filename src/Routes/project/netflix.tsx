import styled from "styled-components";
import Cover from "../../Components/cover";
import { breakpoints, darkTheme, lightTheme } from "../../theme";
import { STYLED_COMPONENTS } from "../../Components/svg";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../../atom";

const ProjectBox = styled.div`
    position: relative;  -ms-overflow-style: none; overflow-x: hidden;
    &::-webkit-scrollbar { display: none; }
`
const GrayIcon = styled.img`filter: grayscale(1); width: auto; max-height: 16px;`

const Contents = styled.div`margin: 50px 0 0;`
const Article = styled.div<{pd: string, wd?: string}>`
    line-height: 1.5; padding: ${(props) => props.pd}; width: ${(props)=>props.wd};
    > p{ font-size: 25px; padding-bottom: 20px;}
    @media (max-width: ${breakpoints.tablet}) { width: 100%; }
`
const Flex = styled.div<{space?:string}>`
    display: flex; align-items:flex-start; justify-content: ${(props)=>props.space};
    @media (max-width: ${breakpoints.tablet}) { display: block; }
`
const ImgWd = styled.img<{wd?: string, max?:string}>`
    width: ${(props)=>props.wd}; max-width: ${(props)=>props.max};
`
const ImgFlexWrap = styled(Flex)<{pd?: string,mg?: string, wd?: string}>` position: relative;
    padding: ${(props) => props.pd}; margin: ${(props) => props.mg}; width: ${(props)=>props.wd};
    @media (max-width: ${breakpoints.tablet}) { width: 100%; }
`


function Netflix(){
    const isDark = useRecoilValue(isDarkAtom)
    const iconColor = isDark ? darkTheme.textColor : lightTheme.textColor;

    return(
        <ProjectBox>
        <Cover 
            bgimg="/asset/project/pj4/pj4-cover.png" 
            favicon="/asset/project/pj4/pj4-favi.svg"
            title="넷플릭스 Clone"
            siteLink="https://stackblitz.com/edit/reactstudy-a18-blueprint-2vcbkd-uukbe7?file=README.md" 
            githubLink="" 
            notionLink="https://www.notion.so/Clone-192f26733a5f80afb8e2f15822810c5e?pvs=4" 
            desc="넷플릭스 사이트를 클론하였습니다." 
            contents={ [ "컴포넌트 공통 관리", "헤더 애니메이션", "팝업" ] }
            date="2024.11, 5일" 
            rate="기획 100%, 디자인 100%, 개발 100%"
            skills="Next.js, TypeScript, styled-components, Framer-motion" 
            icons={
                [
                    { Component: GrayIcon, props: { src: "/asset/svg/reactjs.svg" } },
                    { Component: GrayIcon, props: { src: "/asset/svg/typescript.svg" } },
                    { Component: STYLED_COMPONENTS, props: { color: iconColor } },
                    { Component: GrayIcon, props: { src: "/asset/svg/framer-motion.svg" } },
                  ]
            }
        />
        <Contents>
            <ImgFlexWrap pd="0 5vw" space="space-between">
                <ImgWd wd="32%" src="/asset/project/pj4/pj4-1.png"/>
                <ImgWd wd="32%" src="/asset/project/pj4/pj4-2.png"/>
                <ImgWd wd="32%" src="/asset/project/pj4/pj4-3.png"/>
            </ImgFlexWrap>
            <Article pd="35px 5vw">
                <p>효율적인 구조 설계</p>
                <div>페이지의 상태 관리, 데이터 패칭과 캐싱 작업을 해주어 페이지가 매끄럽게 작동하도록 돕는 기반을 만들어 주었고,<br/>
                    GlobalStyle로 웹사이트에 공통으로 적용될 전역 스타일을 정의하였습니다.<br/><br/>
                    Popular / Comming Soon / Now Playing 세 페이지는  동일한 UI와 기능을 제공하기 때문에 하나의 컴포넌트로 묶어 중복 코드를 줄이고 유지보수를 쉽게 만들었습니다.<br/>
                    동일한 UI이나 다르게 보여주어야 하는 부분은 prop으로 받아 맞춤형 콘텐츠를 제공하였습니다.
                </div>
            </Article>
            <ImgFlexWrap pd="50px 5vw" space="space-between">
                <ImgFlexWrap pd="0" mg="0 0 35px" wd="65%" space="space-between">
                    <ImgWd wd="49%" src="/asset/project/pj4/pj4-4.png"/>
                    <ImgWd wd="49%" src="/asset/project/pj4/pj4-5.png"/>
                </ImgFlexWrap>
                <Article pd="0" wd="30%">
                    <p>부드러운 애니메이션 처리</p>
                    <div>영화 목록과 모달 애니메이션은 framer-motion을 사용해 동적인 UI 효과를 더했습니다.<br/>
                    선택한 영화의 모달 창은 열리고 닫힐 때 layoutId와 AnimatePresence를 활용해 애니메이션이 자연스럽게 전환되도록 구현하였습니다.
                    </div>
                </Article>
            </ImgFlexWrap>
            <ImgFlexWrap pd="30px 5vw" space="space-between">
                <ImgFlexWrap wd="40%" pd="0 0 35px"><ImgWd src="/asset/project/pj4/pj4-6.png"/></ImgFlexWrap>
                <Article pd="0 0 100px 0" wd="55%">
                    <div>헤더의 네비게이션 바와 검색창에 부드럽고 자연스러운 애니메이션 효과를 추가했습니다.<br/>
                    스크롤 위치에 따라 헤더의 배경색이 동적으로 변경되게 하였으며, 검색창 열기/닫기 시 표시 여부와 이동 효과를 부드럽게 처리했습니다. 또, 현재 활성화된 페이지를 동적으로 감지하고, 해당 메뉴 아래에 빨간색 원형 강조 효과(Circle)를 자연스럽게 렌더링했습니다.
                    styled-components를 사용해 컴포넌트별 스타일을 깔끔하게 분리하고 재사용 가능하게 작성하고 코드의 가독성을 높였습니다.
                    </div>
                </Article>
            </ImgFlexWrap>
        </Contents>
        </ProjectBox>
    )
}
export default Netflix;
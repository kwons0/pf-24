import styled from "styled-components";
import Cover from "../../Components/cover";
import { STYLED_COMPONENTS } from "../../Components/svg";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../../atom";
import { breakpoints, darkTheme, lightTheme } from "../../theme";
import { useEffect, useState } from "react";


const mediaTablet = `@media (max-width: ${breakpoints.tablet})`;

const ProjectBox = styled.div`
    position: relative;  -ms-overflow-style: none; overflow-x: hidden;
    &::-webkit-scrollbar { display: none; }
`
const GrayIcon = styled.img`filter: grayscale(1); width: auto; max-height: 16px; `

const Contents = styled.div`margin: 50px 0 0;`
const Article = styled.div<{pd: string, wd?: string, mg?: string}>`
    line-height: 1.5; padding: ${(props) => props.pd}; margin: ${(props) => props.mg};  width: ${(props)=>props.wd}; text-align: left;
    > p{ font-size: 25px; padding-bottom: 20px;}
    ${mediaTablet}{ width: 100%; }
`
const Flex = styled.div<{align?: string, space?:string}>`
    display: flex; align-items:${(props)=>props.align || "flex-start"}; justify-content: ${(props)=>props.space};
    ${mediaTablet}{ display: block; }
`
const ImgWd = styled.img<{wd?: string, max?:string, mg?: string}>`
    width: ${(props)=>props.wd}; max-width: ${(props)=>props.max}; margin:${(props)=>props.mg} ;
`
const ImgFlexWrap = styled(Flex)<{pd?: string,mg?: string, wd?: string}>` position: relative;
    padding: ${(props) => props.pd}; margin: ${(props) => props.mg}; width: ${(props)=>props.wd};
    ${mediaTablet}{ width: 100%; }
`

const Reverse = styled(ImgFlexWrap)`
    ${mediaTablet}{ 
        display: flex; flex-direction: column;
        & > *:nth-child(1){ order: 2;};
        & > *:nth-child(2){ order: 1;};
     }
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

function Pf(){
    const isDark = useRecoilValue(isDarkAtom)
    const iconColor = isDark ? darkTheme.textColor : lightTheme.textColor;

    const width = FindWindowWidth();
    const tabWidth = Number(breakpoints.tablet.split('px')[0])

    return(
        <ProjectBox>
            <Cover 
                bgimg="/asset/project/pj1/pj1-cover.png" 
                favicon="/asset/project/pj1/pj1-favi.svg"
                title="2025.Portfolio"
                siteLink="" 
                githubLink="https://github.com/kwons0/pf-24" 
                notionLink="https://www.notion.so/2025-Portfolio-198f26733a5f8073a72ac22c1c9f3d86?pvs=4" 
                desc="2025년 작성된 포트폴리오 입니다." 
                contents={ [ "언어 구성", "상태 관리", "반응형 설계", "컴포넌트 재사용" ] }
                date="2025.1 ~ 2024.02, 1개월" 
                rate="기획 100%, 디자인 100%, 개발 100%"
                skills="React.js, TypeScript, styled-components, Framer-motion" 
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
                <ImgFlexWrap space="space-between" align="flex-end" mg="100px 0 0 0">
                    <ImgFlexWrap wd="60%">
                        <ImgWd wd="49%" mg="0 2% 0 0" src="/asset/project/pj1/pj1-1.png"/>
                        <ImgWd wd="49%" src="/asset/project/pj1/pj1-2.png"/>
                    </ImgFlexWrap>
                    <Article pd={width >= tabWidth ? "20px 5vw 0 0": "20px 5vw"} wd="35%">
                        <p>언어 구성</p>
                        <div>페이지는 인터랙티브한 UI로 구성하려 했기 때문에 SPA 개발에 최적화된 React.js 라이브러리를 사용하였습니다.<br/>
                        반응형과 라이트/다크 모드 구성을 위해  props를 받아서 동적으로 스타일링이 가능한 CSS-in-JS 방식의 Styled-components를 채택하였습니다. 자연스러운 fade-up 기능과 모달 기능을 위해 framer-motion을 함께 사용하였습니다.</div>
                    </Article>
                </ImgFlexWrap>
                <div>
                    <ImgFlexWrap wd="70%" mg="100px auto 0"><ImgWd src="/asset/project/pj1/pj1-3.png"/></ImgFlexWrap>
                    <Article pd={width >= tabWidth ? "40px 0 0 0": "40px 5vw"} wd="70%" mg="0 auto">
                        <p>인트로</p>
                        <div>* 연도별 Mimoji<br/>2015년, 2019년, 2021년 각 시기의 저를 미모지로 표현해 보았습니다. 당시 활동했던 분야와 사용했던 프로그램들을 강조하기 위해, 노트북에 해당 로고 스티커를 부착하여 직관적으로 전달할 수 있도록 디자인했습니다.</div>
                    </Article>
                </div>
                <ImgFlexWrap space="space-between" align="center" mg="100px 0 0 0">
                    <ImgFlexWrap wd="70%"><ImgWd wd={width >= tabWidth ? "100%" : "140%"} mg={width >= tabWidth ? "0 0 0 -10%" : "0 0 0 -20%"} src="/asset/project/pj1/pj1-4.png"/></ImgFlexWrap>
                    <Article pd={ width >= tabWidth ? "0 5vw 0 0" : "40px 5vw"} wd="35%">
                        <div>* 배경 이미지<br/>디자인 경험을 갖춘 개발자로서의 타이틀을 강조하기 위해, 직접 디자인하고 개발까지 100% 완료한 프로젝트의 일부 디자인을 배경으로 활용했습니다.<br/>
                        스크롤할 때 자연스럽게 드러나도록 구성하여, 화면을 탐색하면서도 제가 작업한 디자인을 직관적으로 암시할 수 있도록 했습니다.</div>
                    </Article>
                </ImgFlexWrap>
                <Reverse space="space-between" align="flex-end" pd="100px 5vw 0">
                    <Article pd="40px 0 0" wd="45%">
                        <p>상태 관리</p>
                        <div>다크/라이트 모드는 Recoil의 Atom(전역 상태 저장소)을 활용하여 관리됩니다. 테마 변경 시 ThemeProvider를 사용하여 테마를 적용하도록 구성했습니다. 이를 통해 사용자가 모드를 변경하면 즉시 UI에 반영됩니다.</div>
                    </Article>
                    <ImgFlexWrap wd="40%"><ImgWd src="/asset/project/pj1/pj1-5.png"/></ImgFlexWrap>
                </Reverse>
                <Reverse space="space-between" pd="50px 5vw 0">
                    <Article pd="0" wd="45%">
                        <div>프로젝트 링크를 클릭하면 모달을 활성화하고 해당 프로젝트 내용을 표시합니다. 반대로, 일반적인 라우팅에서는 모달을 닫고 개별적인 페이지로 이동합니다.<br/>
                            전역 상태를 통해 모달이 열려 있는지(프로젝트를 보고있는지) 체크하여 프로젝트를 모달로 띄울지, 일반 페이지로 이동할지 결정하였습니다. <br/>
                            이를 통해 모달 내에서 직접 접근한 경우와 URL을 통해 접근한 경우의 동작을 일관성 있게 유지하면서도, 사용자가 원하는 방식으로 정보를 확인할 수 있도록 했습니다.</div>
                    </Article>
                    <div style={{width: width >= tabWidth ? "40%" : "100%"}}>
                        <ImgWd mg="0 0 4% 0" src="/asset/project/pj1/pj1-6.png"/>
                        <ImgWd src="/asset/project/pj1/pj1-7.png"/>
                    </div>
                </Reverse>
                <div>
                    <ImgFlexWrap pd="100px 5vw 0"><ImgWd src="/asset/project/pj1/pj1-8.png"/></ImgFlexWrap>
                    <Article pd="40px 5vw 0">
                        <p>컴포넌트 재사용</p>
                        <div>모달 상단에 표시되는 프로젝트 내용은 공통적인 부분이 있어, 이를 공통 컴포넌트로 구현했습니다. 각 프로젝트에 맞는 정보만 props로 전달하면, 페이지가 일관되게 구성되도록 했습니다. 이렇게 구현함으로써 코드의 재사용성을 높였고, 다양한 프로젝트에 쉽게 적용할 수 있도록 했습니다.</div>
                    </Article>
                </div>
                <div>
                    <Flex style={{margin: width >= tabWidth ? "100px 0 0 -10%" : "100px 0 0", width: width >= tabWidth ? "120%": "100%"}} space="space-between">
                        <ImgWd mg={width >= tabWidth ? "0" : "0 5% 5% 0"} wd={width >= tabWidth ? "16%" : "30%"} src="/asset/project/pj1/pj1-10-1.png"/>
                        <ImgWd mg={width >= tabWidth ? "0" : "0 5% 5% 0"} wd={width >= tabWidth ? "16%" : "30%"} src="/asset/project/pj1/pj1-10-2.png"/>
                        <ImgWd mg={width >= tabWidth ? "0" : "0 0 5% 0"} wd={width >= tabWidth ? "16%" : "30%"} src="/asset/project/pj1/pj1-10-3.png"/>
                        <ImgWd mg={width >= tabWidth ? "0" : "0 5% 5% 0"} wd={width >= tabWidth ? "16%" : "30%"} src="/asset/project/pj1/pj1-10-4.png"/>
                        <ImgWd mg={width >= tabWidth ? "0" : "0 5% 5% 0"} wd={width >= tabWidth ? "16%" : "30%"} src="/asset/project/pj1/pj1-10-5.png"/>
                        <ImgWd mg={width >= tabWidth ? "0" : "0 0 5% 0"} wd={width >= tabWidth ? "16%" : "30%"} src="/asset/project/pj1/pj1-10-6.png"/>
                    </Flex>
                    <Article pd={width >= tabWidth ?"40px 0 100px": "40px 5vw"} wd="70%" mg="0 auto">
                        <p>반응형 설계</p>
                        <div>반응형 설계를 적용하여 다양한 화면 크기와 디바이스에서 최적화된 사용자 경험을 제공할 수 있도록 했습니다. 단순히 사이즈를 줄이는 것에 그치지 않고, 모바일과 태블릿에서는 화면 크기에 맞는 레이아웃으로 변경하여 사용자가 각 디바이스에서 더 나은 탐색 경험을 할 수 있도록 했습니다.</div>
                    </Article>
                </div>


            </Contents>

        </ProjectBox>
    )
}
export default Pf;
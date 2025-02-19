import styled from "styled-components";
import Cover from "../../Components/cover";
import { CAFE24 } from "../../Components/svg";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../../atom";
import { breakpoints, darkTheme, lightTheme } from "../../theme";
import { useEffect, useState } from "react";


const mediaTablet = `@media (max-width: ${breakpoints.tablet})`;

const ProjectBox = styled.div`
    position: relative;  -ms-overflow-style: none; overflow-x: hidden;
    &::-webkit-scrollbar { display: none; }
`
const GrayIcon = styled.img`filter: grayscale(1); width: auto; max-height: 16px;`

const Contents = styled.div`margin: 50px 0 0;`
const Article = styled.div<{pd: string, wd?: string}>`
    line-height: 1.5; padding: ${(props) => props.pd}; width: ${(props)=>props.wd}; text-align: left;
    > p{ font-size: 25px; padding-bottom: 20px;}
    ${mediaTablet}{ width: 100%; }
`
const Flex = styled.div<{align?: string, space?:string}>`
    display: flex; align-items:${(props)=>props.align || "flex-start"}; justify-content: ${(props)=>props.space};
    ${mediaTablet}{ display: block; }
`
const ImgWd = styled.img<{wd?: string, max?:string, mg?: string}>`
    width: ${(props)=>props.wd}; max-width: ${(props)=>props.max}; margin:${(props)=>props.mg} ;
    border: 1px solid ${(props)=>props.theme.gray1};
`
const VideoWd = styled.video`width: 100%;`

const ImgFlexWrap = styled(Flex)<{pd?: string,mg?: string, wd?: string}>` position: relative;
    padding: ${(props) => props.pd}; margin: ${(props) => props.mg}; width: ${(props)=>props.wd};
    ${mediaTablet}{ width: 100%; }
`
const SpaceInTab = styled(ImgFlexWrap)<{wrap?: string}>` ${mediaTablet}{ display: flex !important; flex-wrap: ${(props)=>props.wrap};}`

const Annotation = styled.div<{wd?: string, max?:string, mg?: string}>`
    width: ${(props)=>props.wd}; max-width: ${(props)=>props.max}; margin:${(props)=>props.mg};
    > p{ color: ${(props)=>props.theme.gray3}; font-size: 15px; line-height: 1; padding: 5px 0 15px 5px;}
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


function Luff(){
    const isDark = useRecoilValue(isDarkAtom)
    const iconColor = isDark ? darkTheme.textColor : lightTheme.textColor;

    const width = FindWindowWidth();
    const tabWidth = Number(breakpoints.tablet.split('px')[0])

    return(
        <ProjectBox>
            <Cover 
                bgimg="/asset/project/pj3/pj3-cover.png" 
                favicon="/asset/project/pj3/pj3-favi.svg"
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
            <Contents>
                <SpaceInTab space="flex-end" mg="10% 0 0">
                    <Annotation wd={width >= tabWidth ? "40%": "50%"} mg="0 2% 0 0"><ImgWd src="/asset/project/pj3/pj3-1-1.png"/><p>as-is</p></Annotation>
                    <Annotation wd={width >= tabWidth ? "40%": "50%"}><ImgWd src="/asset/project/pj3/pj3-1-2.png"/><p>to-be</p></Annotation>
                </SpaceInTab>
                <ImgFlexWrap space="space-between" pd="5% 5vw 0">
                    <SpaceInTab wd="55%">
                        <Annotation mg="0 2% 0 0"><ImgWd src="/asset/project/pj3/pj3-1-3.png"/><p>as-is</p></Annotation>
                        <Annotation><ImgWd src="/asset/project/pj3/pj3-1-4.png"/><p>to-be</p></Annotation>
                    </SpaceInTab>
                    <Article pd={width >= tabWidth ? "0" : "40px 0 0"} wd="40%">
                        <p>개요</p>
                        <div>라이프스타일 브랜드 ‘LUFF’는 일상 속 작은 즐거움과 실용성을 강조한 제품을 선보이고 있습니다. 주로 가방과 북파우치를 제작하며, 심플하면서도 세련된 디자인이 특징입니다.<br/><br/>
                        하지만 ‘LUFF’ 담당자는 플랫폼의 높은 수수료로 인해 고민이 많았습니다. 입점 플랫폼은 높은 접근성과 노출 효과를 제공하지만, 수수료 부담이 커 실질적인 이익이 줄어드는 문제가 있었습니다. 특히 기획전에 참여할 경우, 추가 할인과 수수료로 인해 남는 이윤이 상당히 적은 상황이었습니다.<br/><br/>
                        이러한 고민 속에서 Meta 광고를 활용해 자사몰로 직접 유입을 유도하고 있다는 점을 인지하게 되었습니다. 또한, 자사몰 가입 시 카카오 플러스친구 메시지를 보낼 수 있는 장점이 있다는 점도 발견했습니다. 이에 따라, 자사몰 구매 전환율을 높이기 위한 ‘LUFF 자사몰 리뉴얼 프로젝트’를 시작하게 되었습니다.
                        </div>
                    </Article>
                </ImgFlexWrap>
                <div>
                    <ImgWd src="/asset/project/pj3/pj3-2.png" mg="100px 0 0"/>
                    <Article pd="40px 10%" wd="100%">
                        <p>구글 오가닉 검색 순위 높이기</p>
                        <div>당시 ‘LUFF’의 자사몰은 반응형이 아니라 모바일과 PC에서 각각 다른 도메인을 사용하고 있었습니다. 이로 인해 구글 오가닉 검색에서 별도의 URL로 인식되어 검색 카운트가 분산되는 문제가 발생했습니다.<br/>
                            이에 ‘LUFF’는 자사몰을 반응형으로 전환하고, 모바일과 PC에서 동일한 도메인을 사용하도록 개선했습니다. 그 결과, 구글 검색에서 플랫폼보다 자사몰이 더 높은 순위를 차지하는 성과를 얻을 수 있었습니다.
                        </div>
                    </Article>
                </div>
                <div>
                    <SpaceInTab wrap="wrap" space="space-between" align="flex-end" pd="100px 5vw 0">
                        <Annotation wd={width >= tabWidth ? "32%" : "100%"}>
                            <ImgWd src="/asset/project/pj3/pj3-3-1.png"/>
                            <ImgWd src="/asset/project/pj3/pj3-3-2.png"/>
                            <p>페이지 상단 띠배너</p>
                        </Annotation>
                        <Annotation wd={width >= tabWidth ? "32%" : "49%"}><ImgWd src="/asset/project/pj3/pj3-3-3.png"/><p>햄버거 상단</p></Annotation>
                        <Annotation wd={width >= tabWidth ? "32%" : "49%"}><ImgWd src="/asset/project/pj3/pj3-3-4.png"/><p>간편 회원가입</p></Annotation>
                    </SpaceInTab>
                    <Article pd="25px 5vw" wd="100%">                    
                        <p>자사몰 혜택 강조하기</p>
                        <div>자사몰의 구매 비중을 높이기 위해, 소비자에게 자사몰에서 구매해야 하는 이유를 명확히 전달해야 했습니다. 이를 위해 플러스 친구 추가 혜택과 회원가입 시 적립금 혜택을 개선하고, 자사몰 곳곳에 혜택 관련 정보를 배치했습니다.</div>
                    </Article>
                </div>
                <div>
                    <SpaceInTab wrap="wrap" pd="40px 5vw 0" space="space-between">
                        <div style={ width >= tabWidth ?  {width:"32%"} : {width: "100%"}}>
                            <Annotation><ImgWd src="/asset/project/pj3/pj3-4-1.png"/></Annotation>
                            <Annotation><ImgWd src="/asset/project/pj3/pj3-4-2.png"/><p>상품 상세, 비회원/회원</p></Annotation>
                        </div>
                        <Annotation wd={width >= tabWidth ? "32%": "49%"}><ImgWd src="/asset/project/pj3/pj3-4-3.png"/><p>장바구니, 비회원</p></Annotation>
                        <Annotation wd={width >= tabWidth ? "32%": "49%"}><ImgWd src="/asset/project/pj3/pj3-4-4.png"/><p>장바구니, 회원</p></Annotation>
                    </SpaceInTab>
                    <SpaceInTab wrap="wrap" space="center" pd={width >= tabWidth ? "0": "0 5vw"}>
                        <Annotation wd={width >= tabWidth ? "32%": "49%"} mg="0 2% 0 0"><ImgWd src="/asset/project/pj3/pj3-4-5.png"/><p>상품 상세 옵션 선택 시, 비회원</p></Annotation>
                        <Annotation wd={width >= tabWidth ? "32%": "49%"}><ImgWd src="/asset/project/pj3/pj3-4-6.png"/><p>상품 상세 리뷰 작성 유도</p></Annotation>
                    </SpaceInTab>
                    <Article pd="25px 5vw" wd="100%">
                        <div>특히 소비자가 가장 많이 접속하는 [상품 상세 페이지]와 [장바구니 페이지]에서는 회원과 비회원의 혜택을 구분하여 노출하도록 했습니다. 비회원에게는 상품 옵션을 선택할 때, 선택한 금액에서 2,000원 할인된 금액을 직관적으로 표시하여 회원 가입을 유도했습니다. 회원에게는 회원 등급에 맞춰 적립금을 명확히 표기해 주었습니다.<br/>
                        또한, luff의 소비자들이 다른 사람의 리뷰를 많이 참고하여 구매하는 경향이 있기 때문에, 첫 리뷰 작성 시 +2,000원 혜택을 강조하고, 베스트 리뷰 선정 시 +30,000원 혜택도 함께 표시했습니다.
                        </div>
                    </Article>
                </div>
                <ImgFlexWrap space="space-between" align="flex-end" mg="100px 0 0 0">
                    <SpaceInTab wd="60%" space="space-between">
                        <Annotation wd="32%"><ImgWd src="/asset/project/pj3/pj3-5-1.png"/><p>luff 메인 페이지</p></Annotation>
                        <ImgWd wd="32%" src="/asset/project/pj3/pj3-5-2.png"/>
                        <ImgWd wd="32%" src="/asset/project/pj3/pj3-5-3.png"/>
                    </SpaceInTab>
                    <Article pd={width >= tabWidth ?"0 5vw 35px 0": "40px 5vw 0"} wd="35%">
                        <p>UX 설계하기</p>
                        <div>기존 luff의 메인 페이지는 메인 배너와 상품 나열로만 구성되어 있었습니다. 저는 메인 페이지를 자사몰의 얼굴이라고 생각하여, 다양한 흐름에 맞춰 배치를 시도했습니다.<br/><br/>
                            1. 오른손 유저에 맞춘 헤더 우측 햄버거 배치<br/>
                            2. 페이지 첫 번째 메인 배너로 주력 상품 및 혜택 각인<br/>
                            3. 카테고리 별 베스트 상품 노출<br/>
                            4. 상품을 인지 시켰으니 배너로 혜택 노출<br/>
                            5. 특정 상품 스토리 텔링 및 상품 노출<br/>
                            6. 릴스 형식으로 gif 구성 및 상품 연결<br/>
                            7. 신상품 노출<br/><br/>
                            특히 스토리텔링과 릴스 형식의 콘텐츠는 luff의 인스타그램에서 보여주는 브랜드 고유의 운영 방식과 이야기를 잘 담아내어, luff의 매력을 효과적으로 전달할 수 있다고 생각하여 추가 구성하였습니다.
                        </div>
                    </Article>
                </ImgFlexWrap>

                <div>
                    <SpaceInTab space="center" mg="40px auto 0;">
                        <Annotation wd={width >= tabWidth ? "32%": "100%"} mg="0 2% 0 0"><ImgWd src="/asset/project/pj3/pj3-6-1.png"/><p>상세 페이지 as-is</p></Annotation>
                        <Annotation wd={width >= tabWidth ? "32%": "100%"}><ImgWd src="/asset/project/pj3/pj3-6-2.png"/><p>상세 페이지 to-be</p></Annotation>
                    </SpaceInTab>
                    <Article pd={width >= tabWidth ? "40px 17%" : "40px 5vw"}>
                        <div>[상품 상세 페이지] 상단에는 상품 상세 이미지를 빠르게 확인할 수 있도록 페이지 길이를 단축하고, 구매하기 버튼과 옵션 선택 영역을 페이지 하단에 플로팅시켰습니다. 이를 통해 상품 상세 페이지를 확인하는 동안에도 중간에 옵션 선택이 가능해져 사용자 편의성이 향상되었습니다.</div>
                    </Article>
                </div>
                <div>
                    <SpaceInTab wrap="wrap" pd={width >= tabWidth ? "100px 0 0" : "100px 5vw 0"} space="space-between">
                        <div style={ width >= tabWidth ?  {width:"32%"} : {width: "49%"}}>
                            <Annotation><ImgWd src="/asset/project/pj3/pj3-7-1.png"/><p>단일 선택 형</p></Annotation>
                            <Annotation><ImgWd src="/asset/project/pj3/pj3-7-2.png"/><p>이미지형</p></Annotation>
                        </div>
                        <div style={ width >= tabWidth ?  {width:"32%"} : {width: "49%"}}>
                            <Annotation><ImgWd src="/asset/project/pj3/pj3-7-3.png"/><p>옵션 선택 형</p></Annotation>
                            <Annotation><ImgWd src="/asset/project/pj3/pj3-7-4.png"/><p>버튼 선택 형</p></Annotation>
                        </div>
                        <Annotation wd={ width >= tabWidth ? "32%" : "49%"}><ImgWd src="/asset/project/pj3/pj3-7-5.png"/><p>추가 구성 상품</p></Annotation>
                    </SpaceInTab>
                    <Article pd="40px 5vw">
                        <p>다양한 옵션 형태</p>
                        <div>
                            상품군이 다양하기 때문에, 상품 특성에 맞춰 더 쉽게 옵션을 선택할 수 있도록 다양한 형태의 옵션 선택을 개발했습니다.<br/>
                            예를 들어, 색상을 선택하는 제품은 [라임], [레드], [블랙]과 같은 텍스트형 옵션보다 컬러칩을 사용하여 구성함으로써 소비자가 더 직관적으로 선택할 수 있도록 했습니다.<br/>
                            이러한 방식은 각 상품의 특성에 맞게 적용되어, 사용자 경험을 개선하는 데 도움을 주었습니다.
                        </div>
                    </Article>
                </div>
                <ImgFlexWrap space="space-between" align="flex-end" mg="100px 0 0 0">
                    <SpaceInTab wd="60%" space="space-between">
                        <Annotation mg="0 3% 0 0"><ImgWd src="/asset/project/pj3/pj3-8-1.png"/><p>as-is</p></Annotation>
                        <Annotation><ImgWd src="/asset/project/pj3/pj3-8-2.png"/><p>to-be</p></Annotation>
                    </SpaceInTab>
                    <Article pd={width >= tabWidth ? "0 5vw 35px 0" : "40px 5vw 0"} wd="35%">
                        <p>카테고리 구조화</p>
                        <div>기존 luff의 카테고리는 1뎁스로만 구성되어 있어 다양한 상품군을 효과적으로 분류하는 데 한계가 있었습니다. 이를 개선하기 위해 카테고리 구조를 3뎁스로 확장하여 보다 체계적이고 직관적인 탐색이 가능하도록 개편하였습니다.<br/>
                        포인트 dot으로 주요 상품을 강조하고 STOCKIST를 추가해 매장 입점 정보를 효과적으로 전달할 수 있도록 구성하였습니다.
                        </div>
                    </Article>
                </ImgFlexWrap>

                <div>
                    <SpaceInTab wrap="wrap" space="center" pd={width >= tabWidth ? "100px 10vw 0" : "100px 0 0"}>
                        <Annotation wd={width >= tabWidth ?"32%":"43%"} mg="0 3% 0 0"><ImgWd src="/asset/project/pj3/pj3-9-1.png"/><p>메인</p></Annotation>
                        <Annotation wd={width >= tabWidth ?"32%":"43%"} mg={width >= tabWidth ?"0 3% 0 0":"0"}><ImgWd src="/asset/project/pj3/pj3-9-2.png"/><p>검색창</p></Annotation>
                        <Annotation wd={width >= tabWidth ?"32%":"43%"}><ImgWd src="/asset/project/pj3/pj3-9-3.png"/><p>검색 결과</p></Annotation>
                    </SpaceInTab>
                    <Article pd="25px 10vw">
                        <p>어디서든 상품으로 접근이 가능하게</p>
                        <div>햄버거 메뉴뿐만 아니라 헤더의 GNB 영역과 검색창에서도 원하는 카테고리에 쉽게 접근할 수 있도록 개선했습니다. 또한, 검색 결과가 없을 경우에도 단순히 "검색 결과 없음"으로 끝나는 것이 아니라, 관련 카테고리로 이동하여 상품을 확인할 수 있도록 유도하였습니다. 이를 통해 사용자는 보다 직관적으로 상품을 탐색할 수 있으며, 원하는 제품을 찾지 못하더라도 자연스럽게 쇼핑을 이어갈 수 있도록 설계하였습니다.</div>
                    </Article>
                </div>

                <ImgFlexWrap space="space-between"  mg="100px 0 0 0">
                    <SpaceInTab wd="60%" space="space-between">
                        <Annotation mg="0 3% 0 0"><ImgWd src="/asset/project/pj3/pj3-10-1.png"/><p>as-is</p></Annotation>
                        <Annotation><ImgWd src="/asset/project/pj3/pj3-10-2.png"/><p>to-be</p></Annotation>
                    </SpaceInTab>
                    <Article pd={ width >= tabWidth ? "0 5vw 0 0" : "0 5vw"} wd="35%">
                        <p>이미지형 레이아웃</p>
                        <div>상품 분류 페이지에서는 각 카테고리에 포함된 상품군을 한눈에 파악할 수 있도록 이미지형 레이아웃으로 구성했습니다. 각 카테고리의 대표 이미지를 활용하여 직관적인 탐색이 가능하도록 했으며, 이미지 하단에는 2뎁스 카테고리를 배치하여 사용자가 원하는 세부 카테고리로 쉽게 이동할 수 있도록 설계했습니다. <br/><br/>
                        또한, 스크롤을 내릴 때 현재 위치한 1뎁스 카테고리 이름이 자연스럽게 노출되도록 하여, 사용자가 어느 카테고리에 위치해 있는지 명확하게 인지할 수 있도록 개선하였습니다.
                        </div>
                    </Article>
                </ImgFlexWrap>
                <Annotation mg="40px auto 0" wd={width >= tabWidth ? "50%": "100%"}>
                    <VideoWd src="/asset/project/pj3/pj3-video.mov" controls autoPlay muted loop/>
                    <p>상품 분류 페이지 스크롤 시</p>
                </Annotation>
            </Contents>

            <div>
                <SpaceInTab space="center" pd="100px 0 0" wd="80%" mg="0 auto">
                    <Annotation mg="0 3% 0 0"><ImgWd src="/asset/project/pj3/pj3-11-1.png"/><p>as-is</p></Annotation>
                    <Annotation><ImgWd src="/asset/project/pj3/pj3-11-2.png"/><p>to-be</p></Annotation>
                </SpaceInTab>
                <Article pd={width >= tabWidth ? "25px 10% 100px" : "25px 5vw 100px"}>
                    <p>개인화된 마이페이지</p>
                    <div>기존 마이페이지는 간단한 메뉴만 제공하여 정보 접근성이 다소 제한적이었습니다. 이를 개선하여 개인화된 정보 제공과 쇼핑 편의성 강화에 중점을 두고 개편을 진행했습니다.<br/>
                    * 기존의 단순한 텍스트 중심에서 벗어나, 회원 이름과 등급을 표시하여 개인화된 경험을 제공했습니다.<br/>
                    * 회원 등급과 함께 "등급 혜택 보기" 버튼을 추가하여, 등급별 혜택을 쉽게 확인할 수 있도록 개선했습니다.<br/>
                    * 기존에는 단순한 주문 내역만 확인할 수 있었던 반면, 새롭게 "주문배송 조회 (최근 3개월 기준)"을 추가하여 입금 전, 배송 준비 중, 배송 중, 배송 완료, 취소/교환/반품 내역을 한눈에 확인할 수 있도록 개선했습니다.</div>
                </Article>
            </div>

        </ProjectBox>
    )
}
export default Luff;
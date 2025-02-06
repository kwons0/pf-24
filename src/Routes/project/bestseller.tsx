import styled from "styled-components";
import Cover from "../../Components/cover";
import { NEXTJS, VERCEL } from "../../Components/svg";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../../atom";
import { breakpoints, darkTheme, lightTheme } from "../../theme";

const ProjectBox = styled.div`
    position: relative;  -ms-overflow-style: none; overflow-x: hidden;
    &::-webkit-scrollbar { display: none; }
`
const GrayIcon = styled.img`filter: grayscale(1); width: auto; max-height: 16px;`

const Contents = styled.div`margin: 50px 0 0;`
const Article = styled.div<{pd: string, wd?: string}>`
    line-height: 1.5; padding: ${(props) => props.pd}; width: ${(props)=>props.wd}; text-align: left;
    > p{ font-size: 25px; padding-bottom: 20px;}
    @media (max-width: ${breakpoints.tablet}) { width: 100%; }
`
const Flex = styled.div<{align?: string, space?:string}>`
    display: flex; align-items:${(props)=>props.align || "flex-start"}; justify-content: ${(props)=>props.space};
    @media (max-width: ${breakpoints.tablet}) { display: block; }
`
const ImgWd = styled.img<{wd?: string, max?:string, mg?: string}>`
    width: ${(props)=>props.wd}; max-width: ${(props)=>props.max}; margin:${(props)=>props.mg} ;
`
const ImgWd1 = styled(ImgWd)`margin: 30px 0 0 -10%; 
    @media (max-width: ${breakpoints.tablet}) { display:none;}
`
const ImgWd2 = styled(ImgWd)`margin: 0 0 0 0; 
    @media (max-width: ${breakpoints.tablet}) { margin: 0 0 1% 0; width: 49.5%;}
`
const ImgWd3 = styled(ImgWd)`margin: 40px 0 0 0; 
    @media (max-width: ${breakpoints.tablet}) { margin: 0 0 1% 0; width: 49.5%;}
`
const ImgWd4 = styled(ImgWd)`margin: 20px 0 0 0; 
    @media (max-width: ${breakpoints.tablet}) { margin: 0 0 1% 0; width: 49.5%;}
`
const ImgWd5 = styled(ImgWd)`margin-right: -10%; 
    @media (max-width: ${breakpoints.tablet}) { margin: 0 0 1% 0; width: 49.5%;}
`

const ImgFlexWrap = styled(Flex)<{pd?: string,mg?: string, wd?: string}>` position: relative;
    padding: ${(props) => props.pd}; margin: ${(props) => props.mg}; width: ${(props)=>props.wd};
    @media (max-width: ${breakpoints.tablet}) { width: 100%; }
`
const ImgFlexWrapCol = styled(ImgFlexWrap)`flex-direction: column;`
const ImgGalleryWrap = styled.div<{pd?: string,mg?: string, wd?: string}>` position: relative;
    display: flex; align-items: flex-start; justify-content: space-between;
    padding: ${(props) => props.pd}; margin: ${(props) => props.mg}; width: ${(props)=>props.wd};
    @media (max-width: ${breakpoints.tablet}) { width: 100%; flex-wrap: wrap; }
`


function Bestseller(){
    const isDark = useRecoilValue(isDarkAtom)
    const iconColor = isDark ? darkTheme.textColor : lightTheme.textColor;

    return(
        <ProjectBox>
        <Cover 
            bgimg="/asset/project/pj4/pj4-cover.png" 
            favicon="/asset/project/pj4/pj4-favi.svg"
            title="The New York Times Best Seller"
            siteLink="https://nextjs-bestseller-two.vercel.app/" 
            githubLink="https://github.com/kwons0/bestSeller" 
            notionLink="https://www.notion.so/The-New-York-Times-Best-Seller-192f26733a5f80ae8c45d114899321fc?pvs=4" 
            desc="베스트셀러 책을 리스트별로 살펴볼 수 있는 사이트 입니다." 
            contents={ [ "API", "슬라이드" ] }
            date="2024.11, 1일" 
            stacks="Next.Js, CSS3" 
            icons={
                [
                    { Component: NEXTJS, props: { color: iconColor } },
                    { Component: GrayIcon, props: { src: "/asset/svg/css3.svg" } },
                    { Component: VERCEL, props: { color: iconColor } },
                  ]
            }
        />
        <Contents>
            <div>
                <ImgGalleryWrap pd="50px 0 0">
                    <ImgWd1 wd="22%" src="/asset/project/pj4/pj4-1.png"/>
                    <ImgWd2 wd="22%" src="/asset/project/pj4/pj4-2.png"/>
                    <ImgWd3 wd="22%" src="/asset/project/pj4/pj4-3.png"/>
                    <ImgWd4 wd="22%" src="/asset/project/pj4/pj4-4.png"/>
                    <ImgWd5 wd="22%" src="/asset/project/pj4/pj4-5.png"/>
                </ImgGalleryWrap>
            </div>
            <ImgFlexWrap align="center" pd="80px 5vw 50px" space="space-between">
                <ImgFlexWrapCol wd="65%">
                    <ImgWd mg="0 0 20px" src="/asset/project/pj4/pj4-6.png"/>
                    <ImgWd src="/asset/project/pj4/pj4-7.png"/>
                </ImgFlexWrapCol>
                <Article pd="35px 0 0" wd="30%">
                    <p>동적 페이지 구성</p>
                    <div>Category 컴포넌트에서 URL 파라미터(useParams)를 사용하여 특정 카테고리의 데이터를 동적으로 받아오는 점이 좋습니다. id를 통해 API에서 관련 데이터를 가져와서 카테고리별로 보여주는 방식이 사용자에게 맞춤형 정보를 제공할 수 있습니다.</div>
                </Article>
            </ImgFlexWrap>
            <Contents>
                <ImgFlexWrap pd="0 5vw"><ImgWd src="/asset/project/pj4/pj4-8.png"/></ImgFlexWrap>
                <Article pd="35px 5vw 100px">
                    <p>Loading 페이지</p>
                    <div>외부 API에서 데이터를 비동기적으로 가져오고, 데이터를 받은 후 화면에 표시하였습니다. 이 덕분에 페이지 로드 시 데이터가 준비될 때까지 기다리며, 데이터를 로딩하는 동안 loading 상태를 사용하여 로딩 메시지를 표시하였습니다.</div>
                </Article>
            </Contents>
        </Contents>
        </ProjectBox>
    )
}
export default Bestseller;
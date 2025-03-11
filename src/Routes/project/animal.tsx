import styled from "styled-components";
import Cover from "../../Components/cover";
import { NEXTJS, VERCEL } from "../../Components/svg";
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
const Contents = styled.div`margin: 50px 0 0;`



function FindWindowWidth(){
    const [width, setWidth] = useState(window.innerWidth);
    useEffect( () => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize',handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[])
    return width;
}

function Animal(){
    const isDark = useRecoilValue(isDarkAtom)
    const iconColor = isDark ? darkTheme.textColor : lightTheme.textColor;

    const width = FindWindowWidth();
    const tabWidth = Number(breakpoints.tablet.split('px')[0])


    return(
        <ProjectBox>
            <Cover 
                bgimg="/asset/project/pj2/pj2-cover.png" 
                favicon="/asset/project/pj2/pj2-favi.svg"
                title="거래해요! 동물의 숲"
                siteLink="https://carrot-market-clone-ten.vercel.app/" 
                githubLink="https://github.com/kwons0/carrot-market-clone" 
                notionLink="https://www.notion.so/192f26733a5f80ce9a00fe5a1746d5c1?pvs=4" 
                desc="동물의 숲 캐릭터들이 중고거래 하는 컨셉의 웹 사이트 입니다." 
                contents={ [ "회원가입, 로그인", "내 정보 수정", "글쓰기, 답글 쓰기", "검색" ] }
                date="2024.12, 2주"
                rate="기획 100%, 디자인 100%, 개발 100%"
                skills="Next.js, TypeScript, Tailwindcss" 
                icons={
                    [
                        { Component: NEXTJS, props: { color: iconColor } },
                        { Component: GrayIcon, props: { src: "/asset/svg/typescript.svg" } },
                        { Component: GrayIcon, props: { src: "/asset/svg/tailwind.svg" } },
                        { Component: VERCEL, props: { color: iconColor } },
                      ]
                }
            />
            <Contents>
            {/* <ImgWd wd={ width >= tabWidth ? "32%" : "80%"} src="/asset/project/pj2/pj2-16.jpg"/> */}
            </Contents>
        </ProjectBox>
    )
}
export default Animal;
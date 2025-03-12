import styled from "styled-components";
import Cover from "../../Components/cover";
import { NEXTJS, VERCEL } from "../../lib/svg";
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
                group="개인프로젝트"
                title="거래해요! 동물의 숲"
                siteLink="https://carrot-market-clone-ten.vercel.app/" 
                githubLink="https://github.com/kwons0/carrot-market-clone" 
                desc="당근마켓과 트위터의 기능을 결합한 중고거래 사이트를 개발하며, 단순한 클론이 아닌 차별화된 아이디어를 고민했습니다. 그 결과, 동물의 숲 캐릭터들이 중고거래를 한다는 독창적인 컨셉을 설정해 색다른 사용자 경험을 만들었습니다. 또한, 이를 반영한 브랜드 로고도 직접 제작하여 사이트의 개성을 강화했습니다." 
                date="2024.12, 2주"
                rate="기획 100%, 디자인 100%, 개발 100%"
                skills="Next.js, TypeScript, Tailwindcss" 
                preview="/asset/intro/list_animal.png"
                color="#039F5C"
            />
            <Contents>

            {/* <iframe src="https://drive.google.com/file/d/1RXCD0PLDOi6fDHjI9lTOFzaNUQHcGDzV/preview?usp=sharing" width="900" height="507"></iframe> */}

            {/* <ImgWd wd={ width >= tabWidth ? "32%" : "80%"} src="/asset/project/pj2/pj2-16.jpg"/> */}
            </Contents>
        </ProjectBox>
    )
}
export default Animal;
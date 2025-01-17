import styled from "styled-components";
import Cover from "../../Components/cover";
import { NEXTJS } from "../../Components/svg";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../../atom";
import { darkTheme, lightTheme } from "../../theme";


const ProjectBox = styled.div`
    position: relative; overflow-y: scroll;
`
const GrayIcon = styled.img`filter: grayscale(1); width: auto; max-height: 16px; margin-left: 10px;`

const Contents = styled.div``

function Animal(){
    const isDark = useRecoilValue(isDarkAtom)
    const iconColor = isDark ? darkTheme.textColor : lightTheme.textColor;

    return(
        <ProjectBox>
            <Cover 
                bgimg="/asset/project/pj2/pj2-cover.png" 
                favicon="/asset/project/pj2/pj2-favi.svg"
                title="거래해요! 동물의 숲"
                siteLink="" 
                githubLink="" 
                notionLink="" 
                desc="동물의 숲 캐릭터들이 중고거래 하는 컨셉의 웹 사이트 입니다." 
                contents={ [ "회원가입, 로그인", "내 정보 수정", "글쓰기, 답글 쓰기", "검색" ] }
                date="2024.12, 2주" 
                stacks="" 
                icons={
                    [
                        { Component: NEXTJS, props: { color: iconColor } },
                        { Component: GrayIcon, props: { src: "/asset/svg/typescript.svg" } },
                        { Component: GrayIcon, props: { src: "/asset/svg/tailwind.svg" } },
                        { Component: GrayIcon, props: { src: "/asset/svg/vercel.svg" } },
                      ]
                }
            />
            <Contents>
            
            </Contents>
        </ProjectBox>
    )
}
export default Animal;
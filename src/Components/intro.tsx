import styled, { useTheme } from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atom";
import { breakpoints } from "../lib/constants";
import { Link } from "react-router-dom";
import { MAINIMG, DARKTHEME, LIGHTTHEME } from "../lib/svg";
import { GITHUB_URL, NOTION_URL } from "../lib/constants";


const mediaTablet = `@media (max-width: ${breakpoints.tablet})`;

const Title = styled.div<{isDark:boolean}>`
    margin: 100px auto 15%; ${mediaTablet}{ margin: 5vw auto;}
    display: flex; align-items: flex-end; justify-content: space-between; padding: 15vh 5%;
    > svg{ width: 35%; }
    > div{ 
        div{ font-size: 40px; line-height: 1.8; margin-bottom:6%;}
        a{ text-decoration: underline;}
        p{ font-size: 23px; line-height: 1.5; color: ${(props) => props.theme.gray3 };  }
    }
    span, h1{ display: inline; position: relative;}

    ${mediaTablet}{
        flex-wrap: wrap; padding: 10vh 5% 15vh;
        > svg{ width: 80%; margin: 0 auto 60px; order: 1; }
        > div{ order: 2;
            div{ font-size: 22px;}
            p{ font-size: 16px; }
        }
    }

    @media (max-width: 1073px) and (min-width: ${breakpoints.mobile} ){
        > div{ 
            div{ font-size: 29px;}
            p{ font-size: 19px;}
        }
    }
`
const Underline = styled.img`position: absolute; left:0; bottom: -12%;`

const Mode = styled.div`
    position: fixed; right: 6vw; bottom: 3vh; z-index: 99;
    cursor:pointer; display:inline-block; width: 40px; height: 40px;
    display:flex; align-items: center; justify-content: center;
    
    border-radius: 50px;
    background: ${(props)=>props.theme.bgColor+"8a"};
`



function Intro(){

    const isDark = useRecoilValue(isDarkAtom);
    const theme = useTheme();

    // 다크*라이트 모드 변경
    const setLightAtom = useSetRecoilState(isDarkAtom)
    const toggleAtom = () => setLightAtom((prev)=>!prev)

    return(
    <>
        <Title isDark={isDark}>
            <div>
                <div>안녕하세요!<br/>복잡한 문제를 구조적으로 해석하고, <br/>
                    사용자 경험을 기준으로<span>개선을 반복하는<Underline src="/asset/intro/title_1.svg" alt="point1"/></span><br/>
                    <h1>프론트엔드 개발자<Underline src="/asset/intro/title_2.svg" alt="point2"/></h1> 권서영 입니다.
                </div>
                <p>저에게 관심 있으시다면 <a href="tel:+821044300820">커피챗</a>해요! ☕️<br/>또는&nbsp;
                <Link to={NOTION_URL} target="_black">Notion</Link> /&nbsp;
                <Link to={GITHUB_URL} target="_black">GitHub</Link> 에서 저를 만나보세요.</p>

            </div>
            <MAINIMG color={isDark ? "#a8a8a8" : theme.textColor}/>
        </Title>
        <Mode onClick={toggleAtom}>{ isDark ? <DARKTHEME/> : <LIGHTTHEME/> }</Mode>
    </>   
    )
}
export default Intro;
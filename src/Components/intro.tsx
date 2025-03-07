import styled, { useTheme } from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atom";
import { breakpoints, darkTheme, lightTheme } from "../theme";
import { Link } from "react-router-dom";
import { MAINIMG, CURSOR, DARKTHEME, LIGHTTHEME, LINKICON } from "./svg";


const mediaTablet = `@media (max-width: ${breakpoints.tablet})`;

const Title = styled.div<{isDark:boolean}>`
    margin: 100px auto 20%; ${mediaTablet}{ margin: 5vw auto;}
    display: flex; align-items: flex-end; justify-content: space-between; padding: 15vh 5%;
    > svg{ width: 35%; }
    > div{ 
        div{ font-size: 40px; line-height: 1.8; margin-bottom:30px;}
        a{ text-decoration: underline;}
        p{ font-size: 25px; line-height: 1.5; color: ${({isDark, theme}) => isDark ? theme.gray4 : theme.gray2 };  }
    }
    span, h1{ display: inline; position: relative;}

    ${mediaTablet}{
        flex-wrap: wrap; padding: 10vh 5% 20vh;
        > svg{ width: 80%; margin: 0 auto 60px; order: 1; }
        > div{ order: 2;
            div{ font-size: 25px;}
            p{ font-size: 18px; }
        }
    }
`
const Underline = styled.img`position: absolute; left:0; bottom: -10px;`


const TitleWrap = styled.div` padding: 0 0 20px;`
const TitleBox = styled.div`padding: 0 5%; z-index: 10; position: relative; width: fit-content;
    ${mediaTablet} { padding: 0 5vw; }
`;
const Sub = styled.div`font-size: 23px; font-weight: 500; padding-bottom: 10px;`
const Create = styled.span`
    display: inline-block; position: relative;
    padding: 14px 20px; color: ${(props)=>props.theme.mainColor}; line-height: 1;
    background: #fff; font-weight: 600; font-size: 20px; border-radius: 50px;
`
const Cursor = styled.div`
    position: absolute; right: -25%; bottom: -50%;
    p{ font-size: 12px; color: #fff; padding: 5px 8px; background: ${(props)=>props.theme.mainColor};
        margin: -8px 0 0 15px; font-weight: 500;
    }
`
const Goto = styled.div`color: ${(props)=>props.theme.gray4}; line-height: 1.5; margin: 30px 0 25px;`
const Mode = styled.div`cursor:pointer; display:inline-block; width: fit-content;`



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
                <div>반갑습니다!<br/>저는 좋은 디자인을 구별할 줄 알고<br/>
                    <span>유저 친화적인 서비스<Underline src="/asset/intro/title_1.svg" alt="point1"/></span>를 만드는<br/>
                    <h1>프론트엔드 개발자<Underline src="/asset/intro/title_2.svg" alt="point2"/></h1> 권서영 입니다.
                </div>
                <p>저에게 관심 있으시다면 <a href="tel:+821044300820">커피챗</a>해요! ☕️<br/>또는&nbsp;
                <Link to="https://www.notion.so/Kwons0-dc7721815f594e4a8c26489e01acbc5e" target="_black">Notion</Link> /&nbsp;
                <Link to="https://github.com/kwons0" target="_black">GitHub</Link> 에서 저를 만나보세요.</p>

            </div>
            <MAINIMG color={isDark ? "#a8a8a8" : theme.textColor}/>
        </Title>
        <TitleWrap>
                <TitleBox>
                    <div>
                        <Sub>Becoming a</Sub>
                        <Create>Frontend Developer
                            <Cursor><CURSOR/><p>Kwons0</p></Cursor>
                        </Create>
                    </div>
                    <Goto>저에게 흥미가 있으시다면<br/>
                        <Link to="https://www.notion.so/dc7721815f594e4a8c26489e01acbc5e" target="_black">
                            노션에서 더 많은 이야기를 만나보세요! &nbsp;&nbsp;
                            <LINKICON color={isDark? darkTheme.gray4 : lightTheme.gray4}/>
                        </Link>
                    </Goto>
                    <Mode onClick={toggleAtom}>{ isDark ? <DARKTHEME/> : <LIGHTTHEME/> }</Mode>
                </TitleBox>

            </TitleWrap>
        </>   
    )
}
export default Intro;
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atom";
import { CURSOR, DARKTHEME, LIGHTTHEME, LINKICON } from "./svg";
import { breakpoints, darkTheme, lightTheme } from "../theme";
import { Link } from "react-router-dom";

const mediaTablet = `@media (max-width: ${breakpoints.tablet})`;

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

function BoxTitle() {

    // 다크*라이트 모드 변경
    const isDark = useRecoilValue(isDarkAtom)
    const setLightAtom = useSetRecoilState(isDarkAtom)
    const toggleAtom = () => setLightAtom((prev)=>!prev)


    return(
        <>
            <TitleWrap>
                <TitleBox>
                    <div>
                        <Sub>Becoming a</Sub>
                        <Create>Frontend Developer
                            <Cursor><CURSOR/><p>Kwons0</p></Cursor>
                        </Create>
                    </div>
                    <Goto>저에게 흥미가 있으시다면<br/>
                        <Link to="https://www.notion.so/4b845658b5d5423e9e6f08758bc900b7" target="_black">
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

export default BoxTitle;

import { useRecoilValue } from "recoil";
import { ARROW, GITHUB, LINKICON, NOTION } from "../lib/svg";
import styled, { useTheme } from "styled-components";
import { isDarkAtom, isModalOpen } from "../atom";
import { breakpoints } from "../lib/constants";
import { Link } from "react-router-dom";

const mediaTablet = `@media (max-width: ${breakpoints.tablet})`;

const ModalWrap = styled.ul`display: flex; align-items: center; justify-content: space-between; padding: 10% 5vw;`
const Left = styled.li`position: relative; width: 40%;`
const Title = styled.div<{isDark: boolean}>`
    p{ font-size: 14px; color: ${(props)=>props.theme.gray3};}
    h4{ font-size: 25px; margin: 13px 0 18px;}
    > ul { 
        display: flex; align-items: center; 
        > li a {
            display: flex; align-items: center; justify-content: center;
            font-size: 14px; line-height: 2; margin: 0 20px 0 0;
            text-decoration: underline;
            svg{ width: 20px; margin: 0 10px 0 0;}
            ${mediaTablet}{ font-size: 12px; padding: 5px 9px; margin: 0 10px 0 0;}
        }
    }
`

const Info = styled.ul`
    margin: 50px 0 40px; font-size: 15px;
    ${mediaTablet}{ display: block;
    }
`
const SectionTitle = styled.span<{color: string}>`
    color: ${({color}) => color}; 
    font-size: 12px; padding-right: 8px; display: inline-block; line-height: 2;
`
const Desc = styled.div`
    font-size: 15px; line-height: 1.8;
`
const Right = styled.li` max-width: 55%;`




const Nav = styled.span`
    position: fixed; bottom: 5%; right: 10%; z-index: 10000;
    svg{ transform: rotate(180deg) translateY(-1px); width: 20px; height: 15px;}
`



interface IIcons {
    Component:  React.ComponentType<any>;
    props: Record<string, any>;
}

interface ICover {
    group : string;
    title : string;
    siteLink : string;
    githubLink : string;
    desc : string;
    date : string;
    rate: string;
    skills : string;
    preview : string;
    color: string;
}



function Cover(
    {group, title, siteLink, githubLink, desc, date, rate, skills, preview, color="#000" }: ICover
){

    const isDark = useRecoilValue(isDarkAtom);
    const isModal = useRecoilValue(isModalOpen);
    const theme = useTheme();

    return(
    <div>
        { !isModal ? <Nav><Link to="/"><ARROW color={isDark? "#E6E6E6" : theme.gray1}/> Back to Home</Link></Nav> : null }
        <ModalWrap>
            <Left>
                <Title isDark={isDark}>
                    <p>{group}</p>
                    <h4>{title}</h4>
                    <ul>
                        { siteLink !== "" ? <li>
                            <Link to={siteLink} target="_blank">
                            <LINKICON color={ isDark ? "#E6e6e6" : "#202124" }/>Visit Website</Link>
                        </li> : null }
                        { githubLink !== "" ? <li>
                            <Link to={githubLink} target="_blank">
                            <GITHUB color={ isDark ? "#E6e6e6" : "#202124"}/>Github</Link>
                        </li> : null }
                    </ul>
                </Title>
                <div>
                    <Info style={{"minWidth": "35%"}}>
                        <li><SectionTitle color={color}>Date.</SectionTitle><span>{date}</span></li>
                        <li><SectionTitle color={color}>Contribution rate.</SectionTitle><span>{rate}</span></li>
                        <li><SectionTitle color={color}>Skills.</SectionTitle><span>{skills}</span></li>
                    </Info>
                    <Desc>{desc}</Desc>
                </div>
            </Left>
            <Right>
                <img src={preview} alt="preview img"/>
            </Right>
        </ModalWrap>
    </div>
    )
}
export default Cover;
import { useRecoilValue } from "recoil";
import { ARROW, GITHUB, LINKICON, NOTION } from "./svg";
import styled, { useTheme } from "styled-components";
import { isDarkAtom, isModalOpen } from "../atom";
import { breakpoints } from "../theme";
import { Link, useLocation } from "react-router-dom";

const mediaTablet = `@media (max-width: ${breakpoints.tablet})`;

const CoverBox = styled.div`position: relative;`
const CoverBg = styled.div<{isDark: boolean}>`
    position: relative; height: 30vh; overflow: hidden;
    p{
        width: 100%; height: 100%; position: absolute; left: 0; top: 0;
        background:
        ${({isDark}) => isDark ? ( "linear-gradient(to bottom, rgba(32, 33, 36, 0), rgba(32, 33, 36, 100))"
            ) : (
                "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 100))"
            )
        };
        
    }
    img{ height: 100%; object-fit: cover;  vertical-align: top; transform: translateY(-1px);}
`
const Favicon = styled.img`width: 43px;`
const Title = styled.div<{isDark: boolean}>`
    position: absolute; left: 5vw; top: 50%;
    h4{ font-size: 25px; margin: 17px 0 30px;}
    > ul { 
        display: flex; align-items: center;
        > li {
            padding: 7px 10px; 
            background: ${({theme, isDark}) => isDark ? theme.textColor+'33': theme.bgColor };
            font-size: 14px; margin: 0 16px 0 0; border-radius: 5px; line-height: 1;
            svg{ width: 12px; height: 11px; margin: 0 5px 0 0;}
            ${mediaTablet}{ font-size: 12px; padding: 5px 9px; margin: 0 10px 0 0;}
        }
    }
`

const Info = styled.ul`
    margin: 80px 0 0; padding: 0 5vw; display: flex; justify-content: space-between; gap: 20px;
    ${mediaTablet}{ margin: 50px 0 0; display: block;
        > li{ margin-bottom: 10px;}
    }
`
const Desc = styled.div`margin-bottom: 20px;`
const SectionTitle = styled.span`color: ${(props)=>props.theme.gray3}; 
    font-size: 14px; padding-right: 8px; display: inline-block; line-height: 2;
` 
const SectionContents = styled.ul`
    display: flex; margin: 2px 0 0; flex-wrap: wrap;
    > li{ width: 40%; margin-left: 20px; list-style: disc; padding-left: 3px; line-height: 1.5;
        ${mediaTablet}{ width: 100%;}
    }
    
`
const IconBox = styled.div`display:flex; align-items: center; margin-top: 20px;
    > * { margin-right: 15px;}
`

interface IIcons {
    Component:  React.ComponentType<any>;
    props: Record<string, any>;
}

interface ICover {
    bgimg : string;
    favicon: string;
    title : string;
    siteLink : string;
    githubLink : string;
    notionLink : string;
    desc : string;
    contents: string[];
    date : string;
    rate: string;
    skills : string;
    icons : IIcons[];
}


const Nav = styled.span`
    position: fixed; bottom: 5%; right: 10%; z-index: 10000;
    svg{ transform: rotate(180deg) translateY(-1px); width: 20px; height: 15px;}
`


function Cover(
    {bgimg, favicon, title, siteLink, githubLink, notionLink, desc, contents, date, rate, skills, icons }: ICover
){

    const isDark = useRecoilValue(isDarkAtom);
    const isModal = useRecoilValue(isModalOpen);
    const theme = useTheme();

    return(
    <div>
        {
            !isModal ? <Nav><Link to="/"><ARROW color={isDark? "#E6E6E6" : theme.gray1}/> Back to Home</Link></Nav> : null
            
        }
        <CoverBox>
            <CoverBg isDark={isDark}><img src={bgimg}/><p></p></CoverBg>
            <Title isDark={isDark}>
                <Favicon src={favicon}/>
                <h4>{title}</h4>
                <ul>
                    { siteLink !== "" ? <li><Link to={siteLink} target="_blank">사이트 바로가기 <LINKICON color={ isDark ? "#E6e6e6" : "#202124" }/></Link></li> : null }
                    { githubLink !== "" ? <li><Link to={githubLink} target="_blank"><GITHUB color={ isDark ? "#E6e6e6" : "#202124"}/>Github</Link></li> : null }
                    { notionLink !== "" ? <li><Link to={notionLink} target="_blank"><NOTION color={ isDark ? "#E6e6e6" : "#202124"}/>Notion</Link></li> : null }
                </ul>
            </Title>
        </CoverBox>
        <Info>
            <li>
                <Desc>{desc}</Desc>
                <div>
                    <SectionTitle>핵심 내용. </SectionTitle>
                    <SectionContents>
                    {
                        contents.map( (value, index) => (
                            <li key={index}>{value}</li>
                        ))
                    }
                    </SectionContents>
                </div>
            </li>
            <li style={{"minWidth": "35%"}}>
                <div><SectionTitle>Date.</SectionTitle><span>{date}</span></div>
                <div><SectionTitle>Contribution rate.</SectionTitle><span>{rate}</span></div>
                <div><SectionTitle>Skills.</SectionTitle><span>{skills}</span></div>
                <IconBox>
                {icons.map((icon, index) => {
                    const { Component, props } = icon;
                    return <Component key={index} {...props} />;
                })}
                </IconBox>
            </li>
        </Info>
    </div>
    )
}
export default Cover;
import { GITHUB, LINKICON, NEXTJS, NOTION } from "./svg";
import styled from "styled-components";


const CoverBox = styled.div`position: relative;`
const CoverBg = styled.div`
    position: relative; height: 30vh; overflow: hidden;
    p{
        width: 100%; height: 100%; position: absolute; left: 0; top: 0;
        background: linear-gradient(to bottom, rgba(32, 33, 36, 0), rgba(32, 33, 36, 100));
    }
    img{ height: 100%; object-fit: cover;  vertical-align: top;}
`
const Favicon = styled.img`width: 43px;`
const Title = styled.div`
    position: absolute; left: 5vw; top: 50%;
    h4{ font-size: 25px; margin: 17px 0 30px;}
    > ul { 
        display: flex; align-items: center; 
        > li {
            padding: 7px 10px; background: ${(props)=>props.theme.textColor+'33'};
            font-size: 14px; margin: 0 16px 0 0; border-radius: 5px; line-height: 1;
            svg{ width: 12px; height: 11px; margin: 0 5px 0 0;}
        }
    }
`

const Info = styled.ul`
    margin: 10% 0 0; padding: 0 5vw; display: flex; justify-content: space-between; gap: 20px;
`
const Desc = styled.div`margin-bottom: 20px;`
const SectionTitle = styled.span`color: ${(props)=>props.theme.gray3}; 
    font-size: 14px; padding-right: 8px; display: inline-block; line-height: 2;
` 
const SectionContents = styled.ul`
    display: flex; margin: 2px 0 0; flex-wrap: wrap;
    > li{ width: 40%; margin-left: 20px; list-style: disc; padding-left: 3px; line-height: 1.5;}
    
`
const IconBox = styled.div`display:flex; align-items: center; margin-top: 20px;`

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
    stacks : string;
    icons : IIcons[];
}


function Cover(
    {bgimg, favicon, title, siteLink, githubLink, notionLink, desc, contents, date, stacks, icons }: ICover
){

    return(
        <div>
        <CoverBox>
            <CoverBg><img src={bgimg}/><p></p></CoverBg>
            <Title>
                <Favicon src={favicon}/>
                <h4>{title}</h4>
                <ul>
                    <li>사이트 바로가기<LINKICON/></li>
                    <li><GITHUB/>Github</li>
                    <li><NOTION/>Notion</li>
                </ul>
            </Title>
        </CoverBox>
        <Info>
            <li>
                <Desc>{desc}</Desc>
                <div>
                    <SectionTitle>핵심 기능. </SectionTitle>
                    <SectionContents>
                    {
                        contents.map( (value, index) => (
                            <li key={index}>{value}</li>
                        ))
                    }
                    </SectionContents>
                </div>
            </li>
            <li>
                <div><SectionTitle>Date.</SectionTitle><span>{date}</span></div>
                <div><SectionTitle>Stack.</SectionTitle><span>{stacks}</span></div>
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
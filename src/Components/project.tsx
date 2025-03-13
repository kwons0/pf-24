import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { Link, useParams } from "react-router-dom";
import { breakpoints } from "../lib/constants";
import { isDarkAtom } from "../atom";
import Cover from "./cover";
import { pjItems, SubItem } from "../lib/data";


const mediaTablet = `@media (max-width: ${breakpoints.tablet})`;

const ProjectBox = styled.div`
    position: relative;  -ms-overflow-style: none; overflow-x: hidden; 
    &::-webkit-scrollbar { display: none; }
`
const Contents = styled.div<{isDark: boolean}>`
    margin: 0 5vw 50px; padding: 50px 0; border-top: 1px solid ${({isDark, theme})=> isDark ? theme.gray2 : theme.gray1};
    h5{ font-size: 45px; color: ${({isDark, theme})=> isDark ? theme.gray2 : theme.gray1}; font-weight:700; margin-bottom: 50px;}
`
const Wrap = styled.div`
    display: flex; justify-content: space-between;
    ${mediaTablet}{ display: block;}
`
const Left = styled.div`
    width: 45%;
    ${mediaTablet}{ width: 100%;}
`
const Section = styled.div`
    margin: 25px 0;
    p{ font-size: 18px; font-weight: 500; position: relative; padding: 0 0 0 15px;
        &::before{ 
            display: inline-block; content: ""; clear: both; 
            width: 5px; height: 5px; background: ${(props)=>props.theme.textColor};
            position: absolute; left: 3px; top: 50%; transform: translateY(-50%);
        }
    }
    ul{ padding: 10px 0 0 25px;
        li{ 
            font-size: 15px; color: ${(props)=>props.theme.gray3}; line-height: 1.8; list-style: circle;
            ul{ 
                padding: 10px 0 10px 25px;
                li{ list-style: outside;}
            }
        }
    }
`
const Site = styled.span<{color: string}>`
    display: inline-block; margin-top: 10px; background: ${({color}) => color+"30"}; color: ${({color}) => color}; padding: 10px 20px; border-radius: 50px;
`

const Right = styled.div`
    width: 50%; 
    iframe{ width: 100%}
    ${mediaTablet}{ margin: 80px 0; width: 100%;}
`

function isSubItem( item: string | SubItem ): item is SubItem {
    return typeof item === 'object' && 'subContents' in item;
}

function Project(){
    const isDark = useRecoilValue(isDarkAtom);
    
    const { projectId } = useParams();
    const project = pjItems.find( (v) => v.id === projectId );

    if( !project ) return <div>프로젝트를 찾을 수 없습니다.</div>

    return(
        <ProjectBox>
            <Cover
                group={project.group}
                title={project.title}
                siteLink={project.siteLink}
                githubLink={project.githubLink}
                desc={project.detail}
                date={project.date}
                rate={project.rate}
                skills={project.skills}
                preview={project.img}
                color={project.color}
            />
            <Contents isDark={isDark}>
                <h5>Project Contents.</h5>
                <Wrap>
                    <Left>
                        <div>
                            {project.contents.map((content) => (
                            <Section>
                                <p>{content.title}</p>
                                <ul>
                                    {content.items.map( (item,idx) => 
                                        isSubItem(item) ? (
                                                <li key={idx}>
                                                    {item.text}
                                                    <ul>
                                                        {
                                                            item.subContents.map( (v,k)=>(
                                                                <li key={k}>{v}</li>
                                                            ))
                                                        }
                                                        
                                                    </ul>
                                                </li>
                                            ) : <li key={idx}>{item}</li>
                                    )}
                                </ul>
                            </Section>
                            ))}
                        </div>
                        <Link to={project.drive + "/view?usp=sharing"} target="_blank">
                            <Site color={project.color}>프로젝트 내용 자세히 보기&nbsp;&nbsp;&gt;</Site>
                        </Link>
                    </Left>
                    <Right>
                        <iframe src={project.drive + "/preview?usp=sharing"} width="900" height="507"></iframe>
                    </Right>
                </Wrap>
            </Contents>
        </ProjectBox>
    )
}
export default Project;
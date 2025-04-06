import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { Link, useParams } from "react-router-dom";
import { breakpoints } from "../lib/constants";
import { isDarkAtom } from "../atom";
import Cover from "./cover";
import { pjItems, SubItem } from "../lib/data";
import { motion } from "framer-motion";


const mediaTablet = `@media (max-width: ${breakpoints.tablet})`;

const ProjectBox = styled.div`
    position: relative;  -ms-overflow-style: none; overflow-x: hidden; 
    &::-webkit-scrollbar { display: none; }
`
const Contents = styled.div<{isDark: boolean}>`
    margin: 0 5vw 50px; padding: 50px 0; border-top: 1px solid ${({isDark, theme})=> isDark ? theme.gray2 : theme.gray1};
    h5{ font-size: 45px; color: ${({isDark, theme})=> isDark ? theme.gray2 : theme.gray1}; font-weight:700; margin-bottom: 50px;}
    ${mediaTablet}{ padding: 50px 0 0; }
`
const Wrap = styled.div`
    display: flex; justify-content: space-between;
    ${mediaTablet}{ display: block;}
`
const Left = styled.div`
    width: 45%;
    ${mediaTablet}{ width: 100%;}
`
const Section = styled.ul`
    margin: 25px 0;
    li{ padding: 10px 0 0 0; line-height: 1.8;
        p{ font-size: 15px; position: relative; color: ${(props)=>props.theme.gray4}; 
            margin-left: 10px; padding-left:15px;
            line-height: 2;
            &::before{ 
                display: inline-block; content: ""; clear: both; 
                width: 5px; height: 5px; background: ${(props)=>props.theme.gray4};
                position: absolute; left: 3px; top: 50%; transform: translateY(-50%);
            }
        }
    }
`
const Site = styled(motion.span)<{color: string}>`
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

    if( !project ) return null;

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
                            <Section>
                                <li>1. 프로젝트 개요</li>
                                <li>2. 담당 역할 및 업무 범위</li>
                                <li>3. 기술 설계 및 구현 흐름</li>
                                <li>4. 트러블슈팅 및 협업 경험</li>
                                <li>
                                    {project.trouble.map((item, idx) => (<p key={idx}>{item}</p>))}
                                </li>
                                <li>5. 성과 및 배운 점</li>
                                {
                                    project.contents && project.contents.map( (item, idx) => (
                                            <li key={idx}>{item.title}</li>
                                    ))
                                    
                                }
                            </Section>
                        </div>
                        <Link to={project.drive + "/view?usp=sharing"} target="_blank">
                            <Site
                                color={project.color}
                                variants={{ hover: { background: project.color, color: "#fff" } }}
                                whileHover="hover"
                            >
                                프로젝트 내용 자세히 보기&nbsp;&nbsp;&gt;
                            </Site>
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
import styled from "styled-components";
import { dataItems, categories, skillsDesc } from "../lib/data";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atom";
import { breakpoints } from "../lib/constants";
import { GITHUB_URL, MAIL_ADDRESS, NOTION_URL, PHONE_NUMBER, PORTFOLIO_DRIVE, RESUME_DRIVE } from "../lib/constants";


const mediaTablet = `@media (max-width: ${breakpoints.tablet})`;

const ContainerWrap = styled.div`
    display: flex; justify-content: space-between; padding: 0 3vw; margin: 0;
    ${mediaTablet}{ display:block; height: fit-content; padding: 0 5%; }
`
const FlexCol = styled.ul`
    display: flex; flex-direction: column; width: 48%;
    ${mediaTablet}{ width: 100%;}
`
const Container = styled.li<{isDark: boolean}>`
    background: ${({isDark})=> isDark ? "#292929" : "#FFFFFF"}; 
    padding: 10%; margin: 0 0 9% 0; border-radius: 2.5vw;
    position: relative; height: fit-content;
    &:nth-child(even){ margin-right: 0;}
    > *:nth-child(2){margin-top: 45px;}
    ${mediaTablet}{ 
        width: 100%; margin: 0 0 9% 0; padding: 6vw 7vw; font-size: 15px;
        &:first-child{ margin-top:0;}
    }
    
    > h3{ 
        font-size: 50px; color: ${(props)=> props.theme.textColor+"40"};  font-weight: 700;
        position: sticky; top: 20px; z-index: 10; line-height: 1;
    }
    > div{ line-height: 1.5;}
`
const SkillBox = styled(Container)`padding-bottom: 30px;`;

const LinkBox = styled(Container)`
    padding-bottom: 5%;
    ul{ display: flex; flex-wrap: wrap;
        li{ display: flex; align-items: center; margin: 0 0 5% 0; line-height: 1; width: 50%;
            a{ display: flex; align-items: center; text-decoration: underline;}
            svg{ width: 18px; height: 18px; ${mediaTablet}{ width: 16px; height: 16px;}}
            span{ padding-left: 15px; ${mediaTablet}{ padding-left: 10px;}}
            p{ width: 50%;}
        }
    }
`

const CBox = styled(LinkBox)`
    ul{ display: block;
        li{ width: 100%;
            a{ text-decoration: unset;} 
        }
    }
`


const Skills = styled.div`
    &:first-child{ div{ padding-top: 0;} }
    div{ color: ${(props)=>props.theme.gray2}; padding: 20px 0 10px; font-size: 14px; font-weight: 400;}
    ul{ display: flex; flex-wrap: wrap;}

`
const SkillItem = styled.li`
    line-height: 1; margin: 0 5px 7px 0;
`

const DescBox = styled.div`
    margin: 30px 0;
    p{ width: 20px; display: flex; align-items: center; 
        img{ margin-right: 5px; }
    }
    span{ 
        font-size: 12px; display: inline-block; padding: 5px 12px; font-weight: 500;
        border-radius: 20px; line-height: 1; background: ${(props) => props.theme.gray1};
    }
    div{ font-size: 14px;}
    
`


function Box(){
    const isDark = useRecoilValue(isDarkAtom);

    return(
        <ContainerWrap>
            <FlexCol>
                <Container isDark={isDark}>
                    <h3>Hello,</h3>
                    <div>
                        안녕하세요! 저는 디자인을 넘어, 문제를 해결하는 프론트엔드 개발자 권서영입니다.<br/><br/>
                        UX 설계부터 디자인, 개발까지 다양한 단계를 직접 경험하며 각 분야를 깊이 이해할 수 있었고, 이를 통해 프로젝트의 흐름을 파악하고 원활히 진행되도록 이끌어갈 수 있는 역량을 갖추게 되었습니다.<br/><br/>
                        좋은 디자인을 구별할 수 있을 뿐만 아니라 그것을 구현할 수 있는 개발자는 무한한 가능성을 가지고 있다고 믿습니다.<br/><br/>
                        저에게 관심이 있으시다면 언제든지 연락 부탁드립니다!
                    </div>
                </Container>
                <LinkBox isDark={isDark}>
                    <h3>Career<br/>& Projects</h3>
                    <ul>
                        <li><Link to={RESUME_DRIVE} target="_black">이력서, 경력기술서</Link></li>
                        <li><Link to={PORTFOLIO_DRIVE} target="_black">포트폴리오 PDF 파일</Link></li>
                        <li><Link to={NOTION_URL} target="_black">notion.so</Link></li>
                        <li><Link to={GITHUB_URL} target="_black">github.com</Link></li>
                    </ul>
                </LinkBox>
            </FlexCol>

            <FlexCol>
                <CBox isDark={isDark}>
                    <h3>Contact</h3>
                    <ul>
                        <li><a href={"mailto:"+MAIL_ADDRESS}>📧&nbsp;&nbsp;{MAIL_ADDRESS}</a></li>
                        <li><a href={"tel:"+PHONE_NUMBER.replace(/[ .]/g, "")}>📞 {PHONE_NUMBER}</a></li>
                    </ul>
                </CBox>
                <SkillBox isDark={isDark}>
                    <h3>Skills</h3>
                    <ul>
                        {categories.map((category,idx) => (
                            <Skills key={idx}>
                                <div>{category.title}</div>
                                <ul>
                                    { category.skills.map((data,i) => {
                                        let skill = dataItems.find((v)=>v.title === data)
                                        let isLast = i === category.skills.length - 1;
                                        return skill ? (            
                                            <SkillItem key={skill.title}>{skill.title}{!isLast && ','}</SkillItem>
                                        ) : null
                                    }) }
                                </ul>
                            </Skills>
                        ))}
                    </ul>
                    <DescBox>
                        <ul>
                        {
                            skillsDesc.map((item,idx) => (
                                <li key={idx}>
                                    <p>
                                        {
                                            item.icon.map((v,k)=>(
                                                <img key={k} src={"asset/svg/"+v+".svg"}/>
                                            ))
                                        }
                                    </p>
                                    <span>{item.title}</span>
                                    <div>{item.desc}</div>
                                </li>
                            ))
                        }
                        </ul>
                    </DescBox>
                </SkillBox>
            </FlexCol>
        </ContainerWrap>
    )
}
export default Box;
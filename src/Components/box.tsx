import styled from "styled-components";
import { dataItems, categories } from "../data";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atom";
import { breakpoints } from "../theme";


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
    > *:nth-child(2){margin-top: 30px;}
    ${mediaTablet}{ 
        width: 100%; margin: 0 0 9% 0; padding: 6vw 7vw; font-size: 15px;
        &:first-child{ margin-top:0;}
    }
    
    > h3{ 
        font-size: 50px; color: ${(props)=> props.theme.textColor+"2b"};  font-weight: 700;
        position: sticky; top: 20px; z-index: 10;
    }
    > p{ color: ${({theme, isDark})=> isDark ? theme.gray5 : theme.gray3};}
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
    div{ color: ${(props)=>props.theme.gray4}; padding: 20px 0 13px; font-size: 14px; font-weight: 400;}
    ul{ display: flex; flex-wrap: wrap;}

`
const SkillItem = styled.li<{bgColor: string}>`
    background: ${(props)=> props.bgColor}; padding: 5px 10px; line-height: 1; margin: 0 5px 7px 0; border-radius: 30px; font-size: 12px;
`
const Icons = styled.ul`
    display: flex; flex-wrap: wrap; margin-top: 40px;
    filter: grayscale(1); opacity: 0.6;
    li{ width: 5%; margin: 0 3% 3% 0;}
`


function Box(){
    const isDark = useRecoilValue(isDarkAtom);

    return(
        <ContainerWrap>
            <FlexCol>
                <Container isDark={isDark}>
                    <h3>Hello,</h3>
                    <p></p>
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
                        <li><Link to="https://drive.google.com/file/d/1RXCD0PLDOi6fDHjI9lTOFzaNUQHcGDzV/view?usp=sharing" target="_black">이력서, 경력기술서</Link></li>
                        <li><Link to="https://drive.google.com/file/d/1r3tBoCZFSAsZJd7lGuuWB7E1nlNAzfwN/view?usp=sharing" target="_black">포트폴리오 PDF 파일</Link></li>
                        <li><Link to="https://www.notion.so/Kwons0-dc7721815f594e4a8c26489e01acbc5e" target="_black">notion.so</Link></li>
                        <li><Link to="https://github.com/kwons0" target="_black">github.com</Link></li>
                    </ul>
                </LinkBox>
            </FlexCol>

            <FlexCol>
                <CBox isDark={isDark}>
                    <h3>Contact</h3>
                    <p></p>
                    <ul>
                        <li><a href="mailto:kwons0128@gmail.com">📧&nbsp;&nbsp;kwons0128@gmail.com</a></li>
                        <li><a href="tel:+821044300820">📞 +82 10.4430.0820</a></li>
                    </ul>
                </CBox>
                <SkillBox isDark={isDark}>
                    <h3>Skills</h3>
                    <ul>
                        {categories.map((category) => (
                            <Skills key={category.title}>
                                <div>{category.title}</div>
                                <ul>
                                    { category.skills.map((data) => {
                                        let skill = dataItems.find((v)=>v.title === data)
                                        return skill ? (            
                                            <SkillItem key={skill.title} bgColor={skill.color + "30"}>{skill.title}</SkillItem>
                                        ) : null
                                    }) }
                                </ul>
                            </Skills>
                        ))}
                    </ul>
                    <Icons>
                        {
                            dataItems.map((skill, idx) => (
                                <li key={idx}>
                                    <img src={"asset/svg/"+skill.img+".svg"}/>
                                </li>
                            ))
                        }
                    </Icons>
                </SkillBox>
            </FlexCol>
        </ContainerWrap>
    )
}
export default Box;
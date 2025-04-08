import styled, { useTheme } from "styled-components";
import { dataItems, categories, skillsDesc } from "../lib/data";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atom";
import { breakpoints } from "../lib/constants";
import { GITHUB_URL, MAIL_ADDRESS, NOTION_URL, PHONE_NUMBER, PORTFOLIO_DRIVE, RESUME_DRIVE } from "../lib/constants";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import { ABOUT1, ABOUT2, ABOUT3 } from "../lib/svg";


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
`
const About = styled.li`
    margin-bottom: 40px;
    span{
        svg{ min-width: 20px; max-height: 30px;}
    }
    p{ margin: 10px 0 10px; font-weight: 600;}
    div{ font-size: 15px; line-height: 1.5; color: ${(props)=>props.theme.gray4};
        b{ font-weight: 600;}
    }
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

const DescBox = styled.div<{isDark: boolean}>`
    .swiper{
        padding: 40px 0;
        .swiper-slide{
            padding: 7%; background:  ${({isDark, theme}) => isDark ? theme.bgColor : theme.bgColor}; border-radius: 15px;

            p{ width: 20px; display: flex; align-items: center; 
                img{ margin-right: 5px; }
            }
            span{ 
                font-size: 12px; display: inline-block; padding: 5px 12px; margin: 15px 0 10px; font-weight: 500;
                border-radius: 20px; line-height: 1; background: ${(props) => props.theme.gray1};
            }
            div{ font-size: 14px; line-height: 1.5;}
        }
        
        .swiper-button-next{ right: 30%;}
        .swiper-button-prev{ left: 30%;}
        .swiper-button-next, .swiper-button-prev{ z-index: 11; top: auto; bottom: -1%; color: ${(props)=> props.theme.textColor};}
        .swiper-button-next::after, .swiper-button-prev::after{ font-size: 15px; font-weight: 600;} 
        .swiper-pagination-bullet{ background: ${(props)=> props.theme.gray4}}
        .swiper-pagination-bullet-active{ background: ${(props)=> props.theme.mainColor};}
        
    }
    
`


function Box(){
    const isDark = useRecoilValue(isDarkAtom);
    const theme = useTheme();

    return(
        <ContainerWrap>
            <FlexCol>
                <Container isDark={isDark}>
                    <h3>About me</h3>
                    <ul>
                        <About>
                            <span><ABOUT1 color={theme.gray3}/></span>
                            <p>언제나 더 효율적인 방법을 고민합니다.</p>
                            <div>반복적이거나 비효율적인 작업은 자동화하고, 표준화된 코드 컨벤션을 통해 유지보수성을 높였습니다. 단기적인 해결책보다 <b>지속 가능한 코드 작성과 확장 가능한 구조 설계를 지향</b>하며, 기술 부채를 줄이고 프로젝트의 안정성과 퀄리티를 높이는 것을 중요하게 생각합니다.</div>
                        </About>
                        <About>
                            <span><ABOUT2 color={theme.gray3}/></span>
                            <p>사용자 중심 UI/UX에 집중합니다.</p>
                            <div>디자이너 경험을 바탕으로, 단순한 화면 구현을 넘어 <b>사용자 경험을 고려한 개발</b>을 지향합니다.<br/>
                            디자인의 의도를 기술적으로 구현하는 데 강점이 있으며, GA4와 사용자 피드백 분석을 통해 문제를 개선한 경험이 있습니다. 와이어프레임 리뷰, 프로토타입 테스트 등 디자인 협업에도 적극적으로 참여해왔습니다.</div>
                        </About>
                        <About>
                            <span><ABOUT3 color={theme.gray3}/></span>
                            <p>회사와의 선순환을 추구합니다.</p>
                            <div>회사의 성장과 저의 성장은 함께 간다고 믿습니다. 코드 리뷰를 통해 팀원들과 <b>지식을 공유</b>하고, 타인의 경험에서 인사이트를 얻는 것을 즐깁니다. 이런 경험들이 팀 전체의 역량 강화로 이어진다고 생각합니다.</div>
                        </About>
                    </ul>
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
                    <DescBox isDark={isDark}>
                        <Swiper 
                            navigation={true} 
                            slidesPerView={1.2}
                            spaceBetween={20}
                            pagination={true}
                            modules={[Navigation, Pagination]} 
                            className="mySwiper">
                        {
                            skillsDesc.map((item,idx) => (
                                <SwiperSlide key={idx}>
                                    <p>
                                        {
                                            item.icon.map((v,k)=>(
                                                <img key={k} src={"asset/svg/"+v+".svg"}/>
                                            ))
                                        }
                                    </p>
                                    <span>{item.title}</span>
                                    <div>{item.desc}</div>
                                </SwiperSlide>
                            ))
                        }
                        </Swiper>
                    </DescBox>
                </SkillBox>
            </FlexCol>
        </ContainerWrap>
    )
}
export default Box;
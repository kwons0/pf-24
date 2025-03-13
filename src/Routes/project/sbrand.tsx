import styled from "styled-components";
import Cover from "../../Components/cover";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../../atom";
import { breakpoints } from "../../lib/constants";
import { Link } from "react-router-dom";


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
const Site = styled.span`
    display: inline-block; margin-top: 10px; background: #6981af30; color: #6981af; padding: 10px 20px; border-radius: 50px;
`

const Right = styled.div`
    width: 50%; 
    iframe{ width: 100%}
    ${mediaTablet}{ margin: 80px 0; width: 100%;}
`


function Sbrand(){
    const isDark = useRecoilValue(isDarkAtom)

    return(
        <ProjectBox>
            <Cover 
                group="협업 프로젝트(실무)"
                title="S사 자사몰 구축"
                siteLink="" 
                githubLink="" 
                desc="고도몰에서 카페24로의 플랫폼 이전을 진행하는 프로젝트입니다. 
                단순한 마이그레이션이 아닌 기존 사이트의 강점을 유지하면서도 새로운 플랫폼 환경에 최적화된 쇼핑몰을 구축하는 것을 목표로 진행했습니다." 
                date="2023.5 ~ 2023.08, 3개월" 
                rate="개발 100%"
                skills="HTML5, CSS3, Javascript" 
                preview="/asset/intro/list_sbrand.png"
                color="#6981af"
            />
            <Contents isDark={isDark}>
                <h5>Project Contents.</h5>
                <Wrap>
                    <Left>
                        <div>
                            <Section>
                                <p>Key Roles</p>
                                <ul>
                                    <li>주요 역할 및 기여 내용</li>
                                </ul>
                            </Section>
                            <Section>
                                <p>Key Contents</p>
                                <ul>
                                    <li>상품 진열 및 프로모션 최적화 기능 개발
                                        <ul>
                                            <li>한 페이지에서 다양한 카테고리 상품 탐색 기능 구현</li>
                                            <li>이벤트 페이지에서 상품 구매 여정 간소화</li>
                                        </ul>
                                    </li>
                                    <li>SNS로그인 리다이렉트 기능 개선</li>
                                </ul>
                            </Section>
                            <Section>
                                <p>Troubleshooting</p>
                                <ul>
                                    <li>쿠폰 할인가 미적용 문제와 해결 방법</li>
                                </ul>
                            </Section>
                            <Section>
                                <p>What I Learned</p>
                                <ul>
                                    <li>프로젝트를 통해 배운 점</li>
                                </ul>
                            </Section>
                        </div>
                        <Link to="https://drive.google.com/file/d/16V8bN2j8JdJMjLwzn5nqBdXzLOpp6xVQ/view?usp=sharing" target="_blank">
                            <Site>프로젝트 내용 자세히 보기&nbsp;&nbsp;&gt;</Site>
                        </Link>
                    </Left>
                    <Right>
                        <iframe src="https://drive.google.com/file/d/16V8bN2j8JdJMjLwzn5nqBdXzLOpp6xVQ/preview?usp=sharing" width="900" height="507"></iframe>
                    </Right>
                </Wrap>
            </Contents>
        

        </ProjectBox>
    )
}
export default Sbrand;
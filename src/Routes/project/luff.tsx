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
    display: inline-block; margin-top: 10px; background: #E94F5930; color: #E94F59; padding: 10px 20px; border-radius: 50px;
`

const Right = styled.div`
    width: 50%; 
    iframe{ width: 100%}
    ${mediaTablet}{ margin: 80px 0; width: 100%;}
`


function Luff(){
    const isDark = useRecoilValue(isDarkAtom)

    return(
        <ProjectBox>
            <Cover 
                group="개인 프로젝트"
                title="Luff 자사몰 리뉴얼"
                siteLink="https://luff.kr/" 
                githubLink="" 
                desc="라이프스타일 브랜드 ‘LUFF’는 일상 속 작은 즐거움과 실용성을 담은 제품을 선보입니다. 주로 가방과 북파우치를 제작하며, 심플하면서도 세련된 디자인이 특징입니다. 
                LUFF 대표님의 Pain Point를 해결하기 위해 자사몰 리뉴얼 프로젝트를 진행하게 되었습니다." 
                date="2024.3 ~ 2024.06, 3개월" 
                rate="기획 100%, 디자인 100%, 개발 100%"
                skills="HTML5, CSS3, Javascript" 
                preview="/asset/intro/list_luff.png"
                color="#E94F59"
            />
            <Contents isDark={isDark}>
                <h5>Project Contents.</h5>
                <Wrap>
                    <Left>
                        <div>
                            <Section>
                                <p>Pain Point & Goal</p>
                                <ul>
                                    <li>프로젝트 개요 및 목표</li>
                                </ul>
                            </Section>
                            <Section>
                                <p>Solution</p>
                                <ul>
                                    <li>반응형 자사몰로 SEO 강화하기</li>
                                    <li>회원가입 유도하기</li>
                                    <li>상품 탐색은 정확하고 편리하게</li>
                                </ul>
                            </Section>
                            <Section>
                                <p>What I Learned</p>
                                <ul>
                                    <li>프로젝트를 통해 배운 점</li>
                                </ul>
                            </Section>
                        </div>
                        <Link to="https://drive.google.com/file/d/16Rfzf8FguDWwQzxJYwXR43s-0xbIseBy/view?usp=sharing" target="_blank">
                            <Site>프로젝트 내용 자세히 보기&nbsp;&nbsp;&gt;</Site>
                        </Link>
                    </Left>
                    <Right>
                        <iframe src="https://drive.google.com/file/d/16Rfzf8FguDWwQzxJYwXR43s-0xbIseBy/preview?usp=sharing" width="900" height="507"></iframe>
                    </Right>
                </Wrap>
            </Contents>

        </ProjectBox>
    )
}
export default Luff;
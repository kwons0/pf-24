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
    display: inline-block; margin-top: 10px; background: #039F5C30; color: #039F5C; padding: 10px 20px; border-radius: 50px;
`

const Right = styled.div`
    width: 50%; 
    iframe{ width: 100%}
    ${mediaTablet}{ margin: 80px 0; width: 100%;}
`


function Animal(){
    const isDark = useRecoilValue(isDarkAtom)
    

    return(
        <ProjectBox>
            <Cover 
                group="개인프로젝트"
                title="거래해요! 동물의 숲"
                siteLink="https://carrot-market-clone-ten.vercel.app/" 
                githubLink="https://github.com/kwons0/carrot-market-clone" 
                desc="당근마켓과 트위터의 기능을 결합한 중고거래 사이트를 개발하며, 단순한 클론이 아닌 차별화된 아이디어를 고민했습니다. 그 결과, 동물의 숲 캐릭터들이 중고거래를 한다는 독창적인 컨셉을 설정해 색다른 사용자 경험을 만들었습니다. 또한, 이를 반영한 브랜드 로고도 직접 제작하여 사이트의 개성을 강화했습니다." 
                date="2024.12, 2주"
                rate="기획 100%, 디자인 100%, 개발 100%"
                skills="Next.js, TypeScript, Tailwindcss" 
                preview="/asset/intro/list_animal.png"
                color="#039F5C"
            />
            <Contents isDark={isDark}>
                <h5>Project Contents.</h5>
                <Wrap>
                    <Left>
                        <div>
                            <Section>
                                <p>Userflow</p>
                                <ul>
                                    <li>화면 구성 및 유저플로우</li>
                                </ul>
                            </Section>
                            <Section>
                                <p>Key Contents</p>
                                <ul>
                                    <li>회원가입, 로그인</li>
                                    <li>트윗, 댓글 작성하기</li>
                                    <li>마을 정보 확인/수정하기</li>
                                </ul>
                            </Section>
                            <Section>
                                <p>Troubleshooting</p>
                                <ul>
                                    <li>좋아요, 댓글 즉시 반영 문제와 해결 과정</li>
                                    <li>상점 정보 페이지의 진입 경로에 따른 UI 차이 해결 과정</li>
                                </ul>
                            </Section>
                            <Section>
                                <p>What I Learned</p>
                                <ul>
                                    <li>프로젝트를 통해 배운 점</li>
                                </ul>
                            </Section>
                        </div>
                        <Link to="https://drive.google.com/file/d/1wQ0LJ1NRznPM2U0ISTF4hDR7kN7IyxPP/view?usp=sharing" target="_blank">
                            <Site>프로젝트 내용 자세히 보기&nbsp;&nbsp;&gt;</Site>
                        </Link>
                    </Left>
                    <Right>
                        <iframe src="https://drive.google.com/file/d/1wQ0LJ1NRznPM2U0ISTF4hDR7kN7IyxPP/preview?usp=sharing" width="900" height="507"></iframe>
                    </Right>
                </Wrap>
            </Contents>
        </ProjectBox>
    )
}
export default Animal;
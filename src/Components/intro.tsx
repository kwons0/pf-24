import { useRecoilValue } from "recoil";
import styled, { useTheme } from "styled-components";
import { isDarkAtom } from "../atom";
import { breakpoints } from "../theme";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MAINIMG } from "./svg";


const mediaTablet = `@media (max-width: ${breakpoints.tablet})`;


const IntroWrap = styled.div`margin: 100px auto 20%; ${mediaTablet}{ margin: 5vw auto;}`
const Title = styled.div<{isDark:boolean}>`
    display: flex; align-items: flex-end; justify-content: space-between; padding: 15vh 5%;
    > svg{ width: 35%; }
    > div{ 
        div{ font-size: 40px; line-height: 1.8; margin-bottom:30px;}
        a{ text-decoration: underline;}
        p{ font-size: 25px; line-height: 1.5; color: ${({isDark, theme}) => isDark ? theme.gray4 : theme.gray2 };  }
    }
    span, h1{ display: inline; position: relative;}

    ${mediaTablet}{
        flex-wrap: wrap; padding: 10vh 5% 20vh;
        > svg{ width: 80%; margin: 0 auto 60px; order: 1; }
        > div{ order: 2;
            div{ font-size: 25px;}
            p{ font-size: 18px; }
        }
    }
`
const Underline = styled.img`position: absolute; left:0; bottom: -10px;`


const Wrapper = styled.div`
    position: relative; margin: 7rem 0; line-height: 1.5; overflow-x: hidden;
    ${mediaTablet}{ text-align: left;}
`
const ArticleTxt = styled.article`
        h2{margin-bottom: 40px; font-size: 28px; font-weight:500; padding: 0 5%;}
        div{ margin: 25px 0 0; font-size: 18px; padding: 0 5%; color: ${(props)=> props.theme.gray5};}
        p{ padding: 0 0 10px; line-height: 1.8;}
        span{ display: block;}
        b{ font-weight: 600;}

        ${mediaTablet}{
            :is(h2, div){  padding: 0 5vw;  }
            span{ display: inline;}
        }
`
const MemojiTxt = styled(ArticleTxt)`
        position: absolute; left: 0%; top: 0%; width: 100%;
        ${mediaTablet}{ position: relative;}
`
const Memoji = styled.p`
    display: flex; align-items: baseline; justify-content: center; width: 100%; margin: 100px auto 0;
    img{ width: 30%; margin: 0 2%;
        &:nth-child(1){ opacity: 0.1;}
        &:nth-child(2){ opacity: 0.1;}
    }

    ${mediaTablet}{
        margin: 30px auto 0;
        img{ 
            width: 47%;
            &:nth-child(1){order:1; opacity: 1;}
            &:nth-child(2){order:3; opacity: 1;}
            &:nth-child(3){order:2;}
        }
    }
    
`
const Wrapper2 = styled(Wrapper)`
    padding: 8rem 0%; position: relative; z-index: 10;
    display: flex; align-items: center; justify-content: space-between;
    > article{ width: 70%; padding: 0;
        img{display: none;}
    }
    > img{ width: 30%; margin: 20px 5%; box-shadow: 0px 10px 30px rgba(0,0,0,0.3); border-radius: 15px; }

    ${mediaTablet}{ 
        flex-direction: column;
        > article{ width: 100%; order: 1; 
            img{display: block; width: 80%; margin: 30px auto;}
        }
        > img{ display:none;}
        h2{ span{ display: block;} }
    }
`
const BgImgWrap = styled.div<{isDark: boolean}>`
    position: relative; overflow-x: hidden; -ms-overflow-style: none;
    &::-webkit-scrollbar{ display:none; }

    ul{  opacity: ${({isDark}) => isDark ? 0.1 : 0.3 }; width: 100%; }
`
const BgImgs = styled(motion.img)`
    position: absolute; left: 0; top: 0; box-shadow: 5px 10px 15px rgba(0,0,0,0.2); border-radius: 15px;
`
const BgImg1 = styled(BgImgs)`width:25%; left: 20%; top: 20%; ${mediaTablet}{left: 10%; width: 40%; top: 25%;}`
const BgImg2 = styled(BgImgs)`width: 27%; left: 10%; top: 32%; ${mediaTablet}{width: 40%; left: -5%; top: 33%;}`
const BgImg3 = styled(BgImgs)`width: 25%; left: 0%; top: 45%; ${mediaTablet}{width: 40%; left: -10%; top: 55%;}`
const BgImg4 = styled(BgImgs)`width: 20%; left: 20%; top: 65%; ${mediaTablet}{width: 35%; left: 5%; top: 70%;}`
const BgImg5 = styled(BgImgs)`width: 20%; left: 25%; top: 0%; ${mediaTablet}{width: 50%; left: 30%;} top: 80%;`
const BgImg6 = styled(BgImgs)`width: 21%; left: 55%; top: 74%; ${mediaTablet}{width: 35%; top: 70%;}`
const BgImg7 = styled(BgImgs)`width: 26%; left: 68%; top: 62%; ${mediaTablet}{width: 60%; top: 58%;}`
const BgImg8 = styled(BgImgs)`width: 17%; left: 80%; top: 34%; ${mediaTablet}{width: 40%; top: 30%;}`
const BgImg9 = styled(BgImgs)`width: 25%; left: 60%; top: 22%; ${mediaTablet}{width: 40%; left: 60%; top: 20%;}`


const fadeInUp = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: -50 , transition: { duration: 1, ease: "easeOut", delay: 0.3, } },
   
}

function Intro(){

    const isDark = useRecoilValue(isDarkAtom);
    const theme = useTheme();

    return(
        <IntroWrap>

            <Title isDark={isDark}>
                <div>
                    <div>반갑습니다!<br/>저는 좋은 디자인을 구별할 줄 알고<br/>
                        <span>유저 친화적인 서비스<Underline src="/asset/intro/title_1.svg" alt="point1"/></span>를 만드는<br/>
                        <h1>프론트엔드 개발자<Underline src="/asset/intro/title_2.svg" alt="point2"/></h1> 입니다.
                    </div>
                    <p>저에게 관심 있으시다면 <a href="tel:+821044300820">커피챗</a>해요! ☕️<br/>또는&nbsp;
                    <Link to="https://www.notion.so/Kwons0-dc7721815f594e4a8c26489e01acbc5e" target="_black">Notion</Link> /&nbsp;
                    <Link to="https://github.com/kwons0" target="_black">GitHub</Link> 에서 저를 만나보세요.</p>

                </div>
                <MAINIMG color={isDark ? "#a8a8a8" : theme.textColor}/>
            </Title>
            <Wrapper>
                <MemojiTxt>
                    <h2>모든 시작이<br/> 하나의 길을 만들다.</h2>
                    <div>
                        <p>
                            <span>영상/연출 PD, 웹 디자이너, 그리고 프론트엔드 개발자로서</span>
                            <span><b>다양한 분야를 경험하며 비즈니스 전반에 대한 이해를 넓혀왔습니다.</b></span>
                        </p>
                        <p><span>이를 바탕으로 문제를 정의하고 기술적인 해결책을 도출하며,</span><span>주도적으로 목표를 달성하기 위해 노력해왔습니다.</span></p>
                        <p><span>앞으로도 이러한 경험을 바탕으로</span><span>더 나은 해결책을 모색하며 성장해 나가고자 합니다.</span></p>
                    </div>
                </MemojiTxt>
                <Memoji>
                    { isDark ? (
                        <>
                            <img src="/asset/intro/m_dark1.png" alt="memoji"/>
                            <img src="/asset/intro/m_dark2.png" alt="memoji"/>
                            <img src="/asset/intro/m_dark3.png" alt="memoji"/>
                        </>
                    ):(
                        <>
                            <img src="/asset/intro/m_light1.png" alt="memoji"/>
                            <img src="/asset/intro/m_light2.png" alt="memoji"/>
                            <img src="/asset/intro/m_light3.png" alt="memoji"/>
                        </>
                    )}
                </Memoji>
            </Wrapper>
            <BgImgWrap isDark={isDark}>
                <ul>
                    <li><BgImg1 src="/asset/intro/design2.png" alt="design-bg" 
                        variants={fadeInUp} initial="hidden" whileInView="visible"/></li>
                    <li><BgImg2 src="/asset/intro/design3.png" alt="design-bg" 
                        variants={fadeInUp} initial="hidden" whileInView="visible"/></li>
                    <li><BgImg3 src="/asset/intro/design4.png" alt="design-bg" 
                        variants={fadeInUp} initial="hidden" whileInView="visible"/></li>
                    <li><BgImg4 src="/asset/intro/design5.png" alt="design-bg" 
                        variants={fadeInUp} initial="hidden" whileInView="visible"/></li>
                    <li><BgImg5 src="/asset/intro/design6.png" alt="design-bg" 
                        variants={fadeInUp} initial="hidden" whileInView="visible"/></li>
                    <li><BgImg7 src="/asset/intro/design8.png" alt="design-bg" 
                        variants={fadeInUp} initial="hidden" whileInView="visible"/></li>
                    <li><BgImg6 src="/asset/intro/design7.png" alt="design-bg" 
                        variants={fadeInUp} initial="hidden" whileInView="visible"/></li>
                    <li><BgImg9 src="/asset/intro/design10.png" alt="design-bg" 
                        variants={fadeInUp} initial="hidden" whileInView="visible"/></li>
                    <li><BgImg8 src="/asset/intro/design9.png" alt="design-bg" 
                        variants={fadeInUp} initial="hidden" whileInView="visible"/></li>
                </ul>
                <Wrapper2>
                    <img src="/asset/intro/design1.png" alt="design"/>
                    <ArticleTxt>
                        <h2><span>디자인을 이해하는 </span><span>개발자의 협업 방식.</span></h2>
                        <div>
                            <p>
                                <span>디자이너로서의 경험을 바탕으로</span>
                                <span>놓치기 쉬운 부분을 찾아내고, 개선된 방향을 제안하며</span>
                                <span><b>최고의 사용자 경험</b>을 만들어가는 데 집중합니다.</span>
                            </p>
                            <img src="/asset/intro/design1.png" alt="design"/>
                            <p>
                                <span>좋은 디자인을 식별하고 구현할 수 있는 개발자는</span>
                                <span><b>더 나은 결과를 만들어낼 무한한 가능성</b>을 가지고 있다고 믿습니다!</span>
                            </p>
                        </div>
                    </ArticleTxt>
                </Wrapper2>
            </BgImgWrap>
        </IntroWrap>
    )
}
export default Intro;
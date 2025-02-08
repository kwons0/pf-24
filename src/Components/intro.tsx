import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atom";
import { breakpoints } from "../theme";
import { animate, delay, motion } from "framer-motion";


const mediaTablet = `@media (max-width: ${breakpoints.tablet})`;


const IntroWrap = styled.div`margin: 100px auto 25%; ${mediaTablet}{ margin: 5vw auto;}`
const Title = styled.h1`
    text-align: center; line-height: 1.4;
    span{ color: ${(props)=> props.theme.gray5}; font-size: 20px; font-weight: 500;}
    b{ color: ${(props)=> props.theme.mainColor}; font-size: 30px; font-weight: 600;}
    ${mediaTablet}{ 
        text-align: left; padding: 0 5vw;
        span{ font-size: 18px;}
        b{ font-size: 25px;}
    }
`;
const Wrapper = styled.div`
    text-align: center; margin: 7rem 0; line-height: 1.5; overflow-x: hidden;
    ${mediaTablet}{ text-align: left;}

    h2{ font-size: 22px; font-weight:500; ${mediaTablet}{ padding: 0 5vw; } }
    div{ margin: 25px 0 60px; color: ${(props)=> props.theme.gray5}; ${mediaTablet}{ padding: 0 5vw; }}
`
const Memoji = styled.p`
    display: flex; align-items: baseline; justify-content: center; width: 100%;
    max-width: 700px; margin: 0 auto;
    img{ width: 30%; margin: 0 2%;}

    ${mediaTablet}{
        img{ 
            width: 47%;
            &:nth-child(1){order:1;}
            &:nth-child(2){order:3;}
            &:nth-child(3){order:2;}
        }
    }
    
`
const Wrapper2 = styled(Wrapper)`
    margin: 11rem 0%; position: relative; z-index: 10;
    ${mediaTablet}{ 
        h2{ span{ display: block;} }
    }
    div{ margin: 25px 0; }
    img{ padding: 0; width: 80%; max-width: 380px; margin: 20px auto; box-shadow: 0px 10px 30px rgba(0,0,0,0.3); border-radius: 15px; 
        ${mediaTablet}{ margin: 20px 5vw; }
    }
`
const BgImgWrap = styled.div<{isDark: boolean}>`
    position: relative; overflow-x: hidden;
    ul{ 
        opacity: ${({isDark}) => isDark ? 0.1 : 0.3 }; width: 100%; 
    }
`
const BgImgs = styled(motion.img)`
    position: absolute; left: 0; top: 0; box-shadow: 5px 10px 15px rgba(0,0,0,0.2); border-radius: 0.5rem;
`
const BgImg1 = styled(BgImgs)`width:25%; left: 10%; top: 22%; ${mediaTablet}{width: 40%; top: 25%;}`
const BgImg2 = styled(BgImgs)`width: 27%; left: 2%; top: 34%; ${mediaTablet}{width: 40%; left: -5%; top: 35%;}`
const BgImg3 = styled(BgImgs)`width: 23%; left: 2%; top: 47%; ${mediaTablet}{width: 40%; left: -10%; top: 55%;}`
const BgImg4 = styled(BgImgs)`width: 18%; left: 14%; top: 68%; ${mediaTablet}{width: 30%; top: 72%;}`
const BgImg5 = styled(BgImgs)`width: 28%; left: 25%; top: 50%; ${mediaTablet}{width: 50%; left: 30%;} top: 80%;`
const BgImg6 = styled(BgImgs)`width: 21%; left: 55%; top: 70%; ${mediaTablet}{width: 30%; top: 70%;}`
const BgImg7 = styled(BgImgs)`width: 32%; left: 68%; top: 60%; ${mediaTablet}{width: 50%; top: 58%;}`
const BgImg8 = styled(BgImgs)`width: 22%; left: 80%; top: 30%; ${mediaTablet}{width: 40%; top: 30%;}`
const BgImg9 = styled(BgImgs)`width: 25%; left: 60%; top: 22%; ${mediaTablet}{width: 30%; left: 60%; top: 20%;}`


const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 , transition: { duration: 1, ease: "easeOut", delay: 0.7, } },
   
}

function Intro(){

    const isDark = useRecoilValue(isDarkAtom);

    return(
        <IntroWrap>
            <Title><span>Becoming a</span><br/><b>Frontend Developer</b></Title>
            <Wrapper>
                <h2>모든 시작이 하나의 길을 만들다</h2>
                <div>신문방송학을 전공하며 영상과 연출 PD로 활동했고, 시각디자인학부를 부전공했습니다.<br/>이후 웹 디자이너로 활동하며 디자인 감각을 다져왔습니다.<br/>이런 경험을 발판으로 2021년부터는 프론트엔드 개발자로서 새로운 길에 도전하고 있습니다.</div>
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
                    <h2><span>디자인을 이해하는 </span><span>개발자의 협업 방식</span></h2>
                    <div>디자이너로서의 경험을 활용해 디자인 시안에서 놓치기 쉬운 부분을 찾아내고,<br/>톤앤매너를 유지하면서도 개선된 방향을 제안합니다.</div>
                    <img src="/asset/intro/design1.png" alt="design"/>
                    <div>좋은 디자인을 식별하고 이를 구현할 수 있는 개발자는<br/>더 나은 결과를 만들어낼 무한한 가능성을 가지고 있다고 믿습니다.</div>
                </Wrapper2>
            </BgImgWrap>
        </IntroWrap>
    )
}
export default Intro;
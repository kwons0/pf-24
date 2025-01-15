import styled from "styled-components";

const Title = styled.h1`
    text-align: center; line-height: 1.4;
    span{ color: ${(props)=> props.theme.gray5}; font-size: 20px; }
    b{ color: ${(props)=> props.theme.mainColor}; font-size: 35px; font-weight: 600;}
`;
const Wrapper = styled.div`
    text-align: center; margin: 7rem 0; line-height: 1.5;
    h2{ font-size: 25px;}
    div{ margin: 25px 0 70px; color: ${(props)=> props.theme.gray5}; }
    img{ padding: 0 10%;}
`
const Wrapper2 = styled(Wrapper)`
    margin: 18rem 0%;
    div{ margin: 25px 0; }
    img{ padding: 0 34%; }
`
const BgImgWrap = styled.div`
    position: relative;
    ul{ opacity: 0.3;}
`
const BgImgs = styled.img`width:25%; position: absolute; left: 0; top: 0;`
const BgImg1 = styled(BgImgs)`left: 10%; top: -5%;`
const BgImg2 = styled(BgImgs)`width: 27%; left: 2%; top: 30%;`
const BgImg3 = styled(BgImgs)`width: 23%; left: 2%; top: 50%;`
const BgImg4 = styled(BgImgs)`width: 18%; left: 14%; top: 80%;`
const BgImg5 = styled(BgImgs)`width: 28%; left: 25%; top: 108%;`
const BgImg6 = styled(BgImgs)`width: 21%; left: 55%; top: 90%;`
const BgImg7 = styled(BgImgs)`width: 23%; left: 72%; top: 78%;`
const BgImg8 = styled(BgImgs)`width: 18%; left: 80%; top: 22%;`
const BgImg9 = styled(BgImgs)`width: 25%; left: 60%; top: -3%;`


function Intro(){
    return(
        <div>
            <Title><span>Becoming a</span><br/><b>Frontend Developer</b></Title>
            <Wrapper>
                <h2>모든 시작이 하나의 길을 만들다</h2>
                <div>신문방송학을 전공하며 영상과 연출 PD로 활동했고, 시각디자인학부를 부전공했습니다.<br/>이후 웹 디자이너로 활동하며 디자인 감각을 다져왔습니다.<br/>이런 경험을 발판으로 2021년부터는 프론트엔드 개발자로서 새로운 길에 도전하고 있습니다.</div>
                <img src="/asset/intro/memoji_dark.png" alt="memoji"/>
            </Wrapper>
            <BgImgWrap>
                <Wrapper2>
                    <h2>디자인을 이해하는 개발자의 협업 방식</h2>
                    <div>디자이너로서의 경험을 활용해 디자인 시안에서 놓치기 쉬운 부분을 찾아내고,<br/>톤앤매너를 유지하면서도 개선된 방향을 제안합니다.</div>
                    <img src="/asset/intro/design1.png" alt="design"/>
                    <div>좋은 디자인을 식별하고 이를 구현할 수 있는 개발자는<br/>더 나은 결과를 만들어낼 무한한 가능성을 가지고 있다고 믿습니다.</div>
                </Wrapper2>
                <ul>
                    <li><BgImg2 src="/asset/intro/design3.png" alt="design-bg"/></li>
                    <li><BgImg1 src="/asset/intro/design2.png" alt="design-bg"/></li>
                    <li><BgImg3 src="/asset/intro/design4.png" alt="design-bg"/></li>
                    <li><BgImg4 src="/asset/intro/design5.png" alt="design-bg"/></li>
                    <li><BgImg5 src="/asset/intro/design6.png" alt="design-bg"/></li>
                    <li><BgImg7 src="/asset/intro/design8.png" alt="design-bg"/></li>
                    <li><BgImg6 src="/asset/intro/design7.png" alt="design-bg"/></li>
                    <li><BgImg9 src="/asset/intro/design10.png" alt="design-bg"/></li>
                    <li><BgImg8 src="/asset/intro/design9.png" alt="design-bg"/></li>
                </ul>
                
            </BgImgWrap>
        </div>
    )
}
export default Intro;
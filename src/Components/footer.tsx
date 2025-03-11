import styled from "styled-components";
import { breakpoints, MAIL_ADDRESS, PHONE_NUMBER } from "../lib/constants";

const mediaTablet = `@media (max-width: ${breakpoints.tablet})`;

const FooterBox = styled.footer`
    padding: 10% 0; margin: 0 5%; border-top: 1px solid ${(props)=>props.theme.gray1};
    display: flex; align-items: flex-end; justify-content: space-between;
    ${mediaTablet}{ display: block;}
`
const Left = styled.div`
    div{
        font-size: 25px; font-weight: 600; position: relative;
        img{
            position: absolute; right: -20%; top: -100%; width: 28%; z-index: 2; transform: rotate(14deg);
            ${mediaTablet}{ right: 0; top: 70%;}
        }
    }
    p{ color: ${(props)=>props.theme.gray4}; padding-top: 20px; line-height:1.5;}
`
const Right = styled.div`
    text-align: right;
    ${mediaTablet}{ text-align: left; margin: 40px 0;}

    h4{ font-size: 18px;
        span{ font-size: 14px; color: ${(props) => props.theme.gray3}; padding-left: 5px;}
    }
    ul{
        font-size: 14px; line-height: 1.7; color: ${(props) => props.theme.gray4}; margin-top: 10px;
    }
`

function Footer(){
    return(
        <FooterBox>
            <Left>
                <div>I appreciate your time and interest!<img src="asset/svg/deco2.svg" alt="deco"/></div>
                <p>관심 가져주셔서 감사합니다!<br/>좋은 인연으로 이어지길 바라겠습니다.</p>
            </Left>
            <Right>
                <h4>권서영<span>kwon seo young</span></h4>
                <ul>
                    <li><a href={"mailto:"+MAIL_ADDRESS}>📧&nbsp;&nbsp;{MAIL_ADDRESS}</a></li>
                    <li><a href={"tel:"+PHONE_NUMBER.replace(/[ .]/g, "")}>📞 {PHONE_NUMBER}</a></li>
                </ul>
            </Right>
        </FooterBox>
    )
}
export default Footer;
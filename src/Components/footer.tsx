import styled from "styled-components";
import { MAIL_ADDRESS, PHONE_NUMBER } from "../lib/constants";


const FooterBox = styled.footer`
    padding: 10% 0; margin: 0 5%; border-top: 1px solid ${(props)=>props.theme.gray1};
    display: flex; align-items: flex-end; justify-content: space-between;
`
const Left = styled.div`
    div{ font-size: 25px; font-weight: 600;}
    p{ color: ${(props)=>props.theme.gray4}; padding-top: 20px; line-height:1.5;}
`
const Right = styled.div`
    text-align: right;
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
                <div>I appreciate your time and interest!</div>
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
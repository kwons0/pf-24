import styled from "styled-components";
import { dataItems } from "../data";
import { Link, useLocation, useMatch, useNavigate, useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Page from "./page";
import { useRecoilState } from "recoil";
import { isModalOpen } from "../atom";
import { useEffect } from "react";


const ContainerWrap = styled.div`
    display: flex; align-items: flex-start; justify-content: space-between;
    padding: 0 3vw; margin: 40vw 0 0;
    > ul{width: 48%;}
`
const Container = styled.li`
    background: ${(props)=> props.theme.gray2}; margin: 0 0 8% 0;
    padding: 10%; border-radius: 3vw;
    > h3{ font-size: 45px; color: ${(props) => props.theme.gray4}; font-weight: 700;}
    > p{ color: ${(props) => props.theme.gray5}; padding: 20px 0 40px;}
    > div{ line-height: 1.5;}
`
const CBox = styled(Container)`background: #394A5A;
    ul{ 
        li{ display: flex; align-items: center; margin: 0 0 5% 0;
            &:last-child{ margin-bottom: 0;}
            img{ width: 23px;}
            span{ padding-left: 20px;}
        }
    }
`
const PBox = styled.ul`
    display: flex; align-items: center; justify-content: space-between; margin: 5% 0%; 
    
`
const DotWrap = styled.div`
    display: flex; align-items: baseline; justify-content: space-around;
`
const Dot = styled.span`
    display: inline-block; width: 10px; height: 10px; background: ${(props) => props.theme.gray5};
    border-radius: 50%; margin: 55% 5px 0;
`

const ItemBox = styled.ul`
    padding: 0 3%; display: flex; flex-wrap: wrap;
`
const Item = styled.li`
    text-align: center; display: flex; flex-direction: column; align-items: center;
    p{line-height:1.5;}
`
const Stack = styled(Item)`
    width: 12%; margin: 0 10% 3% 0;
    &:nth-child(5n){ margin-right:0;}
    p{ font-size: 12px; padding: 15px 0;}
`
const Project1 = styled(Stack)<IProjectPops>`
    width: 22%; margin: 3% 17% 5% 0;
    &:nth-child(3n){ margin-right:0;}
    p{ font-size: 16px;  padding: 18px 0;}
    img{border-radius: 15px;}
`
interface IProjectPops {
    layoutId: string
}


function Box(){

    const stackItems = dataItems
    .filter(data => data.name === "stack")
    .flatMap(data => data.item);

    const project1Items = dataItems
    .filter(data => data.name === "project1")
    .flatMap(data => data.item);

    const navigate = useNavigate();
    const [ modalOpen, setModalOpen ] = useRecoilState(isModalOpen)

    useEffect(() => {
        setModalOpen(false)
    }, [])

    const onProjectClick = ( url: string ) => {
        navigate(`/project/${url}`, { state: { modal: true } })
        setModalOpen(true)
    }

    return(
        <div>
            <ContainerWrap>
                <ul>
                    <Container>
                        <h3>STACK</h3>
                        <p>A hub for those who married technology with the liberal arts</p>
                        <ItemBox>
                            {
                                stackItems.map( (data, idx) => (
                                    <Stack key={idx}>
                                        {
                                            data.img !== "" ? ( <>
                                                <img src={"/asset/intro/svg/"+data.img+".svg"} alt={data.img}/>
                                                <p>{data.title}</p>
                                            </> ) : null
                                        }
                                    </Stack>
                                ))
                            }
                        </ItemBox>
                    </Container>
                    <Container>
                        <h3>Project(2)</h3>
                        <p>2021.11 ~ 2024.08 실무 협업</p>
                        <PBox>
                            <li><img src="/asset/intro/svg/project2-1.svg" alt="brand-l"/></li>
                            <li><img src="/asset/intro/svg/project2-2.svg" alt="brand-g"/></li>
                            <li><img src="/asset/intro/svg/project2-3.svg" alt="brand-w"/></li>
                            <li><img src="/asset/intro/svg/project2-4.svg" alt="brand-s"/></li>
                            <li><DotWrap><Dot/><Dot/><Dot/></DotWrap></li>
                            <li><img src="/asset/intro/svg/arrow.svg" alt=""/></li>
                        </PBox>
                        <div>속옷 브랜드, 반려동물 브랜드, 헤어케어 브랜드 등<br/>약 10개 브랜드 이야기</div>
                    </Container>
                </ul>
                <ul>
                    <Container>
                        <h3>Hello,</h3>
                        <p></p>
                        <div>
                            반갑습니다! 저는 프론트엔드 개발자 권서영입니다.<br/><br/>
                            UX 설계부터 디자인, 개발까지 다양한 단계를 직접 경험하며 각 분야를 깊이 이해할 수 있었고, 이를 통해 프로젝트의 흐름을 파악하고 원활히 진행되도록 이끌어갈 수 있는 역량을 갖추게 되었습니다.<br/><br/>
                            좋은 디자인을 구별할 수 있을 뿐만 아니라 그것을 구현할 수 있는 개발자는 무한한 가능성을 가지고 있다고 믿습니다.<br/><br/>
                            저에게 관심이 있으시다면 언제든지 연락 주세요. 기대하고 있겠습니다! 💥
                        </div>
                    </Container>
                    <CBox>
                        <ul>
                            <li><img src="/asset/intro/svg/mail.svg" alt="mail"/><span>kwons0128@gmail.com</span></li>
                            <li><img src="/asset/intro/svg/phone.svg" alt="phone"/><span>+82 10.4430.0820</span></li>
                            <li><img src="/asset/intro/svg/github.svg" alt="github"/><span>https://github.com/kwons0</span></li>
                        </ul>
                    </CBox>
                    <Container>
                        <h3>Project(1)</h3>
                        <p>A hub for those who married technology with the liberal arts</p>
                        <ItemBox>
                            {
                                project1Items.map( (data, idx) => (
                                    <Project1 key={idx}
                                        onClick={() => onProjectClick(data.href)}
                                        layoutId={data.href}
                                    >
                                        <img src={"/asset/intro/svg/"+data.img+".svg"} alt={data.img}/>
                                        <p>{data.title}</p>
                                    </Project1>
                                ))
                            }
                        </ItemBox>
                    </Container>
                    <Container>
                        <h3>Project(3)</h3>
                        <p>2021.04 ~ 2021.11 작업 개인 프로젝트</p>
                        <PBox>
                            <li><img src="/asset/intro/svg/project3-1.svg" alt="21-pf"/></li>
                            <li><img src="/asset/intro/svg/project3-2.svg" alt="pixar"/></li>
                            <li><img src="/asset/intro/svg/project3-3.svg" alt="pizzahut"/></li>
                            <li><img src="/asset/intro/svg/project3-4.svg" alt="market"/></li>
                            <li><DotWrap><Dot/><Dot/><Dot/></DotWrap></li>
                            <li><img src="/asset/intro/svg/arrow.svg" alt=""/></li>
                        </PBox>
                    </Container>
                </ul>
            </ContainerWrap>
            { modalOpen && <Page/> }
        </div>
    )
}
export default Box;
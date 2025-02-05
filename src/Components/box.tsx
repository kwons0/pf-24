import styled, { useTheme } from "styled-components";
import { dataItems } from "../data";
import { Link, useLocation, useMatch, useNavigate, useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Page from "./page";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom, isModalOpen } from "../atom";
import { useEffect } from "react";
import { ARROW, CURSOR, DARKTHEME, GITHUB, LIGHTTHEME, LINKICON, MAIL, NOTION, PHONE } from "./svg";
import { breakpoints, darkTheme, lightTheme } from "../theme";


const TitleWrap = styled.div`
    padding: 0 5%;
    @media (max-width: ${breakpoints.tablet}) { padding: 0 8%; }
`
const Sub = styled.div`font-size: 23px; font-weight: 500; padding-bottom: 10px;`
const Create = styled.span`
    display: inline-block; position: relative;
    padding: 14px 20px; color: ${(props)=>props.theme.mainColor}; line-height: 1;
    background: #fff; font-weight: 600; font-size: 20px; border-radius: 50px;
`

const Cursor = styled.div`
    position: absolute; right: -25%; bottom: -50%;
    p{ font-size: 12px; color: #fff; padding: 5px 8px; background: ${(props)=>props.theme.mainColor};
        margin: -8px 0 0 15px; font-weight: 500;
    }
`
const Coffee = styled.div`color: ${(props)=>props.theme.gray4}; line-height: 1.5; margin: 30px 0 25px;`
const Mode = styled.div`cursor:pointer;`

const ContainerWrap = styled.div`
    display: flex; flex-direction: column; align-items: center; justify-content: flex-start;
    height: 1900px; flex-wrap: wrap; padding: 0 3vw; margin: 0;
    @media (max-width: ${breakpoints.tablet}) { display:block; height: fit-content; padding: vw 3vw; }

    > ul{width: 48%;}
`
const Container = styled.li<{isDark: boolean}>`
    background: ${({isDark})=> isDark ? "#ffffff1f" : "#FFFFFF"}; 
    padding: 5%; margin: 0 0 5% 0; border-radius: 3vw; width: 46%;
    position: relative;
    > h3{ 
        font-size: 45px; color: ${(props)=> props.theme.textColor+"33"};  font-weight: 700;
        position: sticky; top: 20px;
    }
    > p{ color: ${({theme, isDark})=> isDark ? theme.gray5 : theme.gray3};
        padding: 20px 0 40px;}
    > div{ line-height: 1.5;}
    @media (max-width: ${breakpoints.tablet}) { width: 90%; margin: 5% auto;}
`
const Container1 = styled(Container)`order: 4;
height: fit-content;
    @media (max-width: ${breakpoints.tablet}) { order: 1; }
`;
const Container2 = styled(Container)`order: 1; margin-top: 250px;
    @media (max-width: ${breakpoints.tablet}) { order: 3; margin-top: 0;}
`;
const Container3 = styled(Container)`order: 6;
    @media (max-width: ${breakpoints.tablet}) { order: 4; }
`;
const Container4 = styled(Container)`order: 2;
    @media (max-width: ${breakpoints.tablet}) { order: 5; }
`;
const Container5 = styled(Container)`order: 7;
    @media (max-width: ${breakpoints.tablet}) { order: 6; }
`;
const EmptyContainer = styled.div`
    height: 300px; order: 3;
    @media (max-width: ${breakpoints.tablet}) { display:none;}
`
const CBox = styled(Container)`
    background: ${({isDark}) => isDark ? "#394A5A" : "#BDDFFF"}; order: 5;
    @media (max-width: ${breakpoints.tablet}) { order: 2; }
    ul{ 
        li{ display: flex; align-items: center; margin: 0 0 5% 0; line-height: 1;
            &:last-child{ margin-bottom: 0; justify-content: space-between;}
            a{ display: flex; align-items: center;}
            svg{ width: 22px;}
            span{ padding-left: 15px;}
            p{ width: 50%;}
        }
    }
`
const PBox = styled.ul`
    display: flex; align-items: center; justify-content: space-between; margin: 5% 0%;
    li{display: flex; align-items: center; margin-right: 1%; }
`
const FaviWrap = styled.li` width: 75%;
    @media screen and (max-width: 1024px ) and (min-width: ${breakpoints.tablet}) { width: 65%; }
    img{margin-right: 4%; width: 25%; }
`
const More = styled.li`justify-content: flex-end; width: 20%;
    @media screen and (max-width: 1024px )and (min-width: ${breakpoints.tablet}) { width: 25%; }
    svg{ width: 2rem;}
`
const DotWrap = styled.div`
    display: flex; align-items: baseline; margin-right: 10%;
`
const Dot = styled.span<{isDark: boolean}>`
    display: inline-block; width: 0.5rem; height: 0.5rem; background: ${({theme, isDark}) => isDark ? theme.gray5 : theme.gray1};
    border-radius: 50%; margin: 2rem 0.2rem 0;
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
    p{ font-size: 12px; padding: 15px 0; line-height: 1.2;}
`
const Project1 = styled(Stack)<IProjectPops>`
    width: 22%; margin: 3% 17% 5% 0; cursor: pointer;
    &:nth-child(3n){ margin-right:0;}
    p{ font-size: 16px;  padding: 18px 0;}
    img{border-radius: 15px;}
`

const Line = styled.div``
const Line1 = styled(Line)``
const Line2 = styled(Line)``

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
    const isDark = useRecoilValue(isDarkAtom)
    const setLightAtom = useSetRecoilState(isDarkAtom)
    const toggleAtom = () => setLightAtom((prev)=>!prev)

    const theme = useTheme();

    return(
        <div>
            <TitleWrap>
                <div>
                    <Sub>Becoming a</Sub>
                    <Create>Frontend Developer
                        <Cursor><CURSOR/><p>Kwons0</p></Cursor>
                    </Create>
                </div>
                <Coffee>재밌게 보셨나요?<br/>저에게 흥미가 있으시다면 커피챗 해요!&nbsp;&nbsp;<LINKICON color={isDark? darkTheme.gray4 : lightTheme.gray4}/></Coffee>
                <Mode onClick={toggleAtom}>{ isDark ? <DARKTHEME/> : <LIGHTTHEME/> }</Mode>
            </TitleWrap>
            <ContainerWrap>
                <Container1 isDark={isDark}>
                    <h3>Hello,</h3>
                    <p></p>
                    <div>
                        반갑습니다! 저는 프론트엔드 개발자 권서영입니다.<br/><br/>
                        UX 설계부터 디자인, 개발까지 다양한 단계를 직접 경험하며 각 분야를 깊이 이해할 수 있었고, 이를 통해 프로젝트의 흐름을 파악하고 원활히 진행되도록 이끌어갈 수 있는 역량을 갖추게 되었습니다.<br/><br/>
                        좋은 디자인을 구별할 수 있을 뿐만 아니라 그것을 구현할 수 있는 개발자는 무한한 가능성을 가지고 있다고 믿습니다.<br/><br/>
                        저에게 관심이 있으시다면 언제든지 연락 주세요. 기대하고 있겠습니다! 💥
                    </div>
                </Container1>
                <CBox isDark={isDark}>
                    <ul>
                        <li><a href="mailto:kwons0128@gmail.com"><MAIL color={isDark ? "#E6E6E6" : theme.gray3}/><span>kwons0128@gmail.com</span></a></li>
                        <li><a href="tel:+821044300820"><PHONE color={isDark ? "#E6E6E6" : theme.gray3}/><span>+82 10.4430.0820</span></a></li>
                        <li>
                            <p><Link to="https://github.com/kwons0" target="_black">
                                <GITHUB color={isDark ? "#E6E6E6" : theme.gray3}/><span>github.com</span>
                            </Link></p>
                            <p><Link to="https://www.notion.so/Kwons0-dc7721815f594e4a8c26489e01acbc5e" target="_black">
                                <NOTION color={isDark ? "#E6E6E6" : theme.gray3}/><span>notion.so</span>
                            </Link></p>
                        </li>
                    </ul>
                </CBox>
                <Container2 isDark={isDark}>
                    <h3>STACK</h3>
                    <p>A hub for those who married technology with the liberal arts</p>
                    <ItemBox>
                        {
                            stackItems.map( (data, idx) => (
                                <Stack key={idx}>
                                    {
                                        data.img !== "" ? ( <>
                                            <img src={"/asset/svg/"+data.img+".svg"} alt={data.img}/>
                                            <p>{data.title}</p>
                                        </> ) : null
                                    }
                                </Stack>
                            ))
                        }
                    </ItemBox>
                </Container2>

                <Container3 isDark={isDark}>
                    <h3>Project(1)</h3>
                    <p>A hub for those who married technology with the liberal arts</p>
                    <ItemBox>
                        {
                            project1Items.map( (data, idx) => (
                                <Project1 key={idx}
                                    onClick={() => onProjectClick(data.href)}
                                    layoutId={data.href}
                                >
                                    <img src={"/asset/svg/"+data.img+".svg"} alt={data.img}/>
                                    <p>{data.title}</p>
                                </Project1>
                            ))
                        }
                    </ItemBox>
                    <Line1></Line1>
                </Container3>

                <Container4 isDark={isDark}>
                    <h3>Project(2)</h3>
                    <p>2021.11 ~ 2024.08 실무 협업</p>
                    <Link to="https://www.notion.so/875cae638a154088b3f5ab859292c4d4" target="_blank">
                        <PBox>
                            <FaviWrap>
                                <img src="/asset/svg/project2-1.svg" alt="brand-l"/>
                                <img src="/asset/svg/project2-2.svg" alt="brand-g"/>
                                <img src="/asset/svg/project2-3.svg" alt="brand-w"/>
                                <img src="/asset/svg/project2-4.svg" alt="brand-s"/>
                            </FaviWrap>
                            <More>
                                <DotWrap><Dot isDark={isDark}/><Dot isDark={isDark}/><Dot isDark={isDark}/></DotWrap>
                                <ARROW color={isDark? "#E6E6E6" : theme.gray1}/>
                            </More>
                        </PBox>
                    </Link>
                    <div>속옷 브랜드, 반려동물 브랜드, 헤어케어 브랜드 등<br/>1n개 브랜드 이야기</div>
                    <Line2></Line2>
                </Container4>

                <Container5 isDark={isDark}>
                    <h3>Project(3)</h3>
                    <p>2021.04 ~ 2021.11 개인 프로젝트</p>
                    <Link to="https://www.notion.so/8403d8aaadd54eb8bec98af711d242a0" target="_blank">
                        <PBox>
                            <FaviWrap>
                                <img src="/asset/svg/project3-1.svg" alt="21-pf"/>
                                <img src="/asset/svg/project3-2.svg" alt="pixar"/>
                                <img src="/asset/svg/project3-3.svg" alt="pizzahut"/>
                                <img src="/asset/svg/project3-4.svg" alt="market"/>
                            </FaviWrap>
                            <More>
                                <DotWrap><Dot isDark={isDark}/><Dot isDark={isDark}/><Dot isDark={isDark}/></DotWrap>
                                <ARROW color={isDark? "#E6E6E6" : theme.gray1}/>
                            </More>
                        </PBox>
                    </Link>
                </Container5>
            <EmptyContainer/>
            </ContainerWrap>
            { modalOpen && <Page/> }
        </div>
    )
}
export default Box;
import styled, { useTheme } from "styled-components";
import { dataItems } from "../data";
import { Link, useNavigate, } from "react-router-dom";
import Page from "./page";
import { useRecoilState, useRecoilValue } from "recoil";
import { isDarkAtom, isModalOpen } from "../atom";
import { useEffect } from "react";
import { ARROW, GITHUB, MAIL, NOTION, PHONE } from "./svg";
import { breakpoints } from "../theme";
import BoxTitle from "./boxTitle";


const mediaTablet = `@media (max-width: ${breakpoints.tablet})`;

const ContainerWrap = styled.div`
    display: flex; flex-direction: column; align-items: center; justify-content: flex-start;
    height: 1900px; flex-wrap: wrap; padding: 0 3vw; margin: 0;
    ${mediaTablet}{ display:block; height: fit-content; padding: 0 5vw; }

    > ul{width: 48%;}
`
const Container = styled.li<{isDark: boolean}>`
    background: ${({isDark})=> isDark ? "#292929" : "#FFFFFF"}; 
    padding: 5%; margin: 0 0 5% 0; border-radius: 3vw; width: 46%;
    position: relative; height: fit-content;
    ${mediaTablet}{ 
        width: 100%; margin: 5% auto; padding: 6vw 7vw; font-size: 15px;
        &:first-child{ margin-top:0;}
    }
    
    > h3{ 
        font-size: 45px; color: ${(props)=> props.theme.textColor+"44"};  font-weight: 700;
        position: sticky; top: 20px; z-index: 10;
    }
    > p{ color: ${({theme, isDark})=> isDark ? theme.gray5 : theme.gray3};
        padding: 20px 0 45px;}
    > div{ line-height: 1.5;}
`
const Container1 = styled(Container)`order: 4; height: fit-content;
    > p{ padding: 20px 0;}
    ${mediaTablet}{ order: 1; }
`;
const Container2 = styled(Container)`order: 1; margin-top: 250px;
    >p{ padding: 20px 0 55spx;}  
    ${mediaTablet}{ order: 3; margin-top: 0;}
`;
const Container3 = styled(Container)`order: 6;
    ${mediaTablet}{ order: 4; }
`;
const Container4 = styled(Container)`order: 2;
    ${mediaTablet}{ order: 5; }
`;
const Container5 = styled(Container)`order: 7;
    ${mediaTablet}{ order: 6; }
`;
const EmptyContainer = styled.div`
    height: 280px; order: 3;
    ${mediaTablet}{ display:none;}
`
const CBox = styled(Container)`
    background: ${({isDark}) => isDark ? "#bddfff2b" : "#BDDFFF"}; order: 5;
    ${mediaTablet}{ order: 2; }
    ul{ 
        li{ display: flex; align-items: center; margin: 0 0 5% 0; line-height: 1;
            &:last-child{ margin-bottom: 0; justify-content: space-between;}
            a{ display: flex; align-items: center;}
            svg{ width: 18px; height: 18px; ${mediaTablet}{ width: 16px; height: 16px;}}
            span{ padding-left: 15px; ${mediaTablet}{ padding-left: 10px;}}
            p{ width: 50%;}
        }
    }
`
const PBox = styled.ul`
    display: flex; align-items: center; justify-content: space-between; margin: 0 0 7%;
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
    width: 12%; margin: 0 10% 5% 0;
    &:nth-child(5n){ margin-right:0;}
    p{ font-size: 12px; padding: 15px 0; line-height: 1.2;}
`
const Project1 = styled(Stack)<IProjectPops>`
    width: 22%; margin: 3% 17% 10% 0; cursor: pointer;
    &:nth-child(3n){ margin-right:0;}
    &:nth-child(5n){margin-right: 17%;}
    p{ font-size: 16px;  padding: 18px 0 0;}
    img{border-radius: 13px;}
`

const Line = styled.div<{isDark: boolean}>`
    position: absolute; width: 25%; height: 1px; 
    border: 3px dashed ${({isDark})=> isDark ? "#292929" : "#FFFFFF"}; outline-offset: 5px;
    ${mediaTablet}{ display: none;}
`
const Line1 = styled(Line)`left: -15%; bottom: 40%; transform: rotate(-45deg);`
const Line2 = styled(Line)`right: -15%; bottom: 0; transform: rotate(45deg);`


interface IProjectPops {
    layoutId: string
}



function Box(){

    // mapping items
    const stackItems = dataItems
    .filter(data => data.name === "stack")
    .flatMap(data => data.item);

    const project1Items = dataItems
    .filter(data => data.name === "project1")
    .flatMap(data => data.item);

    // 모달 열기*닫기
    const navigate = useNavigate();
    const [ modalOpen, setModalOpen ] = useRecoilState(isModalOpen)

    const onProjectClick = ( url: string ) => {
        navigate(`/project/${url}`, { state: { modal: true } })
        setModalOpen(true)
    }
    const isDark = useRecoilValue(isDarkAtom);
    const theme = useTheme();

    useEffect(() => {
        setModalOpen(false)
    }, [])


    return(
        <div>
            <BoxTitle/>
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
                    <Line1 isDark={isDark}></Line1>
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
                    <Line2 isDark={isDark}></Line2>
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
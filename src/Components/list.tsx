
import styled, { useTheme } from "styled-components";
import { dataItems, pjItems, categories } from "../lib/data";
import { Link, useNavigate, } from "react-router-dom";
import Page from "./page";
import { useRecoilState, useRecoilValue } from "recoil";
import { isDarkAtom, isModalOpen } from "../atom";
import { useEffect } from "react";
import { breakpoints } from "../lib/constants";

const mediaTablet = `@media (max-width: ${breakpoints.tablet})`;

const ListBox = styled.div`margin: 20% 0 10%;`
const ProjectWrap = styled.div<IProjectPops>`
    width: 100%; padding: 5%;
    display: flex; align-items: center; justify-content: space-between;
    &:nth-child(even){
        ul{ order: 2; padding-left: 5%;}
        img{ order: 1;}
    }
    img{width: 50%;}
`

const PjTitle = styled.li<{isDark: boolean}>`
    p{ color: ${(props)=> props.theme.gray3 }; padding-bottom: 15px;}
    div{ font-size: 25px; font-weight: 600;}
`
const PjDesc = styled.li`margin: 30px 0 50px; width: 70%; line-height: 1.5; font-size:18px;`
const PjBtn = styled.span<{isDark: boolean}>`
    display: inline-block; padding: 10px 20px; line-height: 1; cursor: pointer; border-radius: 50px;
    background: ${({theme,isDark})=> isDark ? theme.gray2 : "#E5E5E5"};
`

interface IProjectPops {
    layoutId: string
}




function List(){

    const isDark = useRecoilValue(isDarkAtom);
    const projectItems = pjItems.flatMap(data => data.item);

    // 모달 열기*닫기
    const navigate = useNavigate();
    const [ modalOpen, setModalOpen ] = useRecoilState(isModalOpen)

    const onProjectClick = ( url: string ) => {
        navigate(`/project/${url}`, { state: { modal: true } })
        setModalOpen(true)
    }

    useEffect(() => {
        setModalOpen(false)
    }, [])


    return(
        <ListBox>
            <div>
                {
                    projectItems.map( (data, idx) => (
                        <ProjectWrap key={idx}
                            layoutId={data.href}
                        >
                            <ul>
                                <PjTitle isDark={isDark}>
                                    <p>{data.group}</p>
                                    <div>{data.title}</div>
                                </PjTitle>
                                <PjDesc>{data.desc}</PjDesc>
                                <li>
                                    <PjBtn 
                                        isDark={isDark}
                                        onClick={() => onProjectClick(data.href)}
                                    >view detail</PjBtn>
                                </li>
                            </ul>
                            <img src={"asset/intro/"+data.img+".png"} alt={data.img} onClick={() => onProjectClick(data.href)}/>
                        </ProjectWrap>
                    ))
                }
            </div>

            { modalOpen && <Page/> }
        </ListBox>
    )
}
export default List;
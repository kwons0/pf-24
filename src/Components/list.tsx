
import styled from "styled-components";
import { pjItems } from "../lib/data";
import { useNavigate, } from "react-router-dom";
import Page from "./page";
import { useRecoilState, useRecoilValue } from "recoil";
import { isDarkAtom, isModalOpen } from "../atom";
import { useEffect } from "react";
import { breakpoints } from "../lib/constants";
import { motion } from "framer-motion";

const mediaTablet = `@media (max-width: ${breakpoints.tablet})`;

const ListBox = styled.div`margin: 10% 0;`
const ProjectWrap = styled.div<IProjectPops>`
    width: 100%; padding: 5%;
    display: flex; align-items: center; justify-content: space-between;
    ${mediaTablet}{ flex-direction: column-reverse; margin-bottom: 40px;}

    &:nth-child(even){
        flex-direction: row-reverse;
        ${mediaTablet}{ flex-direction: column-reverse;}
        ul{ padding-left: 5%; }
    }

    ul{
        ${mediaTablet}{ padding: 2%; padding-left: 2% !important; width: 100%;}
        li{ position: relative;}
    }
`

const PjImg = styled(motion.img)`
    width: 50%; cursor: pointer;
    ${mediaTablet}{ width: 100%;}
`
const PjTitle = styled.li<{isDark: boolean}>`
    ${mediaTablet}{ margin-top: 30px;}

    p{ 
        color: ${(props)=> props.theme.gray3 }; padding-bottom: 15px;
        ${mediaTablet}{font-size: 14px; padding-bottom: 8px;}
    }
    div{ 
        font-size: 25px; font-weight: 600;
        ${mediaTablet}{font-size: 20px;}
    }
`
const PjDesc = styled.li`
    margin: 30px 0 50px; width: 70%; line-height: 1.5; font-size:18px;
    ${mediaTablet}{ font-size: 15px; width: 100%; margin: 20px 0;}
`
const PjBtn = styled(motion.span)<{isDark: boolean}>`
    display: inline-block; padding: 10px 20px; line-height: 1; cursor: pointer; border-radius: 50px;
    background: ${({theme,isDark})=> isDark ? theme.gray2 : "#E5E5E5"};
    ${mediaTablet}{ font-size: 13px;}
`
const Deco = styled.img`
    position: absolute; left: 22%; bottom: -78%; width: 26% !important;
    ${mediaTablet}{left: 32%; bottom: -50%;}
`

interface IProjectPops {
    layoutId: string
}

const hoverAnimation = {
    hover : {
        scale: 1.02, translateY: "-1%", translateX: "-1%",
        transition: { type: "spring", damping: 15, mass: 0.5 }
    } 
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
                    projectItems.map( (v, k) => (
                        <ProjectWrap key={k}
                            layoutId={v.href}
                        >
                            <ul>
                                <PjTitle isDark={isDark}>
                                    <p>{v.group}</p>
                                    <div>{v.title}</div>
                                </PjTitle>
                                <PjDesc>{v.desc}</PjDesc>
                                <li>
                                    <PjBtn 
                                        isDark={isDark}
                                        onClick={() => onProjectClick(v.href)}
                                        variants={ {hover : { background: "#1A73E8", color: "#fff" }}} 
                                        whileHover='hover'
                                    >view detail</PjBtn>
                                    { k == 0 ? <Deco src="asset/svg/deco1.svg" alt="deco"/> : null }
                                </li>
                            </ul>
                            <PjImg 
                                src={"asset/intro/"+v.img+".png"} alt={v.img} 
                                onClick={() => onProjectClick(v.href)}
                                variants={hoverAnimation} 
                                whileHover='hover'
                            />
                        </ProjectWrap>
                    ))
                }
            </div>

            { modalOpen && <Page/> }
        </ListBox>
    )
}
export default List;
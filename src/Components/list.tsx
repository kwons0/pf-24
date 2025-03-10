
import styled, { useTheme } from "styled-components";
import { dataItems, pjItems, categories } from "../data";
import { Link, useNavigate, } from "react-router-dom";
import Page from "./page";
import { useRecoilState, useRecoilValue } from "recoil";
import { isDarkAtom, isModalOpen } from "../atom";
import { useEffect } from "react";
import { breakpoints } from "../theme";


const ListBox = styled.div`margin-top: 20%;`
const ProjectWrap = styled.div<IProjectPops>`
    width: 100%; margin: 3% 17% 10% 0; cursor: pointer; text-align: center;
    display: flex; align-items: center; justify-content: space-around;
    p{ font-size: 16px;  padding: 18px 0 0;}
    img{border-radius: 13px; width: 50%;}
`

interface IProjectPops {
    layoutId: string
}




function List(){

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
                            <div>
                                <p>{data.title}</p>
                                <span onClick={() => onProjectClick(data.href)}>view detail</span>
                            </div>
                            <img src={"asset/intro/"+data.img+".png"} alt={data.img}/>
                        </ProjectWrap>
                    ))
                }
            </div>

            { modalOpen && <Page/> }
        </ListBox>
    )
}
export default List;
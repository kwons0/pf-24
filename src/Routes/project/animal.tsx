import styled from "styled-components";
import Cover from "../../Components/cover";
import { NEXTJS, VERCEL } from "../../Components/svg";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../../atom";
import { breakpoints, darkTheme, lightTheme } from "../../theme";


const ProjectBox = styled.div`
    position: relative;  -ms-overflow-style: none; overflow-x: hidden;
    &::-webkit-scrollbar { display: none; }
`
const GrayIcon = styled.img`filter: grayscale(1); width: auto; max-height: 16px;`

const Contents = styled.div`margin: 50px 0 0;`
const Article = styled.div<{pd: string, wd?: string}>`
    line-height: 1.5; padding: ${(props) => props.pd}; width: ${(props)=>props.wd};
    > p{ font-size: 25px; padding-bottom: 20px;}
    @media (max-width: ${breakpoints.tablet}) { width: 100%; }
`
const BgimgWrap = styled.div<{bg: string}>`
    background: url(${(props) => props.bg}); background-size: cover; margin-top: -5px; color: #000;
`
const Flex = styled.div<{space?:string}>`
    display: flex; align-items:flex-start; justify-content: ${(props)=>props.space};
    @media (max-width: ${breakpoints.tablet}) { display: block; }
`
const ImgWd = styled.img<{wd?: string, max?:string}>`
    width: ${(props)=>props.wd}; max-width: ${(props)=>props.max};
`
const Pd5vw = styled.div`padding: 5vw;`
const ImgFlexWrap = styled(Flex)<{pd?: string,mg?: string, wd?: string}>` position: relative;
    padding: ${(props) => props.pd}; margin: ${(props) => props.mg}; width: ${(props)=>props.wd};
    @media (max-width: ${breakpoints.tablet}) { width: 100%; }
`
const Deco = styled.img<{wd: string, left?: string, top?: string, right?: string, bottom?: string}>`
    position: absolute;  width: ${(props)=>props.wd};
    left: ${(props)=>props.left || "auto"}; top: ${(props)=>props.top || "auto"};
    right: ${(props)=>props.right || "auto"}; bottom: ${(props)=>props.bottom || "auto"};
`
const Reverse = styled.div`
    @media (max-width: ${breakpoints.tablet}) { 
        display: flex; flex-direction: column;
        & > * > :first-child{ order: 2};
        & > * > :nth-child(2){ order: 1};
     }
`

function Animal(){
    const isDark = useRecoilValue(isDarkAtom)
    const iconColor = isDark ? darkTheme.textColor : lightTheme.textColor;

    return(
        <ProjectBox>
            <Cover 
                bgimg="/asset/project/pj2/pj2-cover.png" 
                favicon="/asset/project/pj2/pj2-favi.svg"
                title="거래해요! 동물의 숲"
                siteLink="" 
                githubLink="" 
                notionLink="" 
                desc="동물의 숲 캐릭터들이 중고거래 하는 컨셉의 웹 사이트 입니다." 
                contents={ [ "회원가입, 로그인", "내 정보 수정", "글쓰기, 답글 쓰기", "검색" ] }
                date="2024.12, 2주" 
                stacks="Next.js, TypeScript, Tailwindcss" 
                icons={
                    [
                        { Component: NEXTJS, props: { color: iconColor } },
                        { Component: GrayIcon, props: { src: "/asset/svg/typescript.svg" } },
                        { Component: GrayIcon, props: { src: "/asset/svg/tailwind.svg" } },
                        { Component: VERCEL, props: { color: iconColor } },
                      ]
                }
            />
            <Contents>
                <Pd5vw>
                    <img src="/asset/project/pj2/pj2-1.jpg"/>
                    <Article pd="40px 35px">
                        <p>목적에 더한 컨셉</p>
                        <div>당근마켓과 트위터의 기능을 결합한 중고거래 앱을 만들던 중, 단순한 클론처럼 보이지 않도록 차별화된 아이디어를 고민했습니다. 그 결과, 동물의 숲 캐릭터들이 중고거래를 한다는 독창적인 컨셉을 설정했습니다. <br/>
                            또한, ‘모여봐요 동물의 숲’ 로고를 변형하여 ‘거래해요 동물의 숲 - 마켓’이라는 새로운 로고를 직접 제작하였습니다.
                        </div>
                    </Article>
                </Pd5vw>
                <img src="/asset/project/pj2/pj2-bg1.png"/>
                <BgimgWrap bg="/asset/project/pj2/pj2-bg2.png">
                    <ImgFlexWrap pd="0 5vw" space="space-between">
                        <ImgWd wd="32%" src="/asset/project/pj2/pj2-2.jpg"/>
                        <ImgWd wd="32%" src="/asset/project/pj2/pj2-3.jpg"/>
                        <ImgWd wd="32%" src="/asset/project/pj2/pj2-4.jpg"/>
                    </ImgFlexWrap>
                    <Article pd="35px 5vw">
                        <p>회원가입, 로그인</p>
                        <div>사용자가 입력한 정보를 실시간으로 확인하고 관리하여 회원가입/로그인을 진행합니다.<br/>
                            입력된 데이터는 zod 라이브러리를 활용해 유효성을 검사하며, 닉네임 및 이메일 중복 여부를 확인하고, 비밀번호는 bcrypt로 해시 처리됩니다.<br/>
                            실시간 에러 메시지를 표시해 사용자 경험을 개선했으며, 회원가입 완료 시 세션이 생성되고 메인 페이지로 리다이렉션 됩니다. <br/>
                            또한, 컴포넌트는 직관적인 UI와 백그라운드 이미지를 활용해 사용자 친화적인 디자인을 제공합니다.
                        </div>
                    </Article>
                    <Pd5vw>
                        <ImgFlexWrap mg="0 0 100px" space="space-between">
                            <ImgFlexWrap pd="0" mg="0 0 35px" wd="65%" space="space-between">
                                <ImgWd wd="49%" src="/asset/project/pj2/pj2-5.jpg"/>
                                <ImgWd wd="49%" src="/asset/project/pj2/pj2-6.jpg"/>
                            </ImgFlexWrap>
                            <Article pd="0" wd="30%">
                                <Deco wd="100px" right="0" top="-12%" src="/asset/project/pj2/pj2-deco1.png"/>
                                <p>홈</p>
                                <div>홈 화면은 트윗 목록을 보여주고 페이지 이동 기능을 제공합니다. <br/><br/>
                                    초기 화면에서는 최신 트윗 5개를 불러와 표시하며, 각 트윗의 댓글 수와 좋아요 수를 함께 보여줍니다. 사용자는 "이전" 또는 "다음" 버튼을 눌러 추가 트윗을 불러올 수 있으며, 서버에서 해당 페이지에 맞는 데이터를 제공받습니다. 버튼은 더 이상 불러올 트윗이 없을 경우 비활성화됩니다. <br/><br/>
                                    또한, 화면 하단에는 "글쓰기" 버튼이 고정되어 있어 새로운 트윗을 작성할 수 있습니다.
                                </div>
                            </Article>
                        </ImgFlexWrap>
                        <Reverse>
                            <ImgFlexWrap mg="0 0 100px" space="space-between">
                                <Article pd="0" wd="30%">
                                    <p>글쓰기</p>
                                    <div>사용자가 트윗과 이미지를 작성해 게시할 수 있는 페이지 입니다.<br/><br/>
                                        트윗 내용을 입력하거나 이미지를 선택하면, 선택한 이미지는 미리보기로 표시됩니다. 작성한 내용을 서버로 전송하면, 이미지는 저장되고 트윗은 데이터베이스에 등록됩니다. <br/><br/>
                                        게시가 완료되면 작성한 트윗의 상세 페이지로 이동합니다. <br/>
                                        버튼은 트윗 내용이 입력된 경우에만 활성화되도록 하였습니다.
                                    </div>
                                </Article>
                                <ImgFlexWrap pd="0" wd="65%" space="space-between">
                                    <ImgWd wd="49%" src="/asset/project/pj2/pj2-7.jpg"/>
                                    <ImgWd wd="49%" src="/asset/project/pj2/pj2-8.jpg"/>
                                    <Deco wd="200px" right="-10%" bottom="-20%" src="/asset/project/pj2/pj2-deco2.png"/>
                                </ImgFlexWrap>
                            </ImgFlexWrap>
                        </Reverse>
                        <ImgFlexWrap mg="0 0 50px"  space="space-between">
                            <ImgWd wd="30%" max="300px" src="/asset/project/pj2/pj2-9.jpg"/>
                            <Article pd="0" wd="65%">
                                <Deco wd="200px" right="-10%" bottom="-10%" src="/asset/project/pj2/pj2-deco3.png"/>
                                <p>트윗 상세페이지, 댓글 기능</p>
                                <div>트윗 상세 페이지는 트윗과 사용자 간의 다양한 상호작용을 지원합니다.<br/>
                                    작성자의 프로필, 이메일, 트윗 내용, 사진, 작성 시간 등의 상세 정보를 제공하며 댓글 기능도 포함되어 있어 사용자는 댓글을 작성하거나 확인할 수 있습니다. <br/><br/>
                                    댓글 데이터는 서버에서 가져오며, 작성자의 프로필과 댓글 내용, 작성 시간을 함께 표시합니다. 만약 댓글 작성자가 본인일 경우 삭제 버튼이 표시되어 댓글을 삭제할 수 있습니다. 댓글은 데이터베이스에 저장되며, 작성하거나 삭제할 때 새로고침 없이도 실시간으로 업데이트됩니다.<br/><br/>
                                    사용자는 트윗에 좋아요를 추가하거나 취소할 수 있으며 좋아요 상태와 좋아요 수는 서버에서 받아온 데이터를 바탕으로 실시간으로 갱신됩니다. 이 과정에서 Next.js의 캐시 갱신 기능을 사용해 최신 데이터를 유지합니다.<br/><br/>
                                    전체적으로 이 페이지는 동적으로 변하는 데이터를 처리하고, 서버와 클라이언트 간의 긴밀한 연동을 통해 사용자에게 매끄럽고 직관적인 상호작용 경험을 제공합니다. 트윗과 댓글 데이터는 모두 서버에서 가져오고 저장되며, 클라이언트 측에서의 동작(좋아요, 댓글 작성 및 삭제 등)이 즉시 반영됩니다. 이를 통해 사용자는 새로고침 없이도 최신 상태를 확인할 수 있습니다.
                                </div>
                                <ImgFlexWrap mg="20px 0 0"><ImgWd wd="80%" max="300px" src="/asset/project/pj2/pj2-10.jpg"/></ImgFlexWrap>
                            </Article>
                        </ImgFlexWrap>
                    </Pd5vw>
                </BgimgWrap>
                <BgimgWrap bg="/asset/project/pj2/pj2-bg3.png">
                    <Reverse>
                        <ImgFlexWrap pd="100px 5vw 0" space="space-between">
                            <Article pd="0" wd="30%">
                                <p>검색 기능</p>
                                <div>검색 페이지는 사용자가 입력한 검색어에 맞는 트윗과 사용자를 실시간으로 검색할 수 있는 페이지 입니다. <br/><br/>
                                    사용자가 검색어를 입력하면 그에 맞는 트윗만 화면에 필터링하여 표시하고, 검색어가 비어 있으면 결과가 보이지 않게 됩니다. <br/><br/>
                                    트윗은 최신 순으로 정렬되며, 사용자가 입력한 검색어와 일치하는 트윗이나 사용자만 화면에 나타납니다. 또한, 검색창에 포커스가 있을 때는 트윗 검색 결과가 표시되고, 포커스가 없을 때는 실시간 트렌드 화면(static하게 구성)이 표시됩니다. <br/>
                                    이를 통해 사용자는 동적으로 검색 결과를 확인하고, 관련된 트윗과 사용자들을 손쉽게 찾을 수 있습니다.
                                </div>
                            </Article>
                            <ImgFlexWrap pd="0" wd="65%" space="space-between">
                                <ImgWd wd="49%" src="/asset/project/pj2/pj2-11.jpg"/>
                                <ImgWd wd="49%" src="/asset/project/pj2/pj2-12.jpg"/>
                            </ImgFlexWrap>
                        </ImgFlexWrap>
                    </Reverse>
                    <ImgFlexWrap space="center" mg="2vw 8vw 0 0">
                        <Article pd="50px 50px 0 0" wd="40%">
                            <div>미구현된 기능이지만 추후 업데이트를 계획 중인 '상점' 탭은, 사용자가 검색어와 일치하는 상점명을 찾을 수 있도록 도와줍니다. 이 탭을 클릭하면 게시물뿐만 아니라 상점명으로도 검색할 수 있어, 관련 상점을 쉽게 찾을 수 있게 됩니다.</div>
                        </Article>
                        <ImgWd wd="35%" src="/asset/project/pj2/pj2-13.jpg"/>
                        <Deco wd="200px" right="-10%" bottom="10%" src="/asset/project/pj2/pj2-deco4.png"/>
                    </ImgFlexWrap>
                    <Contents><img src="/asset/project/pj2/pj2-bg4.png"/></Contents>
                    <ImgFlexWrap pd="50px 5vw 100px" space="space-between">
                        <ImgFlexWrap pd="0" wd="65%" space="space-between">
                            <ImgWd wd="49%" src="/asset/project/pj2/pj2-14.jpg"/>
                            <ImgWd wd="49%" src="/asset/project/pj2/pj2-15.jpg"/>
                        </ImgFlexWrap>
                        <Article pd="0" wd="30%">
                            <p>상점 정보</p>
                            <div>하단 탭의 [나의 마을] 혹은 트윗 상세보기 페이지에서 [상점 구경가기] 버튼을 누르면 나오는 상점 정보 페이지 입니다.<br/><br/>
                                이 페이지에서는 사용자의 프로필 이미지, 이름, 이메일, 마을 소개 등의 정보가 보여지며, 사용자가 자신의 상점이라면 '정보 수정하기' 버튼을 클릭해 상점 정보를 수정할 수 있는 페이지로 이동할 수 있습니다. 또한, 이 페이지에서는 사용자가 작성한 게시글, 댓글, 좋아요 수를 확인할 수 있습니다.
                            </div>
                        </Article>
                    </ImgFlexWrap>
                    <ImgFlexWrap pd="5px 5vw 100px" space="space-between">
                        <ImgWd wd="32%" src="/asset/project/pj2/pj2-16.jpg"/>
                        <Article pd="0" wd="60%">
                            <p>상점 정보 수정하기</p>
                            <div>나의 마을 페이지에서 [정보 수정하기] 버튼을 통해 나의 상점 정보 수정이 가능합니다.<br/><br/>
                                    사용자는 자신의 이름, 이메일, 비밀번호, 마을 소개 등을 수정할 수 있습니다. <br/>
                                    비밀번호 확인을 통해 입력한 비밀번호가 일치하는지 확인하며, 프로필 사진도 변경할 수 있는데, 파일을 선택하면 미리보기가 제공됩니다.<br/><br/>
                                    사용자가 수정할 내용을 입력하면, 먼저 닉네임과 이메일이 다른 사용자와 중복되지 않는지 확인하고, 비밀번호는 최소한 숫자가 포함되어 있는지, 비밀번호 확인이 일치하는지 검증합니다. 사용자가 새로운 프로필 사진을 선택하면 서버에 저장되고, 기존 사진은 유지됩니다. 그 후, 입력된 정보가 유효한지 검사하고 문제가 없다면 해당 정보를 업데이트합니다.
                            </div>
                        </Article>
                    </ImgFlexWrap>
                </BgimgWrap>
                
                
            </Contents>
        </ProjectBox>
    )
}
export default Animal;
type DataItem = {
    title: string;
    img: string;
    color: string;
}

type CategoryItem = {
    title: string;
    skills: string[];
}


export type SubItem = {
    text: string;
    subContents: string[];
}
type ContentsItem = {
    title: string;
    items: (string | SubItem)[];
}


type ProjectItem = {
    id: string;
    group: string;
    title: string;
    siteLink: string;
    githubLink: string;
    img: string;
    href: string;
    desc: string;
    detail: string;
    date: string;
    rate: string;
    skills: string;
    color: string;
    drive: string;
    contents: ContentsItem[]
}

export const dataItems: DataItem[] = [
    { title: "HTML5", img: "html5", color: "#f18a29"},
    { title: "CSS3", img: "css3", color: "#264DE4"},
    { title: "JavaScript", img: "javascript", color: "#F7DF1E"},
    { title: "TypeScript", img: "typescript", color: "#3376c2"},
    { title: "JSON", img: "json", color: "#a9a9a9"},
    { title: "React.js", img: "reactjs", color: "#7ed8eb"},
    { title: "Next.js", img: "nextjs", color: "#dddddd"},
    { title: "jQuery", img: "jquery", color: "#0f69aa"},
    { title: "SCSS", img: "sass", color: "#CD6799"},
    { title: "tailwindcss", img: "tailwind", color: "#06B6D4"},
    { title: "styled-components", img: "styled-components", color: "#ed92ca"},
    { title: "Framer-motion", img: "framer-motion", color: "#BB4B96"},
    { title: "webpack", img: "webpack", color: "#8acff4"},
    { title: "npm", img: "npm", color: "#CC0000"},
    { title: "Git", img: "git", color: "#DE4C36"},
    { title: "GitHub", img: "github", color: "#5968ba"},
    { title: "Bitbucket", img: "bitbucket", color: "#2684FF"},
    { title: "Figma", img: "figma", color: "#1ABCFE"},
    { title: "Adobe Photoshop", img: "photoshop", color: "#31A8FF"},
    { title: "Adobe Illustrator", img: "illustrator", color: "#FF9A00"},
    { title: "Adobe Premiere Pro", img: "premiere", color: "#9999FF"}
]

export const categories: CategoryItem[] = [
    {
        title: "프론트 실무에 사용했습니다.",
        skills: [ "HTML5", "CSS3", "JavaScript", "jQuery", "JSON", "Git", "Figma", "Bitbucket" ]
    },
    {
        title: "개인 프로젝트에 사용했습니다.",
        skills: [ "JavaScript", "TypeScript", "React.js", "Next.js", "jQuery", "JSON", "HTML5", "CSS3", "SCSS", "tailwindcss", "styled-components", "Framer-motion", "webpack", "npm", "Git", "GitHub", "Figma"]
    },
    {
        title: "끊임없이 공부 중입니다.",
        skills: ["TypeScript", "JavaScript", "React.js", "Next.js"]
    },
    {
        title: "디자인 실무에 사용했습니다.",
        skills: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Adobe Premeiere"]
    },
];


export const pjItems: ProjectItem[] = [
    

    { 
        id: "sbrand",
        group: "협업 프로젝트(실무)",
        title: "S사 자사몰 구축", 
        siteLink: "",
        githubLink: "", 
        img: "/asset/intro/list_sbrand.png", 
        href: "sbrand", 
        desc: "S사 이커머스 사이트의 플랫폼 이관으로 플랫폼 내에서 자사몰을 신규 구축하는 프로젝트 입니다.",
        detail: "고도몰에서 카페24로 플랫폼을 이전하며, 기존 사이트에서 안정적으로 운영되던 기능은 유지하고, 사용자 경험과 운영 효율을 고려해 구조를 새롭게 리디자인한 리뉴얼 프로젝트입니다.",
        date: "2023.5 ~ 2023.08, 3개월" ,
        rate: "개발 100%",
        skills: "HTML5, CSS3, Javascript" ,
        color: "#6981af",
        drive: "https://drive.google.com/file/d/16V8bN2j8JdJMjLwzn5nqBdXzLOpp6xVQ",
        contents: [
            { title: "Key Roles", items: ["주요 역할 및 기여 내용"] },
            { title: "Key Contents", items: [ 
                { 
                    text: '상품 진열 및 프로모션 최적화 기능 개발',
                    subContents: [
                        '한 페이지에서 다양한 카테고리 상품 탐색 기능 구현',
                        '이벤트 페이지에서 상품 구매 여정 간소화'
                    ]
                },
                'SNS로그인 리다이렉트 기능 개선'
            ]},
            { title: "Troubleshooting", items: [ "쿠폰 할인가 미적용 문제와 해결 방법" ]},
            { title: "What I Learned", items: [ "프로젝트를 통해 배운 점" ]},
        ]
    },
    { 
        id: "animal",
        group: "개인 프로젝트", 
        title: "거래해요! 동물의 숲", 
        siteLink: "https://carrot-market-clone-ten.vercel.app/",
        githubLink: "https://github.com/kwons0/carrot-market-clone",
        img: "/asset/intro/list_animal.png", 
        href: "animal", 
        desc: "당근마켓과 트위터의 기능을 결합하며, 단순한 클론이 아닌 차별화된 컨셉을 설정한 중고거래 사이트입니다." ,
        detail: "당근마켓과 트위터의 기능을 결합한 중고거래 사이트를 개발하며, 단순한 클론이 아닌 차별화된 아이디어를 고민했습니다. 그 결과, 동물의 숲 캐릭터들이 중고거래를 한다는 독창적인 컨셉을 설정해 색다른 사용자 경험을 만들었습니다. 또한, 이를 반영한 브랜드 로고도 직접 제작하여 사이트의 개성을 강화했습니다.",
        date: "2024.12, 2주",
        rate: "기획 100%, 디자인 100%, 개발 100%",
        skills: "Next.js, TypeScript, Tailwindcss",
        color: "#039F5C",
        drive: "https://drive.google.com/file/d/1wQ0LJ1NRznPM2U0ISTF4hDR7kN7IyxPP",
        contents: [
            { title: "Userflow", items: ["화면 구성 및 유저플로우"] },
            { title: "Key Contents", items: [ "회원가입, 로그인", "트윗, 댓글 작성하기", "마을 정보 확인/수정하기",]},
            { title: "Troubleshooting", items: [ "좋아요, 댓글 즉시 반영 문제와 해결 과정", "상점 정보 페이지의 진입 경로에 따른 UI 차이 해결 과정", ]},
            { title: "What I Learned", items: [ "프로젝트를 통해 배운 점" ]},
        ]
    }
        
]
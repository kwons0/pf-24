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
    { title: "Sass", img: "sass", color: "#CD6799"},
    { title: "tailwindcss", img: "tailwind", color: "#06B6D4"},
    { title: "styled-components", img: "styled-components", color: "#ed92ca"},
    { title: "Framer-motion", img: "framer-motion", color: "#BB4B96"},
    { title: "webpack", img: "webpack", color: "#6b0bf5"},
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
        skills: ["Bitbucket", "CSS3", "Figma", "Git", "HTML5", "JSON", "JavaScript", "jQuery"]
    },
    {
        title: "개인 프로젝트에 사용했습니다.",
        skills: ["CSS3", "Figma", "Framer-motion", "Git", "GitHub", "HTML5", "JSON", "JavaScript", "Next.js", "React.js", "Sass", "TypeScript"]
    },
    {
        title: "계속 공부 중입니다.",
        skills: ["React.js","TypeScript", "Next.js"]
    },
    {
        title: "디자인 실무에 사용했습니다.",
        skills: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Adobe Premeiere"]
    },
];


export const pjItems: ProjectItem[] = [
    
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
    },
    { 
        id: "sbrand",
        group: "협업 프로젝트(실무)",
        title: "S사 자사몰 구축", 
        siteLink: "",
        githubLink: "", 
        img: "/asset/intro/list_sbrand.png", 
        href: "sbrand", 
        desc: "S사의 플랫폼 이전으로 새로운 환경에 최적화된 쇼핑몰을 구축하였습니다.",
        detail: "고도몰에서 카페24로의 플랫폼 이전을 진행하는 프로젝트입니다. 단순한 마이그레이션이 아닌 기존 사이트의 강점을 유지하면서도 새로운 플랫폼 환경에 최적화된 쇼핑몰을 구축하는 것을 목표로 진행했습니다.",
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
        id: "luff",
        group: "개인 프로젝트", 
        title: "Luff 자사몰 리뉴얼", 
        siteLink: "https://luff.kr/",
        githubLink: "",
        img: "/asset/intro/list_luff.png", 
        href: "luff", 
        desc: "브랜드 Luff의 Pain Point를 해결하기 위해 자사몰 리뉴얼하였습니다.",
        detail: "라이프스타일 브랜드 ‘LUFF’는 일상 속 작은 즐거움과 실용성을 담은 제품을 선보입니다. 주로 가방과 북파우치를 제작하며, 심플하면서도 세련된 디자인이 특징입니다. LUFF 대표님의 Pain Point를 해결하기 위해 자사몰 리뉴얼 프로젝트를 진행하게 되었습니다.",
        date: "2024.3 ~ 2024.06, 3개월" ,
        rate: "기획 100%, 디자인 100%, 개발 100%",
        skills: "HTML5, CSS3, Javascript" ,
        color: "#E94F59",
        drive: "https://drive.google.com/file/d/16Rfzf8FguDWwQzxJYwXR43s-0xbIseBy",
        contents: [
            { title: 'Pain Point & Goal', items: ['프로젝트 개요 및 목표'] },
            { title: 'Solution', items: [ '반응형 자사몰로 SEO 강화하기', '회원가입 유도하기', '상품 탐색은 정확하고 편리하게' ]},
            { title: 'What I Learned', items: ['프로젝트를 통해 배운 점'] }
        ]
    },
        
]
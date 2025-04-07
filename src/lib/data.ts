type DataItem = {
    title: string;
    img: string;
    color: string;
}

type CategoryItem = {
    title: string;
    skills: string[];
}

type DescItem = {
    icon: string[];
    title: string;
    desc: string;
}

export type SubItem = {
    text: string;
    subContents: string[];
}
type ContentsItem = {
    title: string;
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
    trouble: string[];
    contents?: ContentsItem[];
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
    { title: "Language", skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "JSON"]},
    { title: "FrontEnd", skills: ["React.js", "Next.js", "jQuery", "SCSS", "tailwindcss", "styled-components", "Framer-motion"]},
    { title: "Build Tools", skills: ["webpack", "npm"]},
    { title: "Version Control", skills: ["Git", "GitHub", "Bitbucket"]},
    { title: "Design & Editing", skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro"]},
];

export const skillsDesc: DescItem[] = [
    { 
        icon: ['html5','css3'],
        title: "HTML5, CSS3",
        desc: "HTML5와 CSS3를 활용해 웹 표준을 준수한 시맨틱 마크업을 구현하며, 반응형 UI 개발에 능숙합니다. Flexbox, Grid, Media Query 등을 활용해 유지보수가 용이한 구조 설계가 가능합니다."
    },
    { 
        icon: ['javascript','typescript'],
        title: "javascript, typescript",
        desc: "컴포넌트 기반 개발과 모듈화된 구조를 통해 유지보수가 용이한 코드를 작성하며, 복잡한 사용자 흐름과 상태 관리를 JavaScript로 유연하게 구현해왔습니다. TypeScript의 정적 타입 시스템을 활용해 예측 가능한 코드 작성에 집중하고 있으며, Props 전달과 API 통신의 타입을 명확히 정의해 오류를 사전에 방지하고 리팩토링 효율을 높이고 있습니다."
    },
    { 
        icon: ["reactjs","nextjs","jquery"],
        title: "Frameworks / Libraries",
        desc: "React의 Hooks와 Context를 활용한 상태 및 데이터 흐름 관리에 익숙하며, React Router로 SPA 구조를 구현한 경험이 있습니다. Next.js의 SSR, SSG, 이미지 최적화 및 코드 분할 등을 활용해 성능과 SEO를 고려한 프로젝트를 설계해왔습니다. 또한, jQuery를 활용한 경량 스크립트 작성 및 인터랙티브한 UI 구현에도 능숙합니다."
    },
    { 
        icon: ["sass", "tailwind", "styled-components", "framer-motion"],
        title: "Styling / Animation libraries",
        desc: "SCSS를 활용한 컴포넌트 단위 스타일링과 구조적인 설계에 익숙하며, styled-components에서는 props 기반의 동적 스타일링으로 일관된 UI 구현에 힘쓰고 있습니다. 반응형 웹 개발 경험이 풍부하며, 디바이스 특성을 고려한 breakpoint 설계와 사용자 중심의 인터랙션 구현에 능숙합니다."
    },
]


export const pjItems: ProjectItem[] = [
    

    { 
        id: "sbrand",
        group: "실무 프로젝트",
        title: "S사 자사몰 구축", 
        siteLink: "",
        githubLink: "", 
        img: "/asset/intro/list_sbrand.png", 
        href: "sbrand", 
        desc: "S사 이커머스 사이트의 플랫폼 이관으로 플랫폼 내에서 자사몰을 신규 구축하는 프로젝트 입니다.",
        detail: "고도몰에서 카페24로 플랫폼을 이전하며, 기존 사이트에서 안정적으로 운영되던 기능은 유지하고, 사용자 경험과 운영 효율을 고려해 구조를 새롭게 리디자인한 리뉴얼 프로젝트입니다.",
        date: "2023.5 ~ 2023.08" ,
        rate: "프론트엔드 70%",
        skills: "HTML5, CSS3, Javascript" ,
        color: "#6981af",
        drive: "https://drive.google.com/file/d/16V8bN2j8JdJMjLwzn5nqBdXzLOpp6xVQ",
        trouble: [ "상품 진열 및 프로모션 최적화 기능 개발" ],
    },
    { 
        id: "lbrand",
        group: "실무 프로젝트",
        title: "L사 자사몰 구축", 
        siteLink: "",
        githubLink: "", 
        img: "/asset/intro/list_lbrand.png", 
        href: "lbrand", 
        desc: "브랜드 L사의 론칭에 맞춰 자사몰을 새롭게 구축한 프로젝트입니다. ",
        detail: "브랜드 L사의 론칭에 맞춰, 메이크샵 기반으로 자사몰을 새롭게 구축한 프로젝트입니다. 기능 제약이 많은 플랫폼 환경에서 브랜드의 정체성과 색을 살리면서도, 상품이 돋보일 수 있는 사용자 경험을 구현하는 데 집중했습니다.",
        date: "2024.3 ~ 2024.05" ,
        rate: "프론트엔드 100%",
        skills: "HTML5, CSS3, Javascript" ,
        color: "#BF214B",
        drive: "https://drive.google.com/file/d/1Xt-vgzpRUx3Mmw5EimLGMC1_Kh8a4OGZ",
        trouble: [ "카테고리 네비게이션 구조 개선을 통한 사용자 탐색 흐름 최적화" ],
    },
    { 
        id: "gbrand",
        group: "실무 프로젝트",
        title: "G사 자사몰 구축", 
        siteLink: "",
        githubLink: "", 
        img: "/asset/intro/list_gbrand.png", 
        href: "gbrand", 
        desc: "G사 이커머스 사이트를 지속적으로 개선한 프로젝트 입니다.",
        detail: "G사의 초기 자사몰 운영부터 연 매출 700억 원 이상 성장하기까지,사이트를 지속적으로 개선하며 브랜드의 전환율과 사용성 향상을 이끈 프로젝트입니다. 다양한 프로모션 대응, 사용자 여정 개선, 범용 컴포넌트 개발 등을 통해 실질적인 매출 증대에 기여했으며, 동시에 기술적으로도 성장할 수 있던 경험입니다.",
        date: "2021.11~" ,
        rate: "프론트엔드 60%",
        skills: "HTML5, CSS3, Javascript" ,
        color: "#F17957",
        drive: "https://drive.google.com/file/d/1xqj0DG-XOG0ITXkAWnFD2lsNkzRFnxs6",
        trouble: [ "상품 진열 및 프로모션 최적화 기능 개발" ],
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
        trouble: [ "좋아요/댓글 UI 미반영 문제 해결", "진입 경로에 따른 상점 정보 UI 분기 처리" ],
        contents: [
            { title: "6. 기술 설계 요약" },
        ]
    }
        
]
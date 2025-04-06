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
        group: "실무 프로젝트",
        title: "S사 자사몰 구축", 
        siteLink: "",
        githubLink: "", 
        img: "/asset/intro/list_sbrand.png", 
        href: "sbrand", 
        desc: "S사 이커머스 사이트의 플랫폼 이관으로 플랫폼 내에서 자사몰을 신규 구축하는 프로젝트 입니다.",
        detail: "고도몰에서 카페24로 플랫폼을 이전하며, 기존 사이트에서 안정적으로 운영되던 기능은 유지하고, 사용자 경험과 운영 효율을 고려해 구조를 새롭게 리디자인한 리뉴얼 프로젝트입니다.",
        date: "2023.5 ~ 2023.08" ,
        rate: "개발 100%",
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
        rate: "개발 100%",
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
        rate: "개발 100%",
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
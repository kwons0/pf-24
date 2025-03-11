type DataItem = {
    title: string;
    img: string;
    color: string;
}

type CategoryItem = {
    title: string;
    skills: string[];
}


type PjArr = {
    title: string;
    img: string;
    href: string;
    group: string;
    desc: string;
}

type PjItem = {
    name: string;
    item: PjArr[];
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




export const pjItems: PjItem[] = [
    {
        "name": "project",
        "item": [
            { title: "거래해요! 동물의 숲", img: "list_animal", href: "animal", group: "개인 프로젝트", 
                desc: "당근마켓과 트위터의 기능을 결합하며, 단순한 클론이 아닌 차별화된 컨셉을 설정한 중고거래 사이트입니다." },
            { title: "S사 자사몰 구축", img: "list_sbrand", href: "sbrand",  group: "협업 프로젝트(실무)",
                desc: "S사의 플랫폼 이전으로 새로운 환경에 최적화된 쇼핑몰을 구축하였습니다."
             },
            { title: "Luff 자사몰 리뉴얼", img: "list_luff", href: "luff", group: "개인 프로젝트",
                desc: "브랜드 Luff의 Pain Point를 해결하기 위해 자사몰 리뉴얼하였습니다."
             },
        ]
    }
]
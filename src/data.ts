
type ListArr = {
    "title": string;
    "img": string;  
}

type ItemArr = {
    "category": string;
    "list": ListArr[];
}

type DataItem = {
    "name": string;
    "item": ItemArr[];
}


type PjArr = {
    "title": string;
    "img": string;
    "href": string;
}

type PjItem = {
    "name": string;
    "item": PjArr[];
}

export const dataItems: DataItem[] = [
    {
        "name": "skill",
        "item": [
            {
                "category": "Language",
                "list": [
                    { "title": "HTML5", "img": "html5"},
                    { "title": "CSS3", "img": "css3"},
                    { "title": "JavaScript", "img": "javascript"},
                    { "title": "TypeScript", "img": "typescript"},
                    { "title": "JSON", "img": "json"},
                ]
            },
            {
                "category": "FrontEnd",
                "list": [
                    { "title": "React.js", "img": "reactjs"},
                    { "title": "Next.js", "img": "nextjs"},
                    { "title": "jQuery", "img": "jquery"},
                    { "title": "Sass", "img": "sass"},
                    { "title": "tailwindcss", "img": "tailwind"},
                    { "title": "styled-components", "img": "styled-components"},
                    { "title": "Framer-motion", "img": "framer-motion"},
                ]
            },
            {
                "category": "Build Tools",
                "list": [
                    { "title": "webpack", "img": "webpack"},
                    { "title": "npm", "img": "npm"},
                ]
            },            
            {
                "category": "Version Control",
                "list": [
                    { "title": "Git", "img": "git"},
                    { "title": "GitHub", "img": "github"},
                    { "title": "Bitbucket", "img": "bitbucket"},
                ]
            },
            {
                "category": "Design & Editing",
                "list": [
                    { "title": "Figma", "img": "figma"},
                    { "title": "Adobe Photoshop", "img": "photoshop"},
                    { "title": "Adobe Illustrator", "img": "illustrator"},
                    { "title": "Adobe Premiere Pro", "img": "premiere"}
                ]
            },
        ]
    },
]


export const pjItems: PjItem[] = [
    {
        "name": "project1",
        "item": [
            { "title": "Lufff 자사몰 리뉴얼", "img": "project1-3", "href": "luff" },
            { "title": "거래해요! 동물의 숲", "img": "project1-2", "href": "animal" },
            { "title": "2025.PF", "img": "project1-1", "href": "pf" },
            { "title": "넷플릭스 Clone", "img": "project1-4", "href": "netflix" },
            { "title": "Best Seller", "img": "project1-5", "href": "bestseller" },
            // { "title": "ReactNative.app", "img": "project1-6", "href": "appjs" },
        ]
    }
]
type ItemArr = {
    "title": string;
    "img": string;
    "href": string;
}

type DataItem = {
    "name": string;
    "item": ItemArr[];
}

export const dataItems: DataItem[] = [
    {
        "name": "stack",
        "item": [
            { "title": "HTML5", "img": "html5", "href": "" },
            { "title": "CSS3", "img": "css3", "href": "" },
            { "title": "JavaScript", "img": "javascript", "href": "" },
            { "title": "jQuery", "img": "jquery", "href": "" },
            { "title": "TypeScript", "img": "typescript", "href": "" },
            { "title": "React.js", "img": "reactjs", "href": "" },
            { "title": "Next.js", "img": "nextjs", "href": "" },
            { "title": "Sass", "img": "sass", "href": "" },
            { "title": "tailwindcss", "img": "tailwind", "href": "" },
            { "title": "styled-components", "img": "styled-components", "href": "" },
            { "title": "Framer-motion", "img": "framer-motion", "href": "" },
            { "title": "JSON", "img": "json", "href": "" },
            { "title": "webpack", "img": "webpack", "href": "" },
            { "title": "Git", "img": "git", "href": "" },
            { "title": "npm", "img": "npm", "href": "" },
            { "title": "VisualStudio Code", "img": "vscode", "href": "" },
            { "title": "IntelliJ", "img": "intellij", "href": "" },
            { "title": "Figma", "img": "figma", "href": "" },
            { "title": "GitHub", "img": "github", "href": "" },
            { "title": "Bitbucket", "img": "bitbucket", "href": "" },
            { "title": "Adobe Photoshop", "img": "photoshop", "href": "" },
            { "title": "Adobe Illustrator", "img": "illustrator", "href": "" },
            { "title": "Adobe Premiere Pro", "img": "premiere", "href": "" }
        ]
    },
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
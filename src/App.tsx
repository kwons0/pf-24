import { createGlobalStyle, ThemeProvider } from "styled-components";
import { breakpoints, darkTheme, lightTheme } from './theme';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './atom';
import Router from "./Router";

const GlobalStyle = createGlobalStyle`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css");
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, menu, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline; 
  }
  article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section { display: block; }
  *[hidden] { display: none; }
  menu, ol, ul, li { list-style: none; }
  blockquote, q { quotes: none; }
  blockquote:before, blockquote:after, q:before, q:after { content: ''; content: none; }
  table { border-collapse: collapse; border-spacing: 0; }
  * { box-sizing: border-box;}
  body { 
    background-color:${((props) => props.theme.bgColor)}; 
    color:${(props) => props.theme.textColor}; line-height: 1.2; font-weight: 400; font-size: 16px;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }
  a { text-decoration:none; color: inherit; }
  img{ display:inline-block; width: 100%; }
  #root{ max-width: 1140px; margin: 0 auto; }
`;


function App() {
  const isDark = useRecoilValue(isDarkAtom)
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle/>
        <Router/>
      </ThemeProvider>
    </>
  );
}

export default App;

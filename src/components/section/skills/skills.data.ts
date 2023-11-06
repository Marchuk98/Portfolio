import {
    SiJavascript,
    SiJest,
    SiMui,
    SiRedux,
    SiSass,
    SiStorybook,
    SiStyledcomponents,
    SiTypescript
} from "react-icons/si";
import {CgArrowsExchangeV} from "react-icons/cg";
import {TbApi} from "react-icons/tb";
import {GrTest} from "react-icons/gr";
import {FaReact} from "react-icons/fa";


const icons = {
    react: FaReact,
    redux: SiRedux,
    js: SiJavascript,
    ts: SiTypescript,
    axios: CgArrowsExchangeV,
    styled: SiStyledcomponents,
    jest: SiJest,
    sass: SiSass,
    api: TbApi,
    story: SiStorybook,
    mui: SiMui,
    unit: GrTest,
}


export const skills = [
    {
        skillId: 1,
        title: 'React',
        Icons: icons.react,
        fill: '#61DAFB',
    },
    {
        skillId: 2,
        title: 'Redux',
        Icons: icons.redux,
        fill: '#764abc',
    },
    {
        skillId: 3,
        title: 'JavaScript',
        Icons: icons.js,
        fill: '#f5de19',
    },
    {
        skillId: 4,
        title: 'TypesScript',
        Icons: icons.ts,
        fill: '#007acc',
    },
    {
        skillId: 5,
        title: 'Axios',
        Icons: icons.axios,
        fill: '#671ddf',
    },
    {
        skillId: 6,
        title: 'Jest',
        Icons: icons.jest,
        fill: '#c63d14',
    },
    {
        skillId: 7,
        title: 'SASS-SCSS',
        Icons: icons.sass,
        fill: '#bf4080',
    },
    {
        skillId: 8,
        title: 'Rest-API',
        Icons: icons.api,
        fill: '#f9004d',
    },
    {
        skillId: 9,
        title: 'Styled-Components',
        Icons: icons.styled,
        fill: '#ffcebf',
    },
    {
        skillId: 10,
        title: 'StoryBook',
        Icons: icons.story,
        fill: '#FF4785',
    },
    {
        skillId: 11,
        title: 'MUI',
        Icons: icons.mui,
        fill: '#007FFF',
    },
    {
        skillId: 12,
        title: 'Unit-tests',
        Icons: icons.unit,
        fill: '#66bb6a',
    },
]
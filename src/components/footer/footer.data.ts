import {BsGithub, BsLinkedin, BsTelegram} from "react-icons/bs";
import {SiCodewars} from "react-icons/si";


const icons = {
    github: BsGithub,
    codewars: SiCodewars,
    telegram: BsTelegram,
    link: BsLinkedin,
}


export const footer = [
    {
        id: 1,
        Icon: icons.codewars,
        link: '',
        fill: '#bb432c',
        prefix: 'cd',
    },
    {
        id: 2,
        Icon: icons.github,
        link: '',
        fill: '#000000',
        prefix: 'git',
    },
    {
        id: 3,
        Icon: icons.telegram,
        link: '',
        fill: '#0088cc',
        prefix: 'tg',
    },
    {
        id: 4,
        Icon: icons.link,
        link: '',
        fill: '#0077b5',
        prefix: 'link',
    },
]
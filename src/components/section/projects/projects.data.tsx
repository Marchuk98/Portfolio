import velocityChat from '../../../assets/image/velocity-chat.jpeg'
import essenseCard from '../../../assets/image/Essense-card.jpg'
import todolist from '../../../assets/image/todolist.jpg'

export const projects = [
    {
        id: 1,
        title:'Essence-Cards',
        img: essenseCard,
        linkDeploy: 'https://essence-cards.vercel.app/login',
        linkRepo: 'https://github.com/Marchuk98/Essence-Cards',
        projectTitle: 'Essence-Cards',
        projectDescription:'React project with Redux, Axios, TypeScript, React Hook Form'
    },
    {
        id: 2,
        title:'Task Planner',
        img: todolist,
        linkDeploy: 'https://taskcontroller.vercel.app/login',
        linkRepo: 'https://github.com/Marchuk98/ToDoList',
        projectTitle: 'Task Planner',
        projectDescription:'Task Planner is a powerful task management application powered by React, Redux Toolkit, Axios, Material-UI, and React Router.'
    },
    {
        id: 3,
        title:'Velocity Chat',
        img: velocityChat,
        linkDeploy: 'https://velocity-chat.vercel.app/',
        linkRepo: 'https://github.com/Marchuk98/Velocity-Chat',
        projectTitle: 'Velocity Chat',
        projectDescription:'Description'
    }
]
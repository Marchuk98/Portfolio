import {memo} from "react";
import {ParticlesContainer} from "../particles/particles-container";
import {Intro} from "./intro/intro";
import {Skills} from "../skills/skills";
import {Projects} from "./projects/projects";
import {RemoteJob} from "./remoteJob/remote-job";
import {Contacts} from "../contacts/contacts";

import s from './main.module.scss'
export const Main = memo(()=> {
    return (
        <main className={s.main}>
            <ParticlesContainer />
            <Intro />
            <Skills />
            <Projects />
            <RemoteJob />
            <Contacts />
        </main>
    )
})
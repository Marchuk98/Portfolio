import {memo} from "react";
import {ParticlesContainer} from "../ui/particles/particles-container";
import {Intro} from "./intro/intro";
import {Skills} from "./skills/skills";
import {Projects} from "./projects/projects";
import {RemoteJob} from "./remoteJob/remote-job";
import {Contacts} from "./contacts/contacts";

export const Main = memo(()=> {
    return (
        <main>
            <ParticlesContainer />
            <Intro />
            <Skills />
            <Projects />
            <RemoteJob />
            <Contacts />
        </main>
    )
})
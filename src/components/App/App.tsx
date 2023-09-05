import React, {createContext} from 'react';
import {Header} from "../header/header";
import {Footer} from "../footer/footer";
import {Main} from "../section/main";


export const ThemeContext = createContext<any>(null)

function App() {
    return (
        <>
           <ThemeContext.Provider value={''}>
               <Header/>
               <Main/>
               <Footer/>
           </ThemeContext.Provider>
        </>
    );
}

export default App;

import {createContext} from 'react';
import {Header} from "../components/header/header";
import {Main} from "../components/section/main"
import {Footer} from "../components/footer/footer";


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

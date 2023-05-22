import React from 'react';
import styles from "./Title.module.css"

type TitlePropsType = {
    text:string
    description:string
}


const Title:React.FC<TitlePropsType> = ({text,description}) => {
    return (
        <div className={styles.title}>
            <h2>{text}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Title;
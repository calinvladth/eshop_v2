import React from "react";
import style from "./index.module.sass";

const SectionTitleComponent = ({title = 'No title'}) => (
    <div className={style.box}>
        <span>
            <h1>{title}</h1>
        </span>
    </div>
)

export default SectionTitleComponent
import React from "react";
import style from "./index.module.sass";


const SectionSlotComponent = ({first, second, gallery = false}) => (
    <div className={style.box}>
        <div className={style.boxContent}>
            <div style={{overflow: gallery ? 'hidden' : 'visible'}}>
                {first}
            </div>
            <div>
                {second}
            </div>
        </div>
    </div>
)

export default SectionSlotComponent
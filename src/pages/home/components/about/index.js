import React from 'react'
import style from './index.module.sass'
import AboutImage from '../../../../assets/images/about.jpg'
import {setBackgroundImage} from "../../../../services/image";
import SectionSlotComponent from "../../../../components/section_slot";
import {homepageData} from "../../../../data";

const AboutComponent = () => (
    <div className={style.box}>
        <SectionSlotComponent
            first={<BackgroundComponent/>}
            second={<InfoComponent/>}
        />
    </div>
)

const BackgroundComponent = () => (<div className={style.image} style={setBackgroundImage(AboutImage, 'bottom')}>&nbsp;</div>)

const InfoComponent = () => (
    <div className={style.infoBox}>
        <div className={style.info}>
            <div>
                <h1>{homepageData.about_section_title}</h1>
            </div>
            <div>
                <p>{homepageData.about_section_text}</p>
            </div>
        </div>
    </div>
)

export default AboutComponent
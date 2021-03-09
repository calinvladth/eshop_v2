import React from "react";
import style from './index.module.sass'
import {setBackgroundImage} from "../../../../services/image";
import HeroImage from "../../../../assets/images/contact_hero.jpg";
import SectionSlotComponent from "../../../../components/section_slot";
import {contactData, contactpageData} from "../../../../data";

const HeroComponent = () => (
    <div className={style.box}>
        <SectionSlotComponent
            first={<InfoComponent/>}
            second={<BackgroundComponent/>}
        />
    </div>
)

const BackgroundComponent = () => (
    <div className={style.image} style={setBackgroundImage(HeroImage)}>&nbsp;</div>
)

const InfoComponent = () => (
    <div className={style.info}>
        <div>
            <h1>{contactpageData.title}</h1>
        </div>
        <div>
            <p>{contactpageData.subtitle}</p>
        </div>

        <div>
            <p>{contactData.address}</p>
            <p>{contactData.phone}</p>
            <p>{contactData.email}</p>
        </div>
    </div>
)

export default HeroComponent
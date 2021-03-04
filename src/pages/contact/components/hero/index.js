import React from "react";
import style from './index.module.sass'
import {setBackgroundImage} from "../../../../services/image";
import HeroImage from "../../../../assets/images/contact_hero.jpg";
import SectionSlotComponent from "../../../../components/section_slot";

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
            <h1>Contact us</h1>
        </div>
        <div>
            <p>Feel free to contact us and we will get back to you ass soon as possible!</p>
        </div>

        <div>
            <p>232 Bubby Drive. Austin Texas</p>
            <p>512-563-3420</p>
            <p>example@email.com</p>
        </div>
    </div>
)

export default HeroComponent
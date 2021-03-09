import React from "react";
import style from './index.module.sass'
import HeroImage from '../../../../assets/images/hero_1.jpg'
import {setBackgroundImage} from "../../../../services/image";
import SocialComponent from "../../../../components/social";
import SectionSlotComponent from "../../../../components/section_slot";
import {ShopPath} from "../../index";
import {Link} from "react-router-dom";
import {homepageData} from "../../../../data";

const HeroComponent = () => (
    <div className={style.box}>
        <SectionSlotComponent
            first={<div>
                <InfoComponent/>
                <IconsComponent/>
            </div>}
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
            <h1>{homepageData.title}</h1>
        </div>
        <div>
            <Link to={ShopPath}>
                <button className="button button--full">{homepageData.shop_button}</button>
            </Link>
        </div>
    </div>
)

const IconsComponent = () => (
    <div className={style.icons}>
        <SocialComponent horizontal={false}/>
    </div>
)

export default HeroComponent
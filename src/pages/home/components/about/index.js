import React from 'react'
import style from './index.module.sass'
import AboutImage from '../../../../assets/images/about.jpg'
import {setBackgroundImage} from "../../../../services/image";
import SectionSlotComponent from "../../../../components/section_slot";

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
                <h1>Our story</h1>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto debitis, dignissimos doloribus
                    facere fugit hic laudantium libero nihil possimus quae tempora totam vitae voluptates! Aspernatur
                    dolorem error esse explicabo facilis inventore itaque magnam mollitia nobis omnis porro possimus
                    praesentium qui quidem repellat rerum, sit voluptates.</p>
            </div>
        </div>
    </div>
)

export default AboutComponent
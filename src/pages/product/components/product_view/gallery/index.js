import React from "react";
import style from "./index.module.sass";
import {setBackgroundImage} from "../../../../../services/image";
import {api} from "../../../../../config";

const GalleryComponent = ({images, primaryImage, setPrimaryImage}) => (
    <div className={style.box}>
        {
            images.map(o =>
                <div
                    key={o.id}
                    style={setBackgroundImage(api + o.path)}
                    className={primaryImage.id === o.id ? style.imageActive : null}
                    onClick={() => setPrimaryImage(o)}
                >&nbsp;</div>)
        }
    </div>
)

export default GalleryComponent
import React from "react";
import style from "./index.module.sass";

const TextComponent = ({currency, product, specs}) => (
    <div className={style.box}>
        <div className={style.boxTitle}>
            <div>
                <h1>
                    {product.data.name}
                </h1>
            </div>
            <div>
                <h1>Price: {product.data.price} <span>{currency}</span></h1>
            </div>
        </div>

        <div>
            <p>{product.data.description_short}</p>
        </div>

        <div className={style.boxSpecs}>
            {
                specs.map(o => <p key={o.id}><span>{o.key}</span>: {o.value}</p>)
            }
        </div>
    </div>
)

export default TextComponent
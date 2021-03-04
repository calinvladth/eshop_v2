import React from "react";
import {useDispatch} from "react-redux";
import style from "./index.module.sass";
import QuantityComponent from "../../../../../components/quantity";
import {PostCartItem} from "../../../../../redux/cart/actions";

const ActionComponent = ({quantity=1, editQuantity, product}) => {
    const dispatch = useDispatch()
    return (
        <div className={style.box}>
            <div>
                <QuantityComponent quantity={quantity} editQuantity={editQuantity}/>
            </div>
            <div>
                <button
                    onClick={() => dispatch(PostCartItem(product.data.id, quantity, false, true))}
                    className={['button', 'button--full-green', style.infoSubmit].join(' ')}>Add
                    to cart
                </button>
            </div>
        </div>
    )
}

export default ActionComponent
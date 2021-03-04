import React, {useEffect, useState} from "react";
import style from './index.module.sass'
import {setBackgroundImage} from "../../../../services/image";
import TextComponent from "./text";
import ActionComponent from "./action";
import GalleryComponent from "./gallery";
import {useSelector} from "react-redux";
import {OrderByIndex} from "../../../../services/reorder";
import {ChangeQuantity} from "../../../../services/quantity";
import {api} from "../../../../config";
import LoadingComponent from "../../../../components/loading";
import SectionSlotComponent from "../../../../components/section_slot";

const ProductViewComponent = () => {
    const config = useSelector(state => state.config)
    const currency = config.data.payment.currency

    const [quantity, setQuantity] = useState(1)
    const [specs, setSpecs] = useState([])
    const [images, setImages] = useState([])
    const [primaryImage, setPrimaryImage] = useState({})

    const product = useSelector(state => state.product)

    useEffect(() => {
        setSpecs(OrderByIndex(product.data.specs))
        setImages(OrderByIndex(product.data.images))
        setPrimaryImage(product.data.images[0])
        return () => {
            setPrimaryImage({})
        }
    }, [product.success, product.data.name, product.data.images, product.data.specs])


    function editQuantity(add, quantity) {
        const newQuantity = ChangeQuantity(add, quantity)

        setQuantity(newQuantity)

    }

    return (
        <div className={style.box}>
            <SectionSlotComponent
                first={
                    product.success && product.loaded
                        ? <InfoComponent
                            currency={currency}
                            product={product}
                            specs={specs}
                            quantity={quantity}
                            editQuantity={editQuantity}
                            images={images}
                            primaryImage={primaryImage}
                            setPrimaryImage={setPrimaryImage}
                        />
                        :
                        <LoadingComponent/>
                }
                second={<BackgroundComponent primaryImage={primaryImage}/>}
                gallery={true}
            />
        </div>
    )
}

const BackgroundComponent = ({primaryImage}) => (
    <div className={style.image} style={setBackgroundImage(primaryImage.path && api + primaryImage.path)}>&nbsp;</div>
)

const InfoComponent = ({currency, product, specs, quantity, editQuantity, images, primaryImage, setPrimaryImage}) => (
    <div className={style.info}>
        <div>
            <TextComponent
                currency={currency}
                product={product}
                specs={specs}
            />
        </div>
        <div>
            <ActionComponent
                quantity={quantity}
                editQuantity={editQuantity}
                product={product}
            />
        </div>
        <div>
            <GalleryComponent
                images={images}
                primaryImage={primaryImage}
                setPrimaryImage={setPrimaryImage}
            />
        </div>
    </div>
)


export default ProductViewComponent
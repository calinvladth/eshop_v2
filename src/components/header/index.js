import React, {useEffect, useState} from "react";
import style from './index.module.sass'
import Logo from "../../assets/images/logo.png";
import LogoLight from "../../assets/images/logo_light.png";
import {Link, useHistory, useLocation} from "react-router-dom";
import {HomePath, ShopPath} from "../../pages/home";
import {ContactPath} from "../../pages/contact/path";
import {CartPath} from "../../pages/cart/path";
import {useSelector} from "react-redux";
import CartSvg from "../../assets/icons/cart";
import {ProductPath} from "../../pages/product/path";
import {MatchRoute} from "../../services/check_route";

const HeaderComponent = () => {
    const location = useLocation()
    const history = useHistory()
    const productPathMatch = MatchRoute(ProductPath)
    const contactPathMatch = MatchRoute(ContactPath)
    const homePathMatch = MatchRoute(HomePath)

    const cart = useSelector(state => state.cart)

    const [light, setLight] = useState(false)
    const [long, setLong] = useState(false)
    useEffect(() => {
        if (contactPathMatch) setLight(true)
        else setLight(false)
        if (homePathMatch || productPathMatch || contactPathMatch) setLong(false)
        else setLong(true)
        // eslint-disable-next-line
    }, [location])

    return (
        <div className={`${style.box} ${light ? style.light : style.dark}`}>
            <div className={style.boxContent}>
                <div className={`${style.boxGrid} ${long ? style.long : style.short}`}>

                    <div className={style.logoBox} onClick={() => history.push(HomePath)}>
                        <div className={style.logo}>
                            <img src={light ? LogoLight : Logo} alt=""/>
                        </div>
                    </div>
                    <div className={style.contentBox}>
                        <div className={style.content}>

                            <div className={style.pages}>
                                <div className={location.pathname === HomePath ? style.linkActive : null}>
                                    <Link to={HomePath}>
                                        <span>Home</span>
                                    </Link>
                                </div>
                                <div className={location.pathname === ShopPath ? style.linkActive : null}>
                                    <Link to={ShopPath}>
                                        <span>Shop</span>
                                    </Link>
                                </div>
                                <div className={location.pathname === ContactPath ? style.linkActive : null}>
                                    <Link to={ContactPath}>
                                        <span>Contact</span>
                                    </Link>
                                </div>
                            </div>

                            <div className={style.icons}>
                                <Link to={CartPath}>
                                    <div
                                        className={`${style.iconCart}`}>
                                        {
                                            cart.data.total_quantity > 0
                                            &&
                                            <span>
                                            <span>{cart.data.total_quantity}</span>
                                        </span>
                                        }
                                        <CartSvg/>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default HeaderComponent
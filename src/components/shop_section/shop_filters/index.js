import React, {useEffect, useState} from "react";
import style from './index.module.sass'
import {useSelector} from "react-redux";
import {HomePath, ShopHash} from "../../../pages/home";
import {useHistory} from "react-router-dom";
import {addQuery} from "../../../services/url";


const ShopFiltersComponent = ({setShowFilters}) => {
    const {products} = useSelector(state => state)
    const [category, setCategory] = useState(0)
    const [sortBy, setSortBy] = useState(0)

    const history = useHistory()

    useEffect(() => {
        if (products.filters.category) {
            setCategory(products.filters.category)
        }
        if (products.filters.sort_by) {
            setSortBy(products.filters.sort_by)
        }
    }, [products.filters])

    const submit = (e) => {
        e.preventDefault()
        let data = {}
        data['page'] = 1
        if (category) data['category'] = category
        if (sortBy) data['sort_by'] = sortBy
        history.push(HomePath + `?${addQuery(data)}` + ShopHash)
        setShowFilters(false)
    }

    const clearState = () => {
        setCategory(0)
        history.push(HomePath + `?page=1` + ShopHash)
        setShowFilters(false)
    }


    return (
        <div className={style.box}>
            <form onSubmit={e => submit(e)}>
                <div className={style.filters}>
                    <div className={style.price}>
                        <select className={style.select} onChange={e => setSortBy(e.target.value)}>
                            <option disabled selected value>Sort By</option>
                            {
                                products.sort_by_options.map(o => <option value={o.id}
                                                                          selected={parseInt(products.filters.sort_by) === o.id}>{o.name}</option>)
                            }
                        </select>
                    </div>

                    <div>
                        <select className={style.select} onChange={e => setCategory(e.target.value)}>
                            <option disabled selected value>Select Category</option>
                            {
                                products.categories_options.map(o => <option value={o.id}
                                                                             selected={parseInt(products.filters.category) === o.id}>{o.name}</option>)
                            }
                        </select>
                    </div>
                </div>

                <div className={style.actions}>
                    <button type="submit" className="button button--full">Search</button>
                    <button onClick={() => clearState()} className="button button--border">Clear Filters</button>
                </div>

            </form>
        </div>
    )
}

export default ShopFiltersComponent
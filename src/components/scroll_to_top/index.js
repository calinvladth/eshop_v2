import {useEffect} from 'react'
import {useLocation} from "react-router";
import {MatchRoute} from "../../services/check_route";
import {HomePath} from "../../pages/home";

const ScrollTop = ({children}) => {
    const location = useLocation()
    const homePathMatch = MatchRoute(HomePath)
    useEffect(() => {
        if (!homePathMatch) {
            window.scrollTo(0, 0)
        }
        // eslint-disable-next-line
    }, [
        location
    ])
    return children
}

export default ScrollTop
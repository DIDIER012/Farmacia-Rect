import { useState } from "react"
import CartWidget from "../CartWidget/CartWidget";
import Hidden from "./Hidden";

const hiddenContainer = () => {
   

    const [isShow, setHidden] = useState();


    const active = () => {
        setHidden(!isShow)
    }

return <CartWidget active= {active} />
}

export default hiddenContainer;
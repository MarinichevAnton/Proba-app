import React from "react"
import { ButtonWay } from "./Button"
import Style from "./FooterLeft.module.css"
import { Way } from "./Way"


export const FooterLeft = () => {
    return (
        <div className={Style.footerLeft}>

            <div>
                <ButtonWay />
            </div>

            <div>
                <Way />
            </div>
        </div>
    )
}
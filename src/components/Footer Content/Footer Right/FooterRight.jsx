import React from "react"
import {ButtonFooter} from "./Button.jsx"
import {ButtonFooter_2} from "./Button_2.jsx"
import Style from "./FooterRight.module.css"


export const FooterRight = () => {
    return (
        <div className={Style.footerRight}>
            <div>
            <ButtonFooter />
            <ButtonFooter_2/>
            </div>
            </div>
    )
}

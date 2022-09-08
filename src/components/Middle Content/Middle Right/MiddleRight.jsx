import React from "react"
import { Button } from "./Button"
import { Button_2 } from "./Button_2"
import Style from "./MiddleRight.module.css"



export const MiddleRight = (props) => {
    return (
        <div className={Style.middleRight}>
            <div>
                <Button />
                <Button_2 />
            </div>
        </div>
    )
}

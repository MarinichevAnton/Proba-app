import React from "react";
import { ButtonNav } from "./Button";
import Style from "./Header.module.css"


export const Header = () => {
    return (
        <div className={Style.all_header}>
            <header className={Style.header}>

                <div className="col-md-3">
                    <h className={Style.borderLogo}>
                        <img className={Style.logotip} />
                    </h>
                </div>

                <div className="col-md-9">
                    <div>
                        <a> Главная </a>
                    </div>

                    <div>
                        <a> Технология </a>
                    </div>

                    <div>
                        <a>График полетов </a>
                    </div>

                    <div>
                        <a> Гарантии </a>
                    </div>

                    <div>
                        <a> О компании </a>
                    </div>

                    <div>
                        <a> Контакты </a>
                    </div>

                    <div>
                        <ButtonNav />
                    </div>
                </div>

            </header>
        </div>
    )
}
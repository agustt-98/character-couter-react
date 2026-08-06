import { useState } from "react"
import logo from "../assets/images/logo.png"

const Header = ({dark, handleDarkTheme}) => {

    return (
        <header className="header">
            <div className="titulo">
                <img src={logo} />
                <h1>Character Counter</h1>
            </div>

            <button
                className="tema-button"
                type="button"
                onClick={handleDarkTheme}
            >
                {dark ? "☀️" : "🌙"}
            </button>
    </header>
    )
    
}

export { Header } 
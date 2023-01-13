import "./Numero.css"
import React from "react"

import Card from "./Card"

export default props => {
    const { max } = props
    return (
        <Card title="Escolha um número:" red>
            <div className="Numero">
                <span>
                    Máximo:
                    <input type="number" value={max} onChange={e => props.onMaxChanged(+e.target.value)}/>
                </span>
            </div>
        </Card>
    )
}
import React from "react";
import Card from "./Card";

export default props => {
    const { min, max} = props
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <Card title="Sorteio dos Números de 0 a N" purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{ aleatorio }</strong>
                </span>
            </div>
        </Card>
    )
}
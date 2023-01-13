import React from "react";
import Card from "./Card";

export default props => {
    const { max } = props
    return (
        <Card title="Está chegando..." yellow>
            <div>
                <span>
                    <span>Estarei de recesso em  </span>
                    <strong>{ max + 10}</strong>
                    <span> dias</span>
                </span>
            </div>
        </Card>
    )
}
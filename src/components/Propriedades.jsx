import React from "react";
import Card from "./Card";

export default props => {
    const { max } = props
    return (
        <Card title="QUAL SUA NOTA?" green>
            <div>
                {props.aluno}
                {props.nota}
                <span>
                    <strong>{ (max)}</strong>
                </span>
            </div>
        </Card>
    )
}
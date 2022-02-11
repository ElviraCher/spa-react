import React from "react";
import "./Loading.css"

export default function Loading() {
    return (
        <>
            <div className="spinner">
                <span className="spinner__sign">Идёт загрузка...</span>
                <span className="spinner__img"> </span>
            </div>
        </>
    )
}
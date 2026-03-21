import React from 'react'
import stylowanie from '../style/StyleStrona2.module.css'

export const Strona4 = () => {
    return (
        <article>
            <p>Style CSS Modules</p>
            <p className={stylowanie.pogrubienie}>Zadania do zrobienia</p>
            <ul>
                <ol className={stylowanie.zielony}>Pouczyć się JSa</ol>
                <ol className={stylowanie.zielony}>Pouczyć się CSSa</ol>
                <ol className={`${stylowanie.niebieski} ${stylowanie.przekresl}`}>Pouczyć się React</ol>
            </ul>
        </article>
    )
}

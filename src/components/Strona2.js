import React from 'react'
import style2 from '../style/StyleStrona2.module.css'
import { Strona4 } from './Strona4'

export const Strona2 = () => {
  return (
    <article>
      <div style={{ backgroundColor: 'bisque' }}>
        <h4 className={style2.naglowek}>Strona2</h4>
        <span style={{ color: 'red', fontWeight: 'bold' }}>Testowy Span</span>
        <p style={{ display: 'inline', border: '1px solid red', color: 'black', backgroundColor: 'burlywood', padding: '1vw', borderRadius: '5px', margin: '1vw' }}>
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <p style={{ textDecoration: 'line-through', color: 'black' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptatibus minus tenetur rem veniam error omnis esse ipsam reiciendis, quisquam tempora? Odit dicta accusamus, aliquid debitis odio vel ipsum excepturi!
        </p>
      </div>
      <Strona4 />
    </article>
  )
}

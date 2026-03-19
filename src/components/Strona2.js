import React from 'react'
import style2 from '../style/StyleStrona2.module.css'

export const Strona2 = () => {
  return (
    <article>
      <h4 className={style2.naglowek}>Strona2</h4>
      <span style={{color: 'red', fontWeight: 'bold'}}>Testowy Span</span> 
      <p style={{display: 'inline', border: '1px solid red', backgroundColor: 'rebeccapurple'}}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum itaque placeat quaerat sint laboriosam, reiciendis quasi eos dolorem quas? Sapiente dolorum eos porro, optio ipsa recusandae ad? Unde, omnis rem!
        Alias, animi. Illum architecto fugit neque excepturi deserunt temporibus quasi, omnis quia perspiciatis repudiandae autem modi animi dicta, aliquam assumenda totam cumque, mollitia sequi. Molestiae voluptatem totam quidem assumenda veritatis!
      </p>
    </article>
  )
}

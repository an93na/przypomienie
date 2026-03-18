import React, { useState } from 'react'

export const Strona3 = () => {
  const [value, setValue] = useState(0);
  return (
    <article>
      <h4>Strona3</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia esse repellat vel culpa ducimus cumque eligendi magnam non, hic eius!
      </p>
      <div>
        <button onClick={() => setValue(value + 1)}>+</button>
        <input type="text" value={value} onChange={(e) => setValue(Number(e.target.value))}/>
        <button onClick={() => setValue(value - 1)}>-</button>
      </div>
    </article>
  )
}

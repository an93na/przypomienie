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
        <button style={{marginRight:'2vw', marginBottom: '2vw'}} onClick={() => setValue(value + 1)}>+1</button>
        <button style={{marginRight:'2vw', marginBottom: '2vw'}} onClick={() => setValue(value + 5)}>+5</button>
        <input type="text" id='1' value={value} onChange={(e) => setValue(Number(e.target.value))}/>
        <button style={{marginRight:'2vw', marginBottom: '2vw'}} onClick={() => setValue(value - 1)}>-1</button>
        <button style={{marginRight:'2vw', marginBottom: '2vw'}} onClick={() => setValue(value - 5)}>-5</button>
      </div>
    </article>
  )
}

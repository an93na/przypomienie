import React from 'react'

function multiplyTwoNumbers(a, b) {
  return a * b
}

export const Strona1 = () => {
  const addTwoNumbers = (a, b) => a + b
  const div = <div>To jest div</div>
  const przykladowaZmienna = "Jakiś string"
  const user = {
    name: 'Jane',
    lastName: 'Smith',
    age: 23
  }
  // console.log(user)
  const tablicaNumerów = [1, 2, 3, 4, 5, 6];
  const tablicaStringow = ['string1', 'string2', 'string3']
  const wynikMnozenia = multiplyTwoNumbers(5, 10)
  return (
    <article>
      <h4>Strona1</h4>
      {div}
      <div>{tablicaNumerów}</div>
      <div>{tablicaStringow}</div>
      <ul>
        <li>Name: <b>{user.name}</b></li>
        <li>Last Name: <b>{user.lastName}</b></li>
        <li>Age: <b>{user.age}</b></li>
      </ul>
      <p>{przykladowaZmienna}</p>
      <div>
        <p>wynik dodawania 5 + 10 = {addTwoNumbers(5, 10)}</p>
        <p>wynik mnożenia 5 * 10 = {wynikMnozenia}</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, porro?
      </p>
    </article>
  )
}

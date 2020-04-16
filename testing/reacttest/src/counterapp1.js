import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const plusOne = () => setCounter(counter + 1) + console.log('plus')
  const reset = () => setCounter(0) + console.log('reset')
  const minusOne = () => setCounter(counter - 1) + console.log('minus')

  return (
    <div>
      <h1>Testing app</h1>

      <div>
        <Display counter={counter} />
        <Button handleClick={plusOne} text={'Plus'} />
        <Button handleClick={minusOne} text={'Minus'} />
        <Button handleClick={reset} text={'Reset'} />
      </div>

    </div>
  )
}

  ReactDOM.render(<App />,
  document.getElementById('root')
  )

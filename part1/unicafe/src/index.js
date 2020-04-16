import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({title}) => <h1>{title}</h1>

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
  {text}
  </button>
)


const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Stats = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const scoreGood = good * 1
  const scoreNeutral = neutral * 0
  const scoreBad = bad * -1
  const scoreTotal = scoreGood + scoreNeutral + scoreBad
  const averageScore = scoreTotal / total
  const positive = good / total * 100

  if (total === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <Statistic text={'Good'} value={good} />
          <Statistic text={'Neutral'} value={neutral} />
          <Statistic text={'Bad'} value={bad} />
          <Statistic text={'All'} value={total} />
          <Statistic text={'Average'} value={averageScore} />
          <Statistic text={'Positive'} value={positive} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleGood = () => setGood(good + 1) + console.log('good clicked')
  const handleNeutral = () => setNeutral(neutral + 1) + console.log('neutral clicked')
  const handleBad = () => setBad(bad + 1) + console.log('bad clicked')

  return (
    <div>
      <Header title={'Give feedback'} />
      <Button handleClick={handleGood} text={'Good'} />
      <Button handleClick={handleNeutral} text={'Neutral'} />
      <Button handleClick={handleBad} text={'Bad'} />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
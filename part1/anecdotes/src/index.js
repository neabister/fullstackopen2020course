import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
  {text}
  </button>
)

const getBestAnecdote = (anecdotes, votes) => {
  const maxVote = Math.max.apply(null, votes)
  return {
    maxVoteAnecdote: anecdotes[votes.indexOf(maxVote)],
    maxVote
  }
}

const App = ({ anecdotes }) => {
  const listLength = anecdotes.length
  const generateArray = Array(listLength).fill(0)
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(generateArray)

  const { maxVoteAnecdote, maxVote } = getBestAnecdote(anecdotes, votes)

  const handleRandom = () => {
    const randomNumber = Math.floor(Math.random() * listLength)
    setSelected(randomNumber)
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      has {votes[selected]} votes
      <div>
        <Button handleClick={handleRandom} text={'Random anecdote'} />
        <Button handleClick={handleVote} text={'Vote'} />
      </div>
      <h1>Anecdote with most votes</h1>
      <p>{maxVoteAnecdote}</p>
      has {maxVote} votes
    </div>
  )
}


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

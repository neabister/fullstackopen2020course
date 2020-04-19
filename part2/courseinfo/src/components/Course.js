import React from 'react';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  const total = course.parts.reduce((a,b) => a + b.exercises, 0)
    return (
      <p>
        <b>Total of {total} exercises</b>
      </p>
    ) 
}

const Part = ({ part }) => {
  return ( 
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Parts = ({ parts }) => {
  return (
    <div>
      {parts.map((part, i) => 
        <Part key={i} part={part} />
      )}
    </div>    
  )
}

const Content = ({ course }) => {
  return (
    <div>
      <Parts parts={course.parts} />
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default Course;
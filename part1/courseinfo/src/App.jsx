const Header = ({ courseName }) => {
  return (
    <h1>{courseName}</h1>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <p>{name} {exercises}</p>
  )
}

const Content = ({ content }) => {
  // console.log(content)
  return (
    <>
      {
        content.map((info, idx) => <Part key={idx} {...info}/>)
      }
    </>
  )
}

const Total = ({ content }) => {
  const totalExercises = content.reduce((acc, course)=> {
    acc += course.exercises;
    return acc;
  }, 0);
  return (
    <p>Number of exercises {totalExercises}</p>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    content: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header courseName={course.name} />
      <Content content={course.content} />
      <Total content={course.content} />
    </div>
  )
}

export default App
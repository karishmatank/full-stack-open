// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   console.log(now, a + b)

//   return (
//     <div>
//       <p>Hello world, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//     </div>
//   )
// }

const Hello = ({ name, age }) => {
  // console.log(props)
  // return (
  //   <div>
  //     <p>Hello {props.name}, you are {props.age} years old</p>
  //   </div>
  // )

  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      Greeting app
    </div>
  )
}

const App = () => {
  // const friends = [
  //   { name: 'Peter', age: 4 },
  //   { name: 'Maya', age: 10 }
  // ]
  const name = 'Peter'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
      <Hello />
      <Footer />
    </>
  )
}

export default App
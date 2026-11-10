const Header = ({ courseName }) => {
  return (
    <h2>{courseName}</h2>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <p>{name} {exercises}</p>
  );
};

const Content = ({ content }) => {
  // console.log(content)
  return (
    <>
      {content.map((info) => <Part key={info.id} {...info}/>)}
    </>
  );
};

const Total = ({ content }) => {
  const totalExercises = content.reduce((acc, course)=> {
    acc += course.exercises;
    return acc;
  }, 0);
  return (
    <p><strong>total of {totalExercises} exercises</strong></p>
  );
};

const Course = ({ course }) => {
  const { name, content } = course;
  return (
    <div>
      <Header courseName={name} />
      <Content content={content} />
      <Total content={content} />
    </div>
  );
};

export default Course;
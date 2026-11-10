const Person = (props) => {
  const { name, number, handleDelete } = props;
  return (
    <>
      <div>{name} {number}</div>
      <button onClick={handleDelete}>delete</button>
    </>
  );
};

const People = (props) => {
  const { people, handleDelete } = props
  return (
    <>
    {people.map(({ id, name, number }) =>
      <Person key={id} name={name} number={number} handleDelete={() => handleDelete(id)} />
    )}
    </>
  );
};

export default People;
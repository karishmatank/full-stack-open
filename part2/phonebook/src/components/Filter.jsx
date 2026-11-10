const Filter = (props) => {
  const { query, onChange } = props;
  return (
    <div>
      filter shown with <input value={query} onChange={onChange} />
    </div>
  );
};

export default Filter;
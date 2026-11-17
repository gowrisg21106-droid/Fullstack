
function Card(props) {
  return (
    <div className="card">
      <h2>Student Details</h2>
      <p>Name: {props.name}</p>
      <p>Department: {props.department}</p>
      <p>Year of Passing: {props.year}</p>
    </div>
  );
}
export default Card;

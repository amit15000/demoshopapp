import "./Item.css";
function Item(props) {
  const name = props.name;
  return (
    <div>
      <div className="name">{name}</div>
      {props.children}

      <h1>I'm h1</h1>
    </div>
  );
}
export default Item;

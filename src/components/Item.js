import './Item.css'
function Item(props){
    const name = "Amit"
    return(
        <div className='name'>
            <p>{props.name}</p>
        </div>
    )
}
export default Item;
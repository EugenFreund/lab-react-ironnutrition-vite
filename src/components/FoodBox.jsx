function FoodBox(props) {
    return (
        <div key={props.food.id} style={{border:'1px solid black', width:'70vw', borderRadius: '20px', margin: "10px"}}>
            <h2>{props.food.name}</h2>

            <img style={{height:'200px'}} src={props.food.image} />

            <p>Calories: {props.food.calories}</p>
            <p>Servings {props.food.servings}</p>

            <p>
                <b>Total Calories: {props.food.servings} * {props.food.calories} </b> kcal
            </p>

            <button type="button" onClick={() => props.handelDelete(props.food.id)}>Delete</button>
        </div>
    );
}

export default FoodBox;

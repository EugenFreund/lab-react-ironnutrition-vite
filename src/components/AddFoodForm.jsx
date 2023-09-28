import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddFoodForm(props) {

    const [form, setForm] = useState({
        id: '',
        name: '',
        calories: 0,
        image: '',
        servings: ''
    });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        const newFood ={...form, id: uuidv4()}
        props.addNewFood(newFood)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="image">Image</label>
                <input
                    id="image"
                    name="image"
                    type="text"
                    value={form.image}
                    onChange={handleChange}
                />
            </div>            <div>
                <label htmlFor="servings">Servings</label>
                <input
                    id="servings"
                    name="servings"
                    type="number"
                    value={form.servings}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="calories">Calories</label>
                <input
                    id="calories"
                    name="calories"
                    type="number"
                    value={form.calories}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};


export default AddFoodForm;
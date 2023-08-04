import { Trash } from "phosphor-react";

export function Task() {
    return (
        <li>
            <label htmlFor="taskFinished">AA</label>
            <input type="checkbox" id="taskFinished"/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis molestias ratione modi? Dolorem</p>
            <Trash size={18}/>
        </li>
    )
}
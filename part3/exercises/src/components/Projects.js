import data from './../data.json';
import { useState } from 'react';

export default function MyProjects() {
    const [index, setIndex] = useState(0);
    const project = data.projects[index];
    function handleClick() {
        if (index < data.projects.length - 1) {
            setIndex(index + 1);
        }
        else {
            setIndex(0);
        }
    }

    return (
        <div>
            <button onClick={handleClick}>Next</button>
            <ul>
                <li>Canvas: {project.canvas}</li>
                <li>Designer: {project.designer}</li>
                <li>PhotoUrl: {project.photoUrl}</li>
                <li>Alt: {project.alt}</li>
            </ul>
        </div>

    )

}
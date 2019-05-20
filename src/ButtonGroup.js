import React from "react";
import { store } from "./store";
import { setTechnology } from "./actions";

const ButtonGroup = ({ technologies }) => (
    <div>
        { technologies.map((tech, i) => (
            <button
            data-tech={ tech }
            key={`btn-${i}`}
            className="hello-btn"
            onClick={ dispatchBtnAction }>
            { tech }
            </button>
        ))}
    </div>
);

/**Invoked when a button is clicked */
function dispatchBtnAction(e) {
    const tech = e.target.dataset.tech; /**get button text */
    store.dispatch(setTechnology(tech)); /**invoke action creator */
}

export default ButtonGroup;
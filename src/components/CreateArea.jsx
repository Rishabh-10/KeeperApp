import React, { useState } from "react";

// Material UI(core and icons)
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [noteDetails, setNoteDetails] = useState({
        title: "",
        content: ""
    });

    const [isExpanded, setExpanded] = useState(false);

    function changeDetails(event) {

        // destructuring object event.target
        const {name, value} = event.target;

        // const name = event.target.name;
        // const value = event.target.value;

        // The below code will work when you have the attribute name in the input field same as the properties in your noteDetails useState.
        setNoteDetails((previousValue) => {
            // this will change the value of the field that is being typed on and the rest will be ...previousValue
            return ({
                ...previousValue,
                [name]: value
            });
        });
    }

    function submitNote(event) {
        // the below line will prevent the form from reloading the webpage
        event.preventDefault();
        
        props.onAdd(noteDetails);

        setNoteDetails({
            title: "",
            content: ""
        });
    }

    function expand() {
        setExpanded(true);
    }

    return (
        <div>
        <form className="create-note" onSubmit={submitNote} method="POST">
            {/* IMP: conditional rendering using ternary or && */}
            {isExpanded && <input 
                name="title" 
                placeholder="Title" 
                value={noteDetails.title} 
                onChange={changeDetails} 
            />}
            <textarea 
                name="content" 
                placeholder="Take a note..." 
                rows={isExpanded?"3":"1"} 
                value={noteDetails.content} 
                onChange={changeDetails} 
                onClick={expand}
            />
            <Zoom in={isExpanded}>
                <Fab type="submit">
                    <AddIcon />
                </Fab>
            </Zoom>
        </form>
        </div>
    );
}

export default CreateArea;

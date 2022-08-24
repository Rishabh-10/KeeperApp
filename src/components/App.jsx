import React, { useState } from 'react'
import Header from './Header'
import Note from './Note'
import Footer from './Footer'
import CreateArea from './CreateArea';

// Warning: Each child in a list should have a unique "key" prop.
// to get rid of the above warning we need to add a key prop in the Note Component
// but the key prop will not be accessible 

// IMPORTANT
// JSX can only have expressions not statements
// expressions --> ternary operator
// statements --> if/else statement

const App = () => {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes((prevValue) => {
            return  [...prevValue, newNote];
        })
    }

    function deleteNode(noteIndex) {
        
        setNotes((prevNotes) => {
            return prevNotes.filter((noteItem, index) => {
                return (index !== noteIndex);
            });
        });
    }

    return (
        <>
            <Header />
            <CreateArea onAdd={addNote} />

            {notes.map((noteItem, index) => {
                console.log(noteItem);
                return (<Note 
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNode}
                />);
            })}

            <Footer />
        </>
    )
}

export default App;

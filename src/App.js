import React, { useState } from 'react'
import { Accordion } from './Components/Accordion'
import { Dropdown } from './Components/Dropdown'
import { Search } from './Components/Search'


const items = [
    {
        title: 'What is React?',
        content: 'React is a Frontend library of Javascript.'
    },
    {
        title: 'Why React is so popular?',
        content: 'React is famous among frontend engineers.'
    },
    {
        title: 'How to use React?',
        content: 'React is used by making simple reusable components.'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
]

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <button onClick = {() => { setShowDropdown(!showDropdown) } } >Toggle Dropdown</button>
            { showDropdown ?
                <Dropdown 
                selected = { selected }
                onSelectedChange = { setSelected }
                Options = { options } 
             /> : null
            }
            
        </div>
    )
}

export default App

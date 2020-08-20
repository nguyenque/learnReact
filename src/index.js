// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'


// Create React component
const App = () => {
    const buttonText = {text: 'click me'}
    const styleButton = {
        backgroundColor: 'red',
        color: 'white',
        marginLeft: '3px'
    }
    let labelText = "Enter Name:"
    return (
    <div>
            <label className="label" for="name">{labelText}</label>
            <input id="name" type="text" />
            <button style={styleButton}>
                {buttonText.text}
            </button>
        </div>
    )
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
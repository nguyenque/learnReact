// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'

// Create React component
const App = () => {
    return <div>Hi there! i just changed something!abc</div>
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
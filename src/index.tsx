import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component {
    render() {
        return <div>Hello</div>
    }
}


ReactDOM.hydrate(
    <Component/>,
    document.querySelector('[data-react]')
);

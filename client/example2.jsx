const React = require('react');
const ReactDOM = require('react-dom');

class HelloUser extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: props.username,
        };
    }

    render(){
        return(
            <div>
                <p>Hello {this.state.username}</p>
                <label>Change Name:</label>
                <input type="text" value={this.state.username} onChange={this.handleNameChange} /> {/* lowercase calls the HTML version, camel case calls the React version */}
            </div>
        );
    }

    handleNameChange = (e) => {
        // We need to make sure react is aware of the change we're making
        // React keeps track of everywhere the variable is used and will re-render the relevant areas when it is updated
        this.setState({ username: e.target.value });
    }
}

const init = () => {
    ReactDOM.render(<HelloUser username='Joe'/>, // username is one of the properties (props) that we're passing into the constructor
    document.getElementById('app'));
}
window.onload = init;
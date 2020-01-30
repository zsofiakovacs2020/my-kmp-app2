import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import NavBar from './components/Navbar';
import auth from './utils/auth.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {loginStatus: auth.checkLocalAuth()};
    this.loginStatusUpdated = this.loginStatusUpdated.bind(this);
  }

  loginStatusUpdated(loginStatus){
    this.setState({loginStatus: loginStatus});
  }

  render() {

    return (
      <div className="App">
        {this.state.loginStatus && <NavBar {...this.props}/>} 
        <header className="App-header">
          My KPM app
        <br />
          <Login {...{loginStatusUpdated: this.loginStatusUpdated}}/>


        </header>
      </div>
    );
  }
}

export default App;

import React from 'react';
import auth from '../utils/auth';
import Navbar from '../components/Navbar';
 
 
class Login extends React.Component {
 
    constructor(props){
        super(props);
       
        this.handleUserName = this.handleUserName.bind(this);
        this.handleUserPass = this.handleUserPass.bind(this);
        this.processLogin = this.processLogin.bind(this);
        this.processLogout= this.processLogout.bind(this);
        this.state = {show : !auth.checkLocalAuth()};
        
    }
    
 
    render() {
        
        return this.state.show? ( // operario ternario
            <div>
                
                <form>
                    <label>
                        Name:<input type="text" name="name" value={this.state.userName} onChange = {this.handleUserName}/>
                    </label>
                    <br></br>
                    <label>
                        Password:<input type="password" name="password" value={this.state.userPass} onChange = {this.handleUserPass}/>
                    </label>
                    <br></br>
                    <input type="submit" value="Submit" onClick = {this.processLogin} />
                    <br></br>
                </form>
            </div>

            
        ) : (<div>
            <form>
                <input type="button" value="Logout"  onClick = {this.processLogout} />
            </form>
        </div>);

        
    }
 
    processLogin() {
        if (this.state.userName === "Zsofi" && this.state.userPass === "123") {
            auth.storeAuth(this.state.userName, this.state.userPass);
            alert("Welcome " + this.state.userName);
            
            this.setState({show:false});
            this.props.loginStatusUpdated(true);
            
        } else {
            alert("Wrong user");
        }
        //event.preventDefault();
    }

    processLogout(event){
       auth.removeUserCredentails();
        this.setState({show:true});
        this.props.loginStatusUpdated(false);
       // event.preventDefault();
    }
 
    handleUserName(event){
        this.setState({userName: event.target.value});
    }
 
    handleUserPass(event){
        this.setState({userPass: event.target.value});
    }
 
}



export default Login;
import React, { Component } from "react";
import Item from './Item.js';

class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">

                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                       {this.props.listItems.map(item => {
                           
                           return <Item {...{ name: item.name,active: item.active }} />
                       } )} 

                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
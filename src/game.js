import React from "react";
//import ReactDOM from "react-dom";

export class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        showhide: false,
        };
    }
    
    render() {
        //const { showhide } = this.state;
        return (<h1>Hello World</h1> );
    }
}
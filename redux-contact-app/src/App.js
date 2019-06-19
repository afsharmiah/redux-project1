import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from './Actions/contactAction';
import About from './Component/About';
import Redux from './Component/Redux';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";


class App extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1=this.handleChange1.bind(this);
    this.handleChange2=this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
     
    this.state = {
      name: '',
      email:'',
      age:''
    }
  }

  handleChange(e){
    this.setState({
      name: e.target.value
     
    })
  }
  handleChange1(f){
    this.setState({
      email:f.target.value
    })
  }
  handleChange2(g){
    this.setState({
      age:g.target.value
    })
  }
  handleSubmit(e,f,g){
    e.preventDefault();
    let contact = {
      name: this.state.name,
      email:this.state.email,
      age:this.state.age
    }
    this.setState({
      name: '',
      email:'',
      age:''
    });
    this.props.createContact(contact);
  }

  listView(data, index){
    return (
      <div className="row">
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            Name:{data.name},
          </li>
          <li key={index} className="list-group-item clearfix">
            Email:{data.email},
          </li>
          <li key={index} className="list-group-item clearfix">
          Age:{data.age}
          </li>
        </div>
        <div className="col-md-2">
          <button onClick={(e) => this.deleteContact(e, index)} className="btn btn-danger">
            Remove
          </button>
        </div>
    </div> 
    )
  }

  deleteContact(e, index){
    e.preventDefault();
    this.props.deleteContact(index);
  }

  render() {

    return(
      <HashRouter>
      <div className="container">
        <h1>Clientside Contacts Application</h1>
        <hr />
        <div>
        <div>
            <ul className="nav">
            <li><NavLink to="/">About</NavLink></li>
            <li><NavLink to="/about">Home</NavLink></li>
            <li><NavLink to="/Redux">Redux</NavLink></li>
            </ul>
        <hr />
        </div>
        <div>
          <h2 className="headlines">Add a Contact</h2>
        </div>
          
          <form className="form-input" onSubmit={this.handleSubmit}>
              <div className="col-25">
                <label for="fname">Name: </label>
                <input type="text" onChange={this.handleChange} className="form-control" value={this.state.name} /><br />
              </div>
              <div className="col-25">
                <label for="fname"> Email: </label>
                <input type="text" onChange={this.handleChange1} className="form-control" value={this.state.email}/><br />
              </div>
              <div className="col-25">
                <label for="fname">Age: </label>
                <input type="text" onChange={this.handleChange2} className="form-control" value={this.state.age}/><br />
              </div>
                <input type="submit" className="btn-success" value="Submit"/>
          </form>
          <hr />
        { <ul className="list-group">
          {this.props.contacts.map((contact, i) => this.listView(contact, i))}
        </ul> }
        </div>
      
        <div className="content" >
            <Route  exact path="/about" component={About}/>
            <Route path="/redux" component={Redux}/>
        </div>
      </div>
        
      </HashRouter>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
   deleteContact: index =>dispatch(contactAction.deleteContact(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
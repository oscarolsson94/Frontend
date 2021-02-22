import React, { Component } from 'react';
import './ToDo.css';
import ToDoItem from './components/ToDoItem';
import Logo from './assets/logo.png';

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.idCounter = 2;
    this.hasBeenEdited = false;
    this.state = {
      // this is where the data goes
      list: [{
        id: 1,
        text: 'clean the house'
      },
      {
        id: 2,
        text: 'buy milk'
      }
      ],
      todo: ''
    };
  };

  createNewToDoItem = () => {
    if (!this.state.todo) {
      return alert("Please enter a todo!");
    }
    this.hasBeenEdited = false;
    this.idCounter++;
    this.setState({
      list: [
        ...this.state.list,
        {
          id: this.idCounter,
          text: this.state.todo
        }
      ],
      todo: ''
    });
  };

  handleKeyPress = e => {
    this.hasBeenEdited = true;
    if (e.key === 'Enter') {
      this.createNewToDoItem();
    }
  };

  handleInput = e => {
    this.setState({
      todo: e.target.value
    });
  };

  // this is now being emitted back to the parent from the child component
  onDeleteItem = indexToDelete => {
    // Since we use map in our render's loop we cannot use "the item" instead of index
    this.setState(({ list }) => ({
      list: list.filter((toDo, index) => index !== indexToDelete)
    }));
  };

  render() {
    return (
      <div className="ToDo">
        <img className="Logo" src={Logo} alt="React logo" />
        <h1 className="ToDo-Header">React To Do</h1>
        <div className="ToDo-Container">

          <div className="ToDo-Content">

            {this.state.list.map((item, key) => {
              return <ToDoItem
                key={item.id}
                item={item.text}
                onDeleteItem={this.onDeleteItem.bind(this, key)}
              />
            })}
          </div>

          <div>
            <input type="text" value={this.state.todo} onChange={this.handleInput} onKeyUp={this.handleKeyPress} />
            {(this.hasBeenEdited && !this.state.todo ? <div>Name is required.</div> : null)}
            <button className="ToDo-Add" onClick={this.createNewToDoItem}>+</button>
          </div>

        </div>
      </div>
    );
  }
}
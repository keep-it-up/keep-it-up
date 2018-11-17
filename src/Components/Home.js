import React from 'react';
import { Link } from 'react-router-dom';

var todoItems = [];
todoItems.push({ index: 1, value: 'Learn React', done: false });
todoItems.push({ index: 2, value: 'Go to Gym', done: true });
todoItems.push({ index: 3, value: 'Do not Smoke', done: true });

class TodoList extends React.Component {
  render() {
    var items = this.props.items.map((item, index) => {
      return (
        <TodoListItem
          key={index}
          item={item}
          index={index}
          removeItem={this.props.removeItem}
          markTodoDone={this.props.markTodoDone}
        />
      );
    });
    return <ul className="list-group"> {items} </ul>;
  }
}

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
  }
  onClickClose() {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  }

  render() {
    return (
      <li className="list-group-item ">
        <div className="undone">
          <span className="glyphicon glyphicon-ok icon" aria-hidden="true" />
          <Link to={`/goals/${this.props.item.value}`}>
            {this.props.item.value}
          </Link>
          <button type="button" className="close" onClick={this.onClickClose}>
            &times;
          </button>
        </div>
      </li>
    );
  }
}

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.refs.itemName.focus();
  }
  onSubmit(event) {
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;

    if (newItemValue) {
      this.props.addItem({ newItemValue });
      this.refs.form.reset();
    }
  }
  render() {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="form-inline">
        <input
          type="text"
          ref="itemName"
          className="form-control"
          placeholder="add a new goal..."
        />
        <button type="submit" className="btn btn-default">
          Add Goal
        </button>
      </form>
    );
  }
}

class TodoHeader extends React.Component {
  render() {
    return <h1>My keep-it-up list:</h1>;
  }
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = { todoItems: todoItems };
  }

  addItem(todoItem) {
    todoItems.unshift({
      index: todoItems.length + 1,
      value: todoItem.newItemValue,
      done: false,
    });
    this.setState({ todoItems: todoItems });
  }
  removeItem(itemIndex) {
    todoItems.splice(itemIndex, 1);
    this.setState({ todoItems: todoItems });
  }
  markTodoDone(itemIndex) {
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({ todoItems: todoItems });
  }
  render() {
    return (
      <div id="main">
        <TodoHeader />

        <TodoForm addItem={this.addItem} />

        <TodoList
          items={todoItems}
          removeItem={this.removeItem}
          markTodoDone={this.markTodoDone}
        />
      </div>
    );
  }
}

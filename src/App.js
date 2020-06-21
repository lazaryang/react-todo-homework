import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Input from './components/Input';
import Button from './components/Button';
import TodoItem from './components/TodoItem';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        
      ],
      inputValue: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  onSubmit = () => {
    this.setState({
      todos: [
        ... this.state.todos,
        {
          id: this.state.todos.length + 1,
          value: this.state.inputValue,
        }
      ]
    })    
  }
  
   myFunction = (index) => {
    const todos = this.state.todos.filter(todos => todos.id !== index);
    this.setState({todos:todos})
  }

  render() {
    const to = this.state.todos;
    console.log('to',to)
    return (
      <div className="App">
        <Header />
       
        <div>
          <Input handleChange={this.handleChange}  />
          <Button value="Submit" onClick={this.onSubmit} />
        </div> 
        <div>
          {
            this.state.todos.map((todos,index) => (
              <TodoItem key={todos.id} value={todos.value} id={todos.id} myFunction={this.myFunction} />
            ))
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

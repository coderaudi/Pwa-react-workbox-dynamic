import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: null,
      errMess: null,
      loading: false
    }
  }

  getTodo = () => {
    this.setState({ todo: null, errMess: null, loading: true })

    setTimeout(() => {

      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response =>
          response.json()

        )
        .then((res) => {
          this.setState({ todo: res, loading: false });
        }).catch((err) => {
          this.setState({ errMess: "Api err", loading: false })
        })
    }, 2000);

  }


  postData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos",
      {
        method: "POST",
        body: JSON.stringify({
          userId: 1,
          title: "NEW TITLE",
          completed: false
        }),
        headers: {
          "Content-type": "application / json; charset = UTF - 8"
        }
      })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch((err) =>{
        console.log(err);
      })

  }

  render() {
    return (
      <div className="App">

        <button class="add-button">Add to home screen</button>
        <h1>React- pwa - workbox</h1>
        <button onClick={() => this.getTodo()}> get req GetTodo</button>
        <br />
        {
          this.state.loading && <h4>Loading... {window.navigator.onLine ? "(online)" : "(offline)"}</h4>
        }
        {
          this.state.errMess && this.state.errMess
        }
        {
          this.state.todo && (
            <div>
              <br />
              <br />
              <br />

              <h3> userid {this.state.todo.id}</h3>
              <h3> title {this.state.todo.title}</h3>
            </div>
          )
        }

        <hr />

        <button onClick={( ) => this.postData()}>Post</button>
      </div>
    );
  }
}

export default App;

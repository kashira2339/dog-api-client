import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getDogs, deleteDog, createDog } from "./api";

const doDelete = id => deleteDog({ id });

const doCreate = val => createDog(val);

const doUpdate = id => {};

const doGet = () => {};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      newDog: {
        name: "",
        gender: "",
        birthday: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.getDogs();
  }
  getDogs() {
    getDogs().then(dogs => this.setState({ dogs }));
  }
  handleChange(name) {
    return e => {
      this.setState({
        ...this.state,
        newDog: { ...this.state.newDog, [name]: e.target.value }
      });
    };
  }

  render() {
    return (
      <div className="App">
        <header>
          <p>Dog API Client</p>
        </header>
        <div>
          <table>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>gender</th>
              <th>birthday</th>
              <th />
            </tr>
            {this.state.dogs.map(dog => {
              return (
                <tr key={dog.id}>
                  <td>{dog.id}</td>
                  <td>{dog.name}</td>
                  <td>{dog.gender}</td>
                  <td>{dog.birthday}</td>
                  <th>
                    <button
                      onClick={() =>
                        doDelete(dog.id).then(() => this.getDogs())
                      }
                    >
                      del
                    </button>
                  </th>
                </tr>
              );
            })}
            <td />
            <td>
              <input
                type="text"
                onChange={this.handleChange("name")}
                placeholder="name"
              />
            </td>
            <td>
              <input
                type="gender"
                onChange={this.handleChange("gender")}
                placeholder="gender"
              />
            </td>
            <td>
              <input
                type="birthday"
                onChange={this.handleChange("birthday")}
                placeholder="birthday"
              />
            </td>
            <td>
              <button
                onClick={() =>
                  doCreate(this.state.newDog).then(() => this.getDogs())
                }
              >
                add
              </button>
            </td>
          </table>
        </div>
      </div>
    );
  }
}

export default App;

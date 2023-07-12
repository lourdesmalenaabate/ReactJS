import React, { Component } from "react";
import "./TransitionGroupEjemplo.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// --------------
// User Component
// --------------

function User(props) {
  return (
    <div className="leaderboard-list__item">
      <div className="leaderboard-list__item__place">{props.index + 1}</div>
      <div className="leaderboard-list__item__name">{props.userName}</div>
    </div>
  );
}

class TransitionGroupEjemplo extends Component {
  constructor() {
    super();

    this.state = {
      users: [
        "Mariusz",
        "Matt",
        "Lauren",
        "Beckett",
        "Dulio",
        "Steve",
        "Chris",
      ],
      activeUsers: ["Myra", "Clement"],
    };

    this.addUser = this.addUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }

  //Agregar Usuario
  addUser() {
    if (!this.state.users.length) return;

    const randomIndex = Math.floor(Math.random() * this.state.users.length);
    const userToAdd = this.state.users[randomIndex];
    const newUsers = [...this.state.users];
    newUsers.splice(randomIndex, 1);

    this.setState({
      users: newUsers,
      activeUsers: [...this.state.activeUsers, userToAdd],
    });
  }

  //Eliminar Usuario
  removeUser() {
    if (!this.state.activeUsers.length) return;

    const newUsers = [...this.state.users];
    const newActiveUsers = [...this.state.activeUsers];
    const removedUser = newActiveUsers.splice(newActiveUsers.length - 1);
    newUsers.push(removedUser);

    this.setState({
      users: newUsers,
      activeUsers: newActiveUsers,
    });
  }

  render() {
    return (
      <div className="leaderboard">
        <div className="leaderboard-controls">
          <button
            className="leaderboard-controls__button"
            onClick={this.addUser}>
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 129.5 129.5"
              style={{ enableBackground: "new 0 0 129.5 129.5" }}
              xmlSpace="preserve">
              <line
                className="icon__line"
                x1="64.8"
                y1="7.5"
                x2="64.8"
                y2="122"
              />
              <line
                className="icon__line"
                x1="122"
                y1="64.8"
                x2="7.5"
                y2="64.8"
              />
            </svg>
          </button>
          <button
            className="leaderboard-controls__button"
            onClick={this.removeUser}>
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 129.5 129.5"
              style={{ enableBackground: "new 0 0 129.5 129.5" }}
              xmlSpace="preserve">
              <line
                className="icon__line"
                x1="122"
                y1="64.8"
                x2="7.5"
                y2="64.8"
              />
            </svg>
          </button>
        </div>

        <div className="leaderboard-list">
          {/*Renderizado de Lista con TransitionGroup*/}
          <TransitionGroup component={null}>
            {this.state.activeUsers.map((userName, index) => (
              <CSSTransition
                key={`user-${index}`}
                timeout={{
                  enter: 800,
                  exit: 500,
                }}
                classNames="leaderboard-list__item-">
                <User userName={userName} index={index} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default TransitionGroupEjemplo;

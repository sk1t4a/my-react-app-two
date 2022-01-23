import React from "react";
import "./styles.css";
import Button from "./components/Button";
import UserList from "./components/UserList";
import PreLoader from "./components/PreLoader";

class App extends React.Component {
  state = {
    userInfo: undefined,
    loading: false
  };

  gettingUsers = async () => {
    this.setState({ loading: true });
    const url = await fetch("https://randomuser.me/api/?results=10");
    const data = await url.json();

    this.setState({
      userInfo: data.results,
      loading: false
    });
  };

  render() {
    if (this.state.loading) return <PreLoader />;
    return (
      <div className="App">
        <Button onClick={() => this.gettingUsers()} label={"Список"} />
        <UserList users={this.state.userInfo} />
      </div>
    );
  }
}
export default App;

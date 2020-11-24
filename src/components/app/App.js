import React, { Component } from "react";
import "./App.css";
import { NavbarData } from "../data/NavbarData";
import Navbar from "../navbar/Navbar";
import FoodPage from "../foodPage/FoodPage";
import ClothesPage from "../clothesPage/ClothesPage";
import ElectronicPage from "../electronicPage/ElectronicPage";
import MisPage from "../misPage/MisPage";
import RegisterPage from "../registerPage/RegisterPage";
import FooterApp from "../footer/FooterApp";
import {LoginData} from "../data/LoginData"
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      LoginData,
      NavbarData,
      homePage: true,
      foodPage: false,
      clothesPage: false,
      electronicPage: false,
      misPage: false,
      registerPage: false,
      loginPage: false,
      isLoggedIn: false,
      username: "",
      password:"",
    };
  }
  navbarToggle = (clickedTab) =>
    this.setState({
      homePage: false,
      foodPage: false,
      clothesPage: false,
      electronicPage: false,
      misPage: false,
      registerPage: false,
      loginPage: false,
      [clickedTab]: true,
    });
  loginToggle = () => this.setState({
    loginPage: true
  })
  usernameChange = username => this.setState({username: username.target.value})
  passwordChange = password => this.setState({password: password.target.value})
  loginClick = (event) => {
    event.preventDefault()
    for (let i=0; i<LoginData.length; i++){
      this.state.username===LoginData[i].username && this.state.password===LoginData[i].password ?
      this.setState({isLoggedIn:true})
      : alert("wrong username/password")
    }
  }

  render() {
    return (
      <>
        <nav>
          <ul>
            {this.state.NavbarData.map((data, index) => (
              <Navbar
                key={index}
                property={data.property}
                title={data.name}
                action={this.navbarToggle}
              />
            ))}
          </ul>
        </nav>

        {this.state.loginPage === true && (
          <form>
            <input placeholder="Username" value={this.state.username} onChange={this.usernameChange.bind(this)}></input>
            <input placeholder="Password" value={this.state.password} onChange={this.passwordChange.bind(this)}></input>
            <button onClick={this.loginClick} type="submit">Login</button>
        </form>
        )}
        
        {this.state.homePage === true && (
          <main>
            <h1>i am the homepage</h1>
          </main>
        )}
        {this.state.foodPage === true && (
          <main>
            <FoodPage />
          </main>
        )}
        {this.state.clothesPage === true && (
          <main>
            <ClothesPage />
          </main>
        )}
        {this.state.electronicPage === true && (
          <main>
            <ElectronicPage />
          </main>
        )}
        {this.state.misPage === true && (
          <main>
            <MisPage />
          </main>
        )}
        {this.state.registerPage === true && (
          <main>
            <RegisterPage />
          </main>
        )}
        <FooterApp />
      </>
    );
  }
}

export default App;
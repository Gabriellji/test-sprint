import React, { Component } from "react";
import "./App.css";
import { NavbarData } from "../data/NavbarData";
import Navbar from "../navbar/Navbar";
import FoodPage from "../foodPage/FoodPage";
import ClothesPage from "../clothesPage/ClothesPage";
import ElectronicPage from "../electronicPage/ElectronicPage";
import MisPage from "../misPage/MisPage";
import RegisterPage from "../registerPage/RegisterPage";
import LoginPage from "../loginPage/LoginPage";
import FooterApp from "../footer/FooterApp";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      NavbarData,
      homePage: true,
      foodPage: false,
      clothesPage: false,
      electronicPage: false,
      misPage: false,
      registerPage: false,
      loginPage: false,
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
        {this.state.loginPage === true && (
          <main>
            <LoginPage />
          </main>
        )}
        <FooterApp />
      </>
    );
  }
}

export default App;

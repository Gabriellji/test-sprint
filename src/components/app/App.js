import React, { Component } from 'react';
import "./App.css"
import {NavbarData} from '../data/NavbarData'
import Navbar from '../navbar/Navbar'
import FoodPage from '../foodPage/FoodPage'
import ClothesPage from '../clothesPage/ClothesPage'
import ElectronicPage from '../electronicPage/ElectronicPage'
import MisPage from '../misPage/MisPage'
import RegisterPage from '../registerPage/RegisterPage'
import LoginPage from '../loginPage/LoginPage'
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
      loginPage: false
    }
  }
  navbarToggle = clickedTab => (
    this.setState({
      homePage: false,
      foodPage: false,
      clothesPage: false,
      electronicPage: false,
      misPage: false,
      registerPage: false,
      loginPage: false,
      [clickedTab] : true
    })
  )

  render() {
    return (
      <div>
        <nav>
          <ul>
            {this.state.NavbarData.map((data, index) => (
              <Navbar key={index} property={data.property} title={data.name} action={this.navbarToggle}/>
            ))}
          </ul>
        </nav>

        {this.state.homePage===true &&
        <div>
          <h1>i am the homepage</h1>
        </div>
                }
        {this.state.foodPage===true &&
        <div>
          <FoodPage/>
        </div>
                }
        {this.state.clothesPage===true &&
        <div>
          <ClothesPage/>
        </div>
                }
        {this.state.electronicPage===true &&
        <div>
          <ElectronicPage/>
        </div>
                }
        {this.state.misPage===true &&
        <div>
          <MisPage/>
        </div>
                }
        {this.state.registerPage===true &&
        <div>
          <RegisterPage/>
        </div>
                }
        {this.state.loginPage===true &&
        <div>
          <LoginPage/>
        </div>
                }
      </div>
    );
  }
}

export default App;
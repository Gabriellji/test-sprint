import React, { Component } from 'react';
import "./App.css"
import {NavbarData} from '../data/NavbarData'
import Navbar from '../navbar/Navbar'
import Shop from '../shop/Shop'
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      NavbarData,
      homePage: true,
      buyPage: false,
      localsPage: false,
      contactPage: false,
    }
  }
  navbarToggle = clickedTab => (
    this.setState({
      homePage: false,
      buyPage: false,
      localsPage: false,
      contactPage: false,
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
        {this.state.buyPage===true &&
        <div className="wholeShop">
          <Shop/>
        </div>
                }
        {this.state.localsPage===true &&
        <div>
          <h1>i am the localsPage</h1>
        </div>
                }
        {this.state.contactPage===true &&
        <div>
          <h1>i am the contactPage</h1>
        </div>
                }
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import CommerceService from '../../services/commerce-service';
import Card from '../card/Card';
//import CardList from '../cardlist/CardList';
import Button from '../button/Button';
import './App.css';


class App extends Component {

  commerceService = new CommerceService();

  state = {
    cardList: null,
    loading: true,
    selectedCategory: null
  };

  componentDidMount() {
    this.commerceService
      .getAllProducts()
      .then((cardList) => {
        console.log(cardList)
        this.setState({
          cardList,
          loading: false
        });
      })
      .catch(console.error());
  }

  renderItems(arr) {
    return arr.map(({ id, category, description, image, price, title }) => {
      return <Card
        key={id}
        category={category}
        description={description}
        image={image}
        price={price}
        title={title}
      />
    });
  }

  onCategoryBtnClick = (e) => {
    this.setState({
      selectedCategory: e.target.innerText
    });
  }

  renderButtons = (arr) => {
    const filtered = arr.map(item => item.category)
      .filter((value, index, self) => self.indexOf(value) === index);
    console.log(filtered)
    return filtered.map((element, index) => <Button
      onCategoryBtnClick={this.onCategoryBtnClick}
      category={element}
      key={index} />)
  }



  onCategoryFilter = (arr, category) => arr.filter(item => item.category === category)

  render() {

    const { cardList, loading, selectedCategory } = this.state;

    return (
      <div className="App">
        <h1>Hello Guys!</h1>
        {/* <CardList>

            </CardList> */}
        <div className="btn_wrap">
          {!loading && this.renderButtons(cardList)}
        </div>
        <div className="card-list_wrap">
          {!loading &&
            (!selectedCategory ? this.renderItems(cardList)
              : this.renderItems(this.onCategoryFilter(cardList, selectedCategory)))}
        </div>
      </div>
    )
  }
}

export default App;

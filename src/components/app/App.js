
import React, { Component } from 'react';
import CommerceService from '../../services/commerce-service';
import Card from '../card/Card';
//import CardList from '../cardlist/CardList';
import Button from '../button/Button';
import Spinner from '../spinner/Spinner';
import './App.css';


class App extends Component {

  commerceService = new CommerceService();

  state = {
    cardList: {},
    loading: true,
    selectedCategory: 'All',
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

  handleClickFavorite = (index) => {
    let newState = [...this.state.cardList];
    newState[index].isFavorite = !newState[index].isFavorite;
    this.setState({ cardList: newState });
  }

  renderItems(arr) {
    return arr.map(({ id, category, description, image, price, title, isFavorite }) => {
      return <Card
        key={id}
        index={id - 1}
        category={category}
        description={description}
        image={image}
        price={price}
        title={title}
        isFavorite={isFavorite}
        onFavoriteClick={this.handleClickFavorite}
      />
    });
  }

  onCategoryBtnClick = (e) => {
    this.setState({
      selectedCategory: e.target.innerText
    });
  }

  onAllBtnClick = () => {
    this.setState({
      selectedCategory: 'all'
    });
  }

  renderButtons = (arr) => {
    const filtered = arr.map(item => item.category)
      .filter((value, index, self) => self.indexOf(value) === index);
      filtered.push('All');
    return filtered.map((element, index) =>
      <Button
        onCategoryBtnClick={this.onCategoryBtnClick}
        category={element}
        key={index}
      />)
  }

  onCategoryFilter = (arr, category) => arr.filter(item => item.category === category)

  render() {

    const { cardList, loading, selectedCategory } = this.state;

    // const spinner = loading ? <Spinner /> : null;

    return (
      <div className="App">
        {/* {spinner} */}
        {
          loading && <Spinner />
        }
        <h1>Hello Guys!</h1>
        {/* <CardList>
          {!loading &&
            (!selectedCategory ? this.renderItems(cardList)
              : this.renderItems(this.onCategoryFilter(cardList, selectedCategory)))}
        </CardList> */}
        <div className="btn_wrap">
          {!loading && this.renderButtons(cardList)}
        </div>
        <div className="card-list_wrap">
          {!loading &&
            (selectedCategory === 'All' ? this.renderItems(cardList)
              : this.renderItems(this.onCategoryFilter(cardList, selectedCategory)))}
        </div>
      </div>
    )
  }
}

export default App;

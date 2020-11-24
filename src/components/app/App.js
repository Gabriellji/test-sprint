
import React, { Component } from 'react';
import CommerceService from '../../services/commerce-service';
import Card from '../card/Card';
import Button from '../button/Button';
import Spinner from '../spinner/Spinner';

import './App.css';
import TransformBtn from './transform-view-button/TransformBtn';


class App extends Component {

  commerceService = new CommerceService();

  state = {
    cardList: {},
    loading: true,
    selectedCategory: 'All',
    view: 'grid'
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

  renderButtons = (arr) => {
    const filtered = arr.map(item => item.category)
      .filter((value, index, self) => self.indexOf(value) === index);
      filtered.push('Favorite', 'All');
    return filtered.map((element, index) =>
      <Button
        onCategoryBtnClick={this.onCategoryBtnClick}
        category={element}
        key={index}
      />)
  }

  onCategoryFilter = (arr, category) => arr.filter(item => item.category === category)

  onFavoriteFilter = (arr, category) => arr.filter(item => item[category] === true)

  onTransformBtnClick = (e) => this.setState({ view: e.target.innerText})

  render() {

    const { cardList, loading, selectedCategory, view } = this.state;

    return (
      <div className="App">
        {
          loading && <Spinner />
        }
        <h1>Hello Guys!</h1>
        <div className="btn_wrap">
          {!loading && this.renderButtons(cardList)}
        </div>
        <TransformBtn
        el={view}
        onTransformBtnClick={this.onTransformBtnClick}
        />
        <div className={`card-list_wrap ${view}`}>
          {!loading &&
            (selectedCategory === 'All' ? this.renderItems(cardList)
              : ( selectedCategory === 'Favorite' ? this.renderItems(this.onFavoriteFilter(cardList, `isFavorite`))
              : this.renderItems(this.onCategoryFilter(cardList, selectedCategory))))}
        </div>
      </div>
    )
  }
}

export default App;

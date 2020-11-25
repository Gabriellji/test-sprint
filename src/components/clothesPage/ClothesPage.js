
import React, { Component } from 'react';
import CommerceService from '../../services/commerce-service';
import Card from '../card/Card';
import Button from '../button/Button';
import Spinner from '../spinner/Spinner';

import './ClothesPage.css';
import TransformBtn from '../transform-view-button/TransformBtn';
import ShoppingCart from '../shopping-cart/ShoppingCart';


class ClothesPage extends Component {

  commerceService = new CommerceService();

  state = {
    cardList: {},
    loading: true,
    selectedCategory: 'All',
    view: 'grid',
    countItem: 0,
    showItem: false
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

  findAddedItem = (arr) => {
    return arr.filter(item => !(!item.addedToCart))
  }

  renderAddedItems = (arr) => {
    return arr.map(({ title, price }, i) => {
      return <ShoppingCart
        key={i}
        title={title}
        price={price}
      />
    })
  }

  count = 0; 

  onAddToCartClick = (index) => {
    let newState = [...this.state.cardList];
    newState[index].addedToCart = true;
    this.count++
    this.setState({ 
      cardList: newState, 
      countItem: this.count
     });
    this.findAddedItem(this.state.cardList);
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
        addBtnText={'Add to cart'}
        onAddToCartClick={this.onAddToCartClick}
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


  showItems = () => {
    this.setState({
      showItem: !this.state.showItem
    });
  }

  onCategoryFilter = (arr, category) => arr.filter(item => item.category === category)

  onFavoriteFilter = (arr, category) => arr.filter(item => !(!item[category]))

  onTransformBtnClick = (e) => this.setState({ view: e.target.innerText })

  render() {

    const { cardList, loading, selectedCategory, view, countItem, showItem } = this.state;

    return (
      <div className="App">
        {
          loading && <Spinner />
        }
        <div 
        className={`cart ${showItem}`}
        onClick={this.showItems}
        >
      <span className="count">{countItem} items</span>
          {
            !loading && this.renderAddedItems(this.findAddedItem(cardList))
          }
        </div>
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
              : (selectedCategory === 'Favorite' ? this.renderItems(this.onFavoriteFilter(cardList, `isFavorite`))
                : this.renderItems(this.onCategoryFilter(cardList, selectedCategory))))}
        </div>
      </div>
    )
  }
}

export default ClothesPage;

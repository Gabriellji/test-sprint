import React, { Component } from 'react';
import CommerceService from '../../services/commerce-service';
import Card from '../card/Card';

class CardList extends Component {

    commerceService = new CommerceService();

    state = {
        cardList: null,
        loading: true
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
        })
    }

    render() {

        const { cardList, loading } = this.state;
        console.log(cardList)

        //const items = this.renderItems(cardList);

        return (
            <div className="card-list_wrap">
                {!loading && this.renderItems(cardList)}
            </div>
        )
    }
}

export default CardList;
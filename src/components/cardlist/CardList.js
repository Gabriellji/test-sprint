import React, { Component } from 'react';
import CommerceService from '../../services/commerce-service';

class CardList extends Component {

    commerceService = new CommerceService();

    state = {
        cardList: null
    };

    componentDidMount() {
        this.commerceService
        .getAllProducts()
        .then((cardList) => {
            console.log(cardList)
            this.setState({
                cardList
            });
        });
    }

    render() {
        return (
            <div className="card-list_wrap">

            </div>
        )
    }
}

export default CardList;
export default class CommerceService {

    _apiBase = ('https://fakestoreapi.com/products');

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    }

    async getAllProducts() {
        const res = await this.getResourse('');
        return res.map(this._transformCardList);
    }

    async getSingleProduct(id) {
        const product = await this.getResourse(`/${id}`);
        return this._transformCardList(product);
    }

    async getLimitResults(num) {
        const res = await this.getResourse(`/?limit=${num}`);
        return res.map(this._transformCardList);
    }

    async getSortResults(value) {  //value =  'desc' || 'asc'
        const res = await this.getResourse(`/?sort=${value}`);
        return res.map(this._transformCardList);
    }

    async getSpecificCategory(category) {
        const res = await this.getResourse(`/category/${category}`);
        return res.map(this._transformCardList);
    }

    async getLimitSortCategory(category, limit, sort) {
        const res = await this.getResourse(`/category/${category}?limit=${limit}&sort=${sort}`);
        return res.map(this._transformCardList);
    }

    _transformCardList = (data) => {
        return {
            category: data.category,
            description: data.description,
            id: data.id,
            image: data.image,
            price: data.price,
            title: data.title,
            isFavorite: false,
            addedToCart: false
        }
    }
}

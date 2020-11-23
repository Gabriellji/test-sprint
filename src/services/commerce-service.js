export default class CommerceService {

    _apiBase = ('https://fakestoreapi.com/products');

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        return await res.json();
    }

    async getAllProducts() {
        const res = await fetch(_apiBase);
        return await res.json();
    }

    async getSingleProduct(id) {
        const res = await this.getResourse(`/${id}`);
        return await res.json();
    }

    async getLimitResults(num) {
        const res = await this.getResourse(`/?limit=${num}`);
        return await res.json();
    }

    async getSortResults(value) {  //value =  'desc' || 'asc'
        const res = await this.getResourse(`/?sort=${value}`);
        return await res.json();
    }

    async getSpecificCategory(category) {
        const res = await this.getResourse(`/category/${category}`);
        return await res.json();
    }

    async getLimitSortCategory(category, limit, sort) {
        const res = await this.getResourse(`/category/${category}?limit=${limit}&sort=${sort}`);
        return await res.json();
    }
}

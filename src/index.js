import React from 'react';

import axios from 'axios';

import search from './search';

class NewsWrapper {
    constructor(options) {
        this.apiUrl = options.apiUrl || 'http://news';
        this.token = options.token || '';

        this.search = search.bind(this)();
    }

    get(url) {
        const headers = {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        };

        axios.get(url, headers);
    }
}

export default NewsWrapper;
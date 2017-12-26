import React from 'react';

import axios from 'axios';

import { API_URL } from '../config/constants';
import search from './search';

class NewsWrapper {
    constructor(options) {
        this.apiUrl = options.apiUrl || API_URL;
        this.token = options.token || '';

        this.search = search.bind(this)();
    }

    get(url) {
        return axios.get(`${url}&apiKey=${this.token}`);
    }
}

export default NewsWrapper;
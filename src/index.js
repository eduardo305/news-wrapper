import React from 'react';

import axios from 'axios';
import buildUrl from 'build-url';

import { API_URL } from './config/constants';
import search from './search';

class NewsWrapper {
    constructor(options) {
        this.apiUrl = options.apiUrl || API_URL;
        this.token = options.token || '';

        this.search = search.bind(this)();
    }

    get(path = '', params) {
        const formattedUrl = buildUrl(`${API_URL}/${path}`, {
            queryParams: {
                ...params,
                apiKey: `${this.token}`
            }
        });
        return axios.get(encodeURI(`${formattedUrl}`));
    }
}

export default NewsWrapper;
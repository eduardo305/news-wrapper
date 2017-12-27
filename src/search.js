import { API_URL } from './config/constants';
import buildUrl from 'build-url';

function searcher(type, query = '') {
    switch(type) {
        case 'top-headlines':
            return this.get(type, { sources: query });
        default:
            return this.get(type, { q: query }); 
    }
}

function sourcesSearcher(type, category, country) {
    const queryParams = {};

    if (category) {
        queryParams.category = category;
    }

    if (country) {
        queryParams.country = country;
    }

    return this.get(type, queryParams);
}

export default function() {
    return {
        topheadlines: searcher.bind(this, 'top-headlines'),
        sources: sourcesSearcher.bind(this, 'sources'),
        everything: searcher.bind(this, 'everything')
    }
}
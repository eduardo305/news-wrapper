import { API_URL } from './config/constants';
import buildUrl from 'build-url';

function searcher(type, { query = '', sources = 'techcrunch', from='', to='', category, language, country, page = 1 }) {
    const queryParams = {};

    if (query) queryParams.q = query;
    
    queryParams.sources = sources;

    if (from) queryParams.from = from;

    if (to) queryParams.to = to;

    if (page) queryParams.page = page;
    
    if (category) queryParams.category = category;

    if (language) queryParams.language = language;

    if (country) queryParams.country = country;

    return this.get(type, queryParams); 
}

function sourcesSearcher(type, { category, country, language }) {
    const queryParams = {};

    if (category) {
        queryParams.category = category;
    }

    if (country) {
        queryParams.country = country;
    }

    if (language) {
        queryParams.language = language
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
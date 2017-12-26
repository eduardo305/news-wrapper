import { API_URL } from '../config/constants';

function searcher(type, query) {
    return this.get(`${API_URL}/${type}?sources=${query}`)
}

export default function() {
    return {
        topheadlines: searcher.bind(this, 'top-headlines'),
        sources: () => console.log('sources'),
        everything: () => console.log('everything')
    }
}
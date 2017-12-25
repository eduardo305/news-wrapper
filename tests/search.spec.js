import chai, { expect } from 'chai';
import sinon from 'sinon';

import NewsWrapper from '../src/index';

describe('Search', () => {
    let news;

    beforeEach(() => {
        news = new NewsWrapper({
            token: 'foo'
        });
    });

    describe('Smoke tests', () => {
        it('should have a news.search.topheadlines method', () => {
            expect(news.search.topheadlines).to.exist;
        });

        it('should have a news.search.sources method', () => {
            expect(news.search.sources).to.exist;
        });

        it('should have a news.search.everything method', () => {
            expect(news.search.everything).to.exist;
        });
    });
});

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import axios from 'axios';

import NewsWrapper from '../src/index';

chai.use(sinonChai);

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

    describe('news.search.topheadlines', () => {
        let stubbedAxios;

        beforeEach(() => {
            stubbedAxios = sinon.stub(axios, 'get');
        });

        afterEach(() => {
            stubbedAxios.restore();
        });

        it('should call axios.get method', () => {
            const news = new NewsWrapper({ token: 'foo' });

            news.search.topheadlines('any source');

            expect(stubbedAxios).to.have.been.calledOnce;
        });

        it('should call axios.get with the source provided', () => {
            const news = new NewsWrapper({ token: 'foo' });

            news.search.topheadlines('any-source');

            expect(stubbedAxios)
                .to.have.been.calledWith('https://newsapi.org/v2/top-headlines?sources=any-source&apiKey=foo');
            
        });
    });
    
});

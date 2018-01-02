import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import axios from 'axios';

import NewsWrapper from '../src/index';

chai.use(sinonChai);

describe('Search', () => {
    let news, stubbedAxios;

    beforeEach(() => {
        news = new NewsWrapper({
            token: 'foo'
        });

        stubbedAxios = sinon.stub(axios, 'get');
    });

    afterEach(() => {
        stubbedAxios.restore();
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
        it('should call axios.get method', () => {
            news.search.topheadlines({ sources: 'any source' });

            expect(stubbedAxios).to.have.been.calledOnce;
        });

        it('should call axios.get with the source provided', () => {
            news.search.topheadlines({ sources: 'any-source'});

            expect(stubbedAxios)
                .to.have.been.calledWith('https://newsapi.org/v2/top-headlines?sources=any-source&page=1&apiKey=foo');
        });

        it('should call axios.get method with language and country provided', () => {
            news.search.topheadlines({ sources: 'any-source', language: 'en' , country: 'us' });

            expect(stubbedAxios)
                .to.have.been.calledWith('https://newsapi.org/v2/top-headlines?sources=any-source&page=1&language=en&country=us&apiKey=foo');
        });
    });

    describe('NewsWrapper.search.sources', () => {
        it('should call axios.get method', () => {
            news.search.sources({});

            expect(stubbedAxios).to.have.been.calledOnce;
        });

        it('should call axios.get with the source provided', () => {
            news.search.sources({});

            expect(stubbedAxios)
                .to.have.been.calledWith('https://newsapi.org/v2/sources?apiKey=foo');
        });

        it('should return sources by the category provided', () => {
            news.search.sources({ category: 'sports' });

            expect(stubbedAxios)
                .to.have.been.calledWith('https://newsapi.org/v2/sources?category=sports&apiKey=foo');
        });

        it('should return sources by the country provided', () => {
            news.search.sources({ category: '', country: 'br' });

            expect(stubbedAxios)
                .to.have.been.calledWith('https://newsapi.org/v2/sources?country=br&apiKey=foo');
        });

        it('should return sources by country and category provided', () => {
            news.search.sources({ category: 'sports', country: 'br'});

            expect(stubbedAxios)
                .to.have.been.calledWith('https://newsapi.org/v2/sources?category=sports&country=br&apiKey=foo');
        });

        it('should return sources by language provided', () => {
            news.search.sources({ category: 'sports', language: 'en' });
            
            expect(stubbedAxios)
                .to.have.been.calledWith('https://newsapi.org/v2/sources?category=sports&language=en&apiKey=foo');
        });
    });

    describe('NewsWrapper.search.everything', () => {
        it('should call axios.get method', () => {
            news.search.everything({ query: 'any subject' });

            expect(stubbedAxios).to.have.been.calledOnce;
        });

        it('should call axios.get with provided query parameter', () => {
            news.search.everything({ query: 'any subject' });

            expect(stubbedAxios).to.have.been.calledWith('https://newsapi.org/v2/everything?q=any%20subject&sources=techcrunch&page=1&apiKey=foo');
        });

        it('should call axios.get with provided query and source', () => {
            news.search.everything({ query: 'tdd', sources: 'cnn' });

            expect(stubbedAxios).to.have.been.calledWith('https://newsapi.org/v2/everything?q=tdd&sources=cnn&page=1&apiKey=foo');
        });

        it('should call axios.get with provided query and interval', () => {
            news.search.everything({ query: 'tdd', sources: 'cnn', from: '2017-12-25', to: '2017-12-28' });

            expect(stubbedAxios).to.have.been.calledWith('https://newsapi.org/v2/everything?q=tdd&sources=cnn&from=2017-12-25&to=2017-12-28&page=1&apiKey=foo');
        });

        it('should call axios.get with provided query and page', () => {
            news.search.everything({ query: 'tdd', sources: 'cnn', page:2 });
            expect(stubbedAxios).to.have.been.calledWith('https://newsapi.org/v2/everything?q=tdd&sources=cnn&page=2&apiKey=foo');
        });
    });
});

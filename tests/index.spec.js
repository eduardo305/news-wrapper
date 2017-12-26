import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import axios from 'axios';

chai.use(sinonChai);

import NewsWrapper from '../src/index';
import { API_URL } from '../config/constants';

describe('NewsWrapper library', () => {
    it('should create an instance of NewsWrapper', () => {
        const news = new NewsWrapper({});
        expect(news).to.be.an.instanceOf(NewsWrapper);
    });

    it('should create the object with the url passed', () => {
        const news = new NewsWrapper({
            apiUrl: 'someUrl'
        });

        expect(news.apiUrl).to.be.equal('someUrl')
    });

    it('should create an object with a default apiUrl if one is not provided', () => {
        const news = new NewsWrapper({});

        expect(news.apiUrl).to.be.equals(API_URL);
    });

    it('should set a token if one is passed', () => {
        const news = new NewsWrapper({
            token: 'sometoken'
        });

        expect(news.token).to.be.equals('sometoken');
    });

    describe('get method', () => {
        let stubbedAxios;

        beforeEach(() => {
            stubbedAxios = sinon.stub(axios, 'get');
        });

        afterEach(() => {
            stubbedAxios.restore();
        });

        it('should have a get method', () => {
            const news = new NewsWrapper({});
            expect(news.get).to.exist;
        });

        it('should call axios.get when NewsWrapper.get method executed', () => {
            const news = new NewsWrapper({
                token: 'foo'
            });

            news.get('someUrl');

            expect(stubbedAxios).to.have.been.calledOnce;
        });

        it('should call axios.get with the url passed (plus apiKey) when NewsWrapper.get', () => {
            const news = new NewsWrapper({
                token: 'foo'
            });

            news.get('someUrl');

            expect(stubbedAxios).to.have.been.calledWith(`someUrl&apiKey=${news.token}`);
        });
    });
});
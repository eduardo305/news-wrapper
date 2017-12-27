# news-wrapper

[![Build Status](https://travis-ci.org/eduardo305/news-wrapper.svg?branch=master)](https://travis-ci.org/eduardo305/news-wrapper)

[WIP] A Javascript wrapper to work with [News API]
(https://newsapi.org).

## Installation

```sh
$ npm install --save news-wrapper
```

## How to use

### ES6

```js
// to import a specific method
import NewsWrapper from 'news-wrapper';

const news = new NewsWrapper({
  token: 'YOUR_TOKEN_HERE'
});

// using  method
const promise = news.search.topheadlines('cnn');
promise.then(({ data }) => {
  const markup = data.articles.map(headline => {
    return `<div>${headline.title}</div>`;
  });

  document.getElementById('news').innerHTML = markup;
});
```

### CommonJS

```js
const NewsWrapper = require('news-wrapper').default;

const news = new NewsWrapper({
  token: 'YOUR_TOKEN_HERE'
});
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="news-wrapper.umd.js"></script>

<!-- to import minified version -->
<script src="news-wrapper.umd.min.js"></script>
```

After that the library will be available to the Global as `NewsWrapper`. Follow an example:

```js

const news = new NewsWrapper({
  token: 'YOUR_TOKEN_HERE'
});

const sources = news.search.sources('technology');
```

## Methods

> Follow the methods that the library provides.

### search.topheadlines(query)

> This method provides live top and breaking headlines for a single source, or multiple sources. Test in [npm runkit](https://npm.runkit.com/news-wrapper).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|

The argument `query` is optional. In case nothing is passed, the method will retrieve all headlines available for all sources. In case more than one sourche is needed, you can add a string separated by commas, like 'cnn,techcrunch,bbc' for example.

**Example**

```js
news.search.topheadlines('cnn');
  .then(({ data }) => {
    // do what you want with the data
  })
```

If you want to specify more than one source:

```js
news.search.topheadlines('cnn,techcrunch,bbc');
  .then(({ data }) => {
    // do what you want with the data
  })
```

### search.sources(query)

> This method will get all sources available. It's possible to filter by either `category` and/or `country`. Test in [npm runkit](https://npm.runkit.com/news-wrapper).

**Arguments**

| Argument   | Type    | Options                |
|------------|---------|------------------------|
|`category`  |*string* | 'Any of the below list'|
|`country`   |*string* | 'Any of the below list'|

- Available categories: `business` `entertainment` `gaming` `general` `health-and-medical` `music` `politics` `science-and-nature` `sport` `technology`
Default: all categories.

- Available countries: `ar` `au` `br` `ca` `cn` `de` `es` `fr` `gb` `hk` `ie` `in` `is` `it` `nl` `no` `pk` `ru` `sa` `sv` `us` `za`
Default: all countries.

**Example**

```js
news.search.sources('technology', 'us')
  .then(({ data } ) => {
    // do what you want with the data
  })
```

### search.everything(query)

> This method retrieves all news related to the query passed in. It includes all kind of sources. Test in [npm runkit](https://npm.runkit.com/news-wrapper).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
news.search.everything('bitcoin')
  .then(({ data }) => {
    // do what you want with the data
  })
```


## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details

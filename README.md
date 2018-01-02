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
const promise = news.search.topheadlines({ sources: 'cnn'});
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

const sources = news.search.sources({ category: 'technology'});
```

## Methods

> Follow the methods that the library provides.

### search.topheadlines(query)

> This method provides live top and breaking headlines for a single source, or multiple sources. Test in [npm runkit](https://npm.runkit.com/news-wrapper).

**Arguments**

| Argument  | Type    | Options             |
|-----------|---------|---------------------|
|`query`    |*string* | 'Any search query'  |
|`sources`  |*string* | 'Any source query'  |
|`category` |*string* | 'Any category query'|
|`language` |*string* | 'Any language'      |
|`country`  |*string* | 'Any country'      |

The argument `query` is optional. In case nothing is passed, the method will retrieve [Techcrunch](https://techcrunch.com/) available headlines. In case more than one source is needed, you can add a string separated by commas, like 'cnn,techcrunch,bbc' for example.

Default: Techcrunch.

For more details about `country` and `language` supported, please check [NewsAPI](https://newsapi.org/docs/endpoints/top-headlines)

**Example**

```js
news.search.topheadlines({ sources: 'cnn'});
  .then(({ data }) => {
    // do what you want with the data
  })
```

If you want to specify more than one source:

```js
news.search.topheadlines({ sources: 'cnn,techcrunch,bbc' });
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
|`language`  |*string* | 'Any of the below list'|

- Available categories: `business` `entertainment` `gaming` `general` `health-and-medical` `music` `politics` `science-and-nature` `sport` `technology`
Default: all categories.

- Available countries: `ar` `au` `br` `ca` `cn` `de` `es` `fr` `gb` `hk` `ie` `in` `is` `it` `nl` `no` `pk` `ru` `sa` `sv` `us` `za`
Default: all countries.

- Available languages: `ar` `en` `cn` `de` `es` `fr` `he` `it` `nl` `no` `pt` `ru` `sv` `ud`
Default: all languages.

**Example**

```js
news.search.sources({ category: 'technology', country: 'us' })
  .then(({ data } ) => {
    // do what you want with the data
  })
```

### search.everything(query)

> This method retrieves all news related to the query passed in. It includes all kind of sources. Test in [npm runkit](https://npm.runkit.com/news-wrapper).

**Arguments**

| Argument  | Type    | Options             |
|-----------|---------|---------------------|
|`query`    |*string* | 'Any search query'  |
|`sources`  |*string* | 'Any source query'  |
|`from`     |*string* | 'Starting date'     |
|`to`       |*string* | 'Ending date'       |
|`page`     |*int*    | 'Pagination number' |

The only required parameter is query, all other parameters are optional. Both `from` and `to` needs to be in ISO 8601 format 
(e.g. `2018-01-02` or `2018-01-02T12:16:22`)

- Default page: `1`

**Example**

```js
news.search.everything({ query: 'bitcoin' })
  .then(({ data }) => {
    // do what you want with the data
  })
```

```js
news.search.everything({ query: 'bitcoin', sources: 'cnn', from: '2017-12-23', to: '2017-12-28', page: 2 })
  .then(({ data }) => {
    // do what you want with the data
  })
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details

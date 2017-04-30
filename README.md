# golden-retriever
Fetches data from any API in intervals

[![Build Status](https://travis-ci.org/obi-jan-kenobi/golden-retriever.svg?branch=master)](https://travis-ci.org/obi-jan-kenobi/golden-retriever)

## Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Development](#development)
- [Changelog](#changelog)


## Installation

```
$ npm install --save golden-retriever
```

```
$ yarn add golden-retriever
```

## Usage

```JavaScript
const subscribe = require('golden-retriever');

const unsubscribe = subscribe('https://api.github.com/users/obi-jan-kenobi', {interval: 10000}, user => console.log(user.public_repos)) // logs the number of  public_repos every 10 seconds to the console

```

## API

### golden-retriever(url, options, callback) -> 

- ```url``` String (required) - The csv content to parse
- ```options``` Object (optional)
- ```callback``` Function (required) - Recieves http-response


## Development

```
$ npm test
```

## Changelog

- 1.0.0
  - Initial Release

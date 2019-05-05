# dackel
Fetches data from any API in intervals

[![Build Status](https://travis-ci.org/obi-jan-kenobi/dackel.svg?branch=master)](https://travis-ci.org/obi-jan-kenobi/dackel)
[![Known Vulnerabilities](https://snyk.io/test/github/obi-jan-kenobi/dackel/badge.svg)](https://snyk.io/test/github/obi-jan-kenobi/dackel)
[![codecov](https://codecov.io/gh/obi-jan-kenobi/dackel/branch/master/graph/badge.svg)](https://codecov.io/gh/obi-jan-kenobi/dackel)

## Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Development](#development)
- [Changelog](#changelog)


## Installation

```
$ npm install --save dackel
```

```
$ yarn add dackel
```

## Usage

```JavaScript
const subscribe = require('dackel')

// logs the user-data every 10000ms to the console
const unsubscribe = subscribe('https://api.github.com/users/obi-jan-kenobi',
  {
    interval: 10000,
    headers: {
      'User-Agent': 'dackel'
    }
  },
  (err, response, user) => console.log(user))

// stops polling
unsubscribe()
```

## API

### dackel(url, options, callback) -> function

- ```url``` String (required) - url to poll
- ```options``` Object (optional) - interval in ms + request-module options
- ```callback``` Function (required) - Recieves http-response


## Development

```
$ npm test
```

## Changelog

- 2.0.0
  - Updated deps
- 1.1.0
  - Fixed exposure
- 1.0.0
  - Initial release

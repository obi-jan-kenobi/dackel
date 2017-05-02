# dackel
Fetches data from any API in intervals

[![Build Status](https://travis-ci.org/obi-jan-kenobi/dackel.svg?branch=master)](https://travis-ci.org/obi-jan-kenobi/dackel)
[![Known Vulnerabilities](https://snyk.io/test/github/obi-jan-kenobi/dackel/badge.svg)](https://snyk.io/test/github/obi-jan-kenobi/dackel)

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

// logs the number of  public_repos every 10000ms to the console
const unsubscribe = subscribe('https://api.github.com/users/obi-jan-kenobi',
  {interval: 10000},
  (err, response, user) => console.log(user.public_repos))

// stops polling
unsubscribe()
```

## API

### dackel(url, options, callback) -> function

- ```url``` String (required) - The csv content to parse
- ```options``` Object (optional) - interval in ms + request-module options
- ```callback``` Function (required) - Recieves http-response


## Development

```
$ npm test
```

## Changelog

- 1.0.0
  - Initial Release

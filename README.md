<p align="center">
   <img src=".github/docs/images/logo.png" width="350"/>
</p>

> Headless CMS made with [Strapi](https://strapi.io/) for the [Floripa+](https://github.com/LauraBeatris/floripamais) website

[![Author](https://img.shields.io/badge/author-LauraBeatris-FB8F0A?style=flat-square)](https://github.com/LauraBeatris)
[![Languages](https://img.shields.io/github/languages/count/LauraBeatris/floripamais-strapi-api?color=%23FB8F0A&style=flat-square)](#)
[![Stars](https://img.shields.io/github/stars/LauraBeatris/floripamais-strapi-api?color=FB8F0A&style=flat-square)](https://github.com/LauraBeatris/floripamais-strapi-api/stargazers)
[![Forks](https://img.shields.io/github/forks/LauraBeatris/floripamais-strapi-api?color=%23FB8F0A&style=flat-square)](https://github.com/LauraBeatris/floripamais-strapi-api/network/members)
[![Contributors](https://img.shields.io/github/contributors/LauraBeatris/floripamais-strapi-api?color=FB8F0A&style=flat-square)](https://github.com/LauraBeatris/floripamais-strapi-api/graphs/contributors)

---

## Development

#### Install dependencies

```
yarn install 
```

or 

``` 
npm install 
```

#### Setup a Postgres database using Docker 

```
docker run --name [container_name] -e POSTGRES_PASSWORD=[your_password] -d postgres
```

#### Change the development environment database configuration on ``config/database.js`` according to your database credentials 


#### Start CMS locally 

```
yarn start
```

or 

```
npm run start 
```

---

## Build

To build the CMS, run the following script: 

```
yarn build 
```

---

## Contributing

Check out the [contributing](https://github.com/LauraBeatris/floripamais/blob/master/CONTRIBUTING.md) page to see the best places to file issues, start discussions and begin contributing.

---

## License

Released in 2020
This project is under the [MIT license](https://github.com/LauraBeatris/floripamais-strapi-api/master/LICENSE).

Made with love by [Laura Beatris](https://github.com/LauraBeatris) 💜🚀

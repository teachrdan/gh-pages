# guoliim-blog-starter

blog starter by gatsby

inspirated by [gatsby-starter-drunkenblog](https://github.com/konsumer/gatsby-starter-drunkenblog)

[blog site Address](https://teachrdan.github.io/)

## Installing

`$ gatsby new gatsby-blog https://github.com/guoliim/guoliim-blog`

## Usage

+ Running in development
`$ gatsby develop`

+ deploying to github.io
```bash
    $ npm i -g gh-pages
    $ gh-pages -r <you repo URL> -b <your branch> -d public
```
or

Edit `package.json`

```json
    script: {

        "deploy": "gatsby bulid && gh-pages -r <you repo URL> -b <your branch> -d public"

    }
```

## configuration

Go edit `config.toml`. Change it to all of your stuff.

## todo

- [ ] add github issues for comments
- [ ] category
- [ ] about page

## LICENSE
[MIT](./LICENSE)


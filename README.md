# eathereindy

## Build Setup
[Install Node](https://nodejs.org/en/download/)

[Install Docker](https://docs.docker.com/get-docker/)

```bash
# install dependencies
$ npm install

# Spin up WP server at http://localhost:9009
$ docker-compose up 

# Start FE dev build tools
$ nuxt

# generate static project (publish to production)
# with FE dev running (nuxt)
$ nuxt build
$ nuxt generate
$ git add .
$ git commit -m "..."
$ git push
```

To edit/dev/preview WP:

BE admin: http://localhost:9009/wp-admin

FE preview: http://localhost:3000

Production / Static URL (hosted on Netlify): https://pedantic-goldberg-489508.netlify.app/
# heydevan

## Build Setup
### Only on first install
[Install Docker](https://docs.docker.com/get-docker/)

Install NVM (node)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

nvm install 14
nvm use 14
nvm alias default 14

```

Install Nuxt


```bash
# enter account PW for your machine for sudo cmd
sudo npm i -g nuxt 
```

```bash
# install dependencies
npm install

# If you get errors re: node-sass, confirm you're on node 14, then rebuild:
nvm use 14
npm rebuild node-sass

```
## Develop / Publish
### Do this every time


```bash
# Spin up WP server at http://localhost:9009
docker-compose up 

# Start FE dev build tools
nuxt

# generate static project (publish to production)
# with FE dev running (nuxt)
nuxt build
nuxt generate
git add .
git commit -m "..."
git push
```

To edit/dev/preview WP:

BE admin: http://localhost:9009/wp-admin

FE preview: http://localhost:3000

Production / Static URL (hosted on Netlify): https://youthful-joliot-9a691a.netlify.app/


To get latest code changes: 

```bash
$ git pull
```

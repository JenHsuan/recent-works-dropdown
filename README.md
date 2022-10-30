# Recent works dropdown
* It's a micro-front npm package of React component

## Preparations
### [Install flyctl globally (macOS)](https://fly.io/docs/hands-on/install-flyctl/)
1. Download and Install flyctl

```
curl -L https://fly.io/install.sh | sh
```

2. Set the environment variable
```
nano ~/.bash_profile

export PATH={path}/.fly/bin:$PATH
```

3. Restart the terminal or refresh globall variables

```
source ~/.bash_profile
```

## Deployment to Fly.io
* Sign in
```
fly auth login
```

* Create configurations and deploy to Fly.io
```
fly launch
fly deploy
fly open
```

## Usages
* Serve locally
```
yarn dev
```
* Build
```
yarn build
```

## Trouble-shooting
* warning message
```
[webpack-cli] Error: error:0308010C:digital envelope routines::unsupported
```
* solution
  * temporary
  ```
   export NODE_OPTIONS=--openssl-legacy-provider
  ```
  
  * long-term: downgrade and Node.js or npm

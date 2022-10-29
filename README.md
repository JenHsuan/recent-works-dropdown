# Recent works dropdown
* It's a micro-front npm package of React component


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
## Usages
* Serve locally
```
yarn dev
```
* Build
```
yarn build
```

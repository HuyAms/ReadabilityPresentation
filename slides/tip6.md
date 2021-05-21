# 6. Make impossible states impossible

🐨 Easy to understand

🐨 Prevent lots of bugs

📚 [Stop using isLoading booleans](https://kentcdodds.com/blog/stop-using-isloading-booleans)

```jsx
isLoading: true
isError: false

isLoading: false
isError: true

// imposible states
isLoading: true
isError: true

isLoading: false
isError: false
``` 

```jsx
const LOADING_SATE = 'LOADING_SATE'
const ERROR_STATE = 'ERROR_STATE'

const state = LOADING_SATE
``` 

⚠️ Original code
```jsx

``` 

👉 Refactor
```jsx

``` 
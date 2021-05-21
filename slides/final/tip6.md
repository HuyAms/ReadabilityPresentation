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
const [isLoading, setIsLoading] = React.useState(false)
const [error, setError] = React.useState(null)
const [coffee, setCoffee] = React.useState(null)

function handleButtonClick() {
    setIsLoading(true)
    setError(null)
    setCoffee(null)

    getCoffee('cappuccino', 'small', 'finland', true).then(coffee => {
        setIsLoading(false)
        setError(null)
        setCoffee(coffee)
    }).catch(error => {
        setIsLoading(false)
        setError(error)
    })
}
``` 

👉 Refactor
```jsx
const sate = {
    idle: 'idle',
    loading: 'loading',
    error: 'error',
    success: 'success',
}

const [error, setError] = React.useState(null)
const [coffee, setCoffee] = React.useState(null)
const [status, setStatus] = React.useState(sate.idle) 

function handleButtonClick() {
    setStatus(sate.loading)

    getCoffee('cappuccino', 'small', 'finland', true).then(coffee => {
        setStatus(sate.success)
        setCoffee(coffee)
    }).catch(error => {
        setStatus(sate.error)
        setError(error)
    })
}
``` 
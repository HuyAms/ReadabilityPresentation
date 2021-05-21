# 10 tips to improve readability in Javascript
## 1. Log level and semantic methods

📚 [Console docs](https://nodejs.org/api/console.html#console_console_log_data_args)

```jsx
console.log("hello world")
console.warning("this is a warning")
console.error("this is an error")
console.info("this is info")
console.debug("this is debug")
console.trace("show trace")
``` 

## 2. Avoid negative names for boolean variables

😕 It is hard to read double negatives

isStarted 🤜 🤛 isNotStarted

⚠️ Original code
```jsx
const isInvalidApiKey = apiKey === null

if (isInvalidApiKey) {}
``` 

👉 Refactor
```jsx
const isValidApiKey = apiKey != null

if (!isValidApiKey) {}
``` 

## 3. Avoid flag params

😕 You don't know what the flag params are used for util you have to read the function declaration

⚠️ Original code
```jsx
renderResult(true)

function renderResult(isAuthenticated) {
    if (isAuthenticated) {
       return <p>App</p>
    } else {
        return <p>Please login</p>
    }

}
```

🐨 Use object params
```jsx
renderResult({isAuthenticated: true})

function renderResult({isAuthenticated}) {
    if (isAuthenticated) {
        return <p>App</p>
    } else {
        return <p>Please login</p>
    }

}
```

🐨 Use 2 functions
```jsx
function renderAuthenticatedApp() {
    return <p>App</p>
}

function renderUnAuthenticatedApp() {
    return <p>Please login</p>
}
```

## 4. Use guard clauses

😕 Nesting hell

🐨 Make our code fail fast
🐨 Natural flow

```jsx
if (statusCode === 200) {
    // success
} else {
    if (statusCode === 500) {
        // Internal Server Error
    } else if (statusCode === 400) {
        // Not Found
    } else {
        // Other error
    }
}
``` 

```jsx
if (statusCode === 500) {
    // Internal Server Error
}

if (statusCode === 400) {
    // Not Found
}

if (statusCode !== 200) {
    // Other error
}

// success
```

## 5. Make code self-explanatory

🐨 Easy to understand
🐨 Reusable
🐨 A long descriptive name is better than a long comment

```jsx
// verify that user has added a credit card
function verify(user) {}
``` 

```jsx
function verifyThatUserHasAddedCreditCard(user) {}
``` 

⚠️ Original code
```jsx
 if (country !== 'finland' &&
    country !== 'germany' &&
    country !== 'vietnam' &&
    country !== 'russia' &&
    type !== '💣'
) {
    return Promise.reject('Not available')
}
``` 

👉 Refactor
```jsx
const isInAvailableCountries = (
    country === 'finland' ||
    country === 'germany' ||
    country === 'vietnam' ||
    country === 'russia'
)

const hasBoom = type === '💣'

if (!isInAvailableCountries || hasBoom) {
    return Promise.reject('Not available')
}
``` 

🎁 Create a better condition
```jsx
const availableCountries = ['finland', 'germany', 'vietnam', 'russia']
const isInAvailableCountries = availableCountries.includes(country)

const hasBoom = type === '💣'

if (!isInAvailableCountries || hasBoom) {
    return Promise.reject('Not available')
}
``` 

## 6. Make impossible states impossible

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
const LOADING_STATE = 'LOADING_STATE'
const ERROR_STATE = 'ERROR_STATE'

const state = LOADING_STATE
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
const state = {
    idle: 'idle',
    loading: 'loading',
    error: 'error',
    success: 'success',
}

const [error, setError] = React.useState(null)
const [coffee, setCoffee] = React.useState(null)
const [status, setStatus] = React.useState(state.idle) 

function handleButtonClick() {
    setStatus(state.loading)

    getCoffee('cappuccino', 'small', 'finland', true).then(coffee => {
        setStatus(state.success)
        setCoffee(coffee)
    }).catch(error => {
        setStatus(state.error)
        setError(error)
    })
}
``` 

## 7. Use objects for long argument lists

🐨 Params order won't matter

🐨 Easy to pass optional param

```jsx
function getBox(type, size, price, color) {}

getBox('carry', undefined, 10, 'red')
``` 

```jsx
function getBox(options) {
    const {type, size, price, color} = options
}

getBox({
    type: 'carry',
    price: 10,
    color: 'red'
})
``` 

⚠️ Original code
```jsx
export function getCoffee(type, size, country, hasIce) {

getCoffee('cappuccino', 'small', 'finland', true)
}
``` 

👉 Refactor
```jsx
function getCoffee(options) {
    const {type, size, country, hasIce} = options
}

getCoffee({
    type: 'cappuccino',
    size: 'small',
    country: 'finland',
    hasIce: true
})
``` 

## 8. Use Object.assign for defaults

```jsx
function getBox(options) {
    
    options.type = options.type || 'carry'
    options.size = options.size || 'small'
    options.price = options.price || 10
    options.color = options.color || 'red'
    
    const {type, size, price, color} = options
}
``` 

```jsx
function getBox(customOptions) {
    
    const defaults = {
        type: 'carry',
        size: 'small',
        price: 10,
        color: 'red',
    }
    
    const options = Object.assign(defaults, customOptions)

    const {type, size, price, color} = options
}
``` 

⚠️ Original code
```jsx
export function getCoffee(type, size, country, hasIce) {

    type = type || 'cappuccino'
    size = size || 'small'
    country = country || 'finland'
    hasIce = hasIce || false
}
``` 

👉 Refactor
```jsx
function getCoffee(customOptions) {
    const defaultOptions = {
        type: 'cappuccino',
        size: 'small',
        country: 'finland',
        hasIce: false
    }

    const options = Object.assign(defaultOptions, customOptions)
}

function getCoffee(options = {}) {
    const {
        type = 'cappuccino',
        size = 'small',
        country = 'finland',
        hasIce = false
    } = options
}

function getCoffee({
    type = 'cappuccino', 
    size = 'small',
    country = 'finland',
    hasIce = false
} = {}) {
}
``` 

## 9. Replacing switch statements with Object literals

📚 [Replacing switch statements with Object literals](https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals#object-literal-fall-through)

```jsx
const handleSaveCalculation = ({key}) => {
    switch (key) {
        case 'save-copy': {
            saveCopy()
            break
        }
        case 'override': {
            override()
            break
        }
        default:
            throw Error('Unknown action')
    }
}

handleSaveCalculation({key: 'save-copy'})
``` 

```jsx
const handleSaveCalculation = ({key}) => {
    const actions = {
        'save-copy': saveCopy(),
        'override': override(),
        'default': throw Error('Unknown action')
    }
    
    (actions[key] || 'default')()
}

handleSaveCalculation({key: 'save-copy'})
``` 

⚠️ Original code
```jsx
let drink
switch(type) {
    case 'cappuccino':
        drink = 'Cappuccino';
        break;
    case 'flatWhite':
        drink = 'Flat White';
        break;
    case 'espresso':
        drink = 'Espresso';
        break;
    default:
        drink = 'Unknown drink';
}
``` 

👉 Refactor
```jsx
const menu = {
    'cappuccino': 'Cappuccino',
    'flatWhite': 'Flat White',
    'espresso': 'Espresso',
    'default': 'Unknown drink'
}

const drink = menu[type]
``` 

# 10. Avoid Hasty Abstractions

> 😕 I don't know how to create a good abstraction but I've created many bad ones

🐨 prefer duplication over the wrong abstraction

🐨 Nothing is free. The code trades the ability to change requirements for reduced duplication, and it is not a good trade - *Dan Abramov*

📚 [AHA Programming](https://kentcdodds.com/blog/aha-programming)

📚 [Goodbye, Clean Code](https://overreacted.io/goodbye-clean-code/)

⚠️ [My React Boilerplate](https://github.com/vinhlee95/awesome-react-typescript-boilerplate)

Fetch an order
```jsx
// Action Type
const FETCH_ORDERS_START = "FETCH_ORDERS_START";
const FETCH_ORDERS_SUCCESS = "FETCH_ORDERS_SUCCESS";
const FETCH_ORDERS_FAILED = "FETCH_ORDERS_FAILED";
```

```jsx
// Action
export const fetchOrder = (token) => {
    return dispatch => {
        dispatch(fetchOrdersStart);
        axios.get('/orders.json?auth=' + token).then(res => {
            dispatch(fetchOrdersSuccess(res));
        }).catch(err => {
            dispatch(fetchOrdersFailed(err));
        });
    };

}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: FETCH_ORDERS_SUCCESS,
        orders: orders,
    };
};

export const fetchOrdersFailed = (error) => {
    return {
        type: FETCH_ORDERS_FAILED,
        error: error,
    };
};

export const fetchOrdersStart = () => {
    return {
        type: FETCH_ORDERS_START,
    };
};
```

👉️ [Abstraction](https://github.com/vinhlee95/awesome-react-typescript-boilerplate/blob/develop/src/modules/commons/moduleActions.ts)

I dare you understand the abstraction code without clicking the link. And even go to that link, you have to read all the code to understand that abstraction.

If you want to take a deep look into this, checkout [AHA Programming](https://kentcdodds.com/blog/aha-programming) and [Goodbye, Clean Code](https://overreacted.io/goodbye-clean-code/)
```jsx
// Action
const moduleName = 'order'
const path = '/order'

const {moduleActionTypes, moduleActions} = useModuleActions(moduleName, path)

function fetchOrder() {
    moduleActionTypes.getModel()    
}

function updateOrder(data) {
    moduleActionTypes.updateModel(data)
}
```


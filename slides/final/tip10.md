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


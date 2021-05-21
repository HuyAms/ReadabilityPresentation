# 7. Use objects for long argument lists

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
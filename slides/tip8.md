# 8. Use Object.assign for defaults

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

``` 

👉 Refactor
```jsx

``` 
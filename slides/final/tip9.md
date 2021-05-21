# 9. Replacing switch statements with Object literals

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
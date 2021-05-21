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

handleSaveCalculation({'save-copy'})
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

``` 

👉 Refactor
```jsx
``` 
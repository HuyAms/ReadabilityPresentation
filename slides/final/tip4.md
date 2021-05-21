# 4. Use guard clauses

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

⚠️ Original code
```jsx
function renderResult() {
    if (isLoading) {
        return <p>Loading ...</p>
    } else {
        if (error) {
            return <p>{error}</p>
        } else {
            if (coffee) {
                return <p>Coffee</p>
            } else {
                return <p>No coffee</p>
            }
        }
    }
}
``` 

👉 Refactor
```jsx
function renderResult() {

    if (isLoading) {
        return <p>Loading ...</p>
    }
    
    if (error) {
        return <p>{error}</p>
    }
    
    if (!coffee) {
        return <p>No coffee</p>
    }
    
    return <p>Coffee</p>
}
``` 
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
```

⚠️ Original code
```jsx
``` 

👉 Refactor
```jsx
``` 
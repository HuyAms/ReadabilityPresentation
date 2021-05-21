# 3. Avoid flag params

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




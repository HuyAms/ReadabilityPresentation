# 1. Log level and semantic methods

📚 [Console docs](https://nodejs.org/api/console.html#console_console_log_data_args)

```jsx
console.log("hello world")
console.warning("this is a warning")
console.error("this is an error")
console.info("this is info")
console.debug("this is debug")
console.trace("show trace")
``` 

⚠️ Original code
```jsx
console.log("Error: API key should not be empty")
``` 

👉 Refactor
```jsx
console.error("Error: API key should not be empty")
``` 
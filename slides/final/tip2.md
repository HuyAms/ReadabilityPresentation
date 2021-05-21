# 2. Avoid negative names for boolean variables

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
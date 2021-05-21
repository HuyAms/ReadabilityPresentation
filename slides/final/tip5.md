# 5. Make code self-explanatory

🐨 Easy to understand
🐨 Reusable
🐨 A long descriptive name is better than a long comment

```jsx
// verify that user has added a credit card
function verify(user) {}
``` 

```jsx
function verifyThatUserHasAddedCreditCard(user) {}
``` 

⚠️ Original code
```jsx
 if (country !== 'finland' &&
    country !== 'germany' &&
    country !== 'vietnam' &&
    country !== 'russia' &&
    type !== '💣'
) {
    return Promise.reject('Not available')
}
``` 

👉 Refactor
```jsx
const isInAvailableCountries = (
    country === 'finland' ||
    country === 'germany' ||
    country === 'vietnam' ||
    country === 'russia'
)

const hasBoom = type === '💣'

if (!isInAvailableCountries || hasBoom) {
    return Promise.reject('Not available')
}
``` 

🎁 Create a better condition
```jsx
const availableCountries = ['finland', 'germany', 'vietnam', 'russia']
const isInAvailableCountries = availableCountries.includes(country)

const hasBoom = type === '💣'

if (!isInAvailableCountries || hasBoom) {
    return Promise.reject('Not available')
}
``` 

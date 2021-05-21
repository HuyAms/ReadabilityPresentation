const apiKey = 'key'

const isValidApiKey = apiKey != null

const menu = {
    'cappuccino': 'Cappuccino',
    'flatWhite': 'Flat White',
    'espresso': 'Espresso',
    'default': 'Unknown drink'
}

const availableCountries = ['finland', 'germany', 'vietnam', 'russia']

export function getCoffee(options = {}) {

    const {
        type = 'cappuccino',
        size = 'small',
        country = 'finland',
        hasIce = false
    } = options

    if (!isValidApiKey) {
        console.error("Error: API key should not be empty")
        return Promise.reject(null)
    }

    const isInAvailableCountries = availableCountries.includes(country)

    const hasBoom = type === '💣'

    if (!isInAvailableCountries || hasBoom) {
        return Promise.reject('Not available')
    }

    const drink = menu[type]


    const result = {drink, size, country, hasIce}

    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve(result);
        }, 1000)
    });
}
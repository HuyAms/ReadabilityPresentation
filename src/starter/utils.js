const apiKey = 'key'
const isInvalidApiKey = apiKey === null

export function getCoffee(type, size, country, hasIce) {

    type = type || 'cappuccino'
    size = size || 'small'
    country = country || 'finland'
    hasIce = hasIce || false

    if (isInvalidApiKey) {
        console.log("Error: API key should not be empty")
        return Promise.reject(null)
    }

    if (country !== 'finland' &&
        country !== 'german' &&
        country !== 'vietnam' &&
        country !== 'russia' &&
        type !== '💣'
    ) {
        return Promise.reject('Not available')
    }

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

    console.log("TYPE: ", type)

    const result = isInvalidApiKey ? null : {drink, size, country, hasIce}

    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve(result);
        }, 1000)
    });
}
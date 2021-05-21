import React from 'react'
import '../App.css';
import {getCoffee} from './utils'

function App() {

    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const [coffee, setCoffee] = React.useState(null)

    function handleButtonClick() {
        setIsLoading(true)
        setError(null)
        setCoffee(null)

        // 💣
        getCoffee('cappuccino', 'small', 'finland', true).then(coffee => {
            setIsLoading(false)
            setError(null)
            setCoffee(coffee)
        }).catch(error => {
            setIsLoading(false)
            setError(error)
        })
    }

    function renderResult(isAuthenticated) {
        if (isAuthenticated) {
            if (isLoading) {
                return <p>Loading ...</p>
            } else {
                if (error) {
                    return <p>{error}</p>
                } else {

                    if (coffee) {
                        const {drink, size, country, hasIce} = coffee
                        return <p>{drink} - {size} - {country} - {hasIce ? 'Ice' : 'No Ice'}</p>
                    } else {
                        return <p>No coffee</p>
                    }
                }
            }
        } else {
            return <p>Please login</p>
        }

    }

    return (
        <div>
            <button onClick={handleButtonClick}>Get Coffee</button>
            {renderResult(true)}
            <p>Available countries: finland, german, vietnam, russia</p>
        </div>
    )
}

export default App;
import React from 'react'
import '../App.css';
import {getCoffee} from './utils'

const isAuthenticated = true

function App() {

    const state = {
        idle: 'idle',
        loading: 'loading',
        error: 'error',
        success: 'success',
    }

    const [error, setError] = React.useState(null)
    const [coffee, setCoffee] = React.useState(null)
    const [status, setStatus] = React.useState(state.idle)

    function handleButtonClick() {
        setStatus(state.loading)

        getCoffee('cappuccino', 'small', 'finland', true).then(coffee => {
            setStatus(state.success)
            setCoffee(coffee)
        }).catch(error => {
            setStatus(state.error)
            setError(error)
        })
    }

    function renderAuthenticatedApp() {

        if (status === state.idle) {
            return <p>No coffee</p>
        }

        if (status === state.loading) {
            return <p>Loading ...</p>
        }

        if (status === state.error) {
            return <p>{error}</p>
        }

        if (!coffee) {
            return <p>No coffee</p>
        }

        const {drink, size, country, hasIce} = coffee
        return <p>{drink} - {size} - {country} - {hasIce ? 'Ice' : 'No Ice'}</p>
    }

    function renderUnAuthenticatedApp() {
        return <p>Please login</p>
    }

    return (
        <div>
            <button onClick={handleButtonClick}>Get Coffee</button>
            {isAuthenticated ? renderAuthenticatedApp() : renderUnAuthenticatedApp()}
            <p>Available countries: finland, germany, vietnam, russia</p>
        </div>
    )
}

export default App;
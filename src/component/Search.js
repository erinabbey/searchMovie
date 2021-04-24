import React from 'react'

const Search = ({search, handleInput}) => {
    return (
        <section className = 'searchbox-wrap'>
            <input
            className ="searchbox"
            type = 'text'
            placeholder = 'type movie name'
            onChange = {handleInput}
            onKeyPress = {search}
            />
        </section>
    )
}

export default Search

import React from 'react'

const Result = ({ result, openpopup}) => {
    return (
        <div className = 'result'
        onClick = {() =>{
            openpopup(result.imdbID)
        }}>
            <img src = {result.Poster}/>
            
            <h3>{result.Title}</h3>
        </div>
    )
}

export default Result

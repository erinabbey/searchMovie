import React from 'react'
import {Result} from './index'

const Results = ({results, openPopup}) => {
    return (
       <section className ='results'>
            {
                results &&
                results.map(result =>(
                    <Result  key = {result.imdbID}
                    result = {result}
                    openpopup = {openPopup}
                    />
                ))
                
            }
       </section>
    )
}

export default Results

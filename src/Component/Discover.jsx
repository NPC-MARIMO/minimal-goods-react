import React from 'react'
import Nav from './Nav'
import '../CSS/Discover.css'

const Discover = () => {

    let discoverArray = ['Discover', 'the best in', 'minimal', 'design'];

    return (
        <>
                <Nav />
            <div className='discover' >
                {
                    discoverArray.map((el) => (
                        <h1>{el}</h1>
                    ))
                }
            </div>


        </>
    )
}

export default Discover

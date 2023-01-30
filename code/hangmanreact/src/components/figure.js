import React from 'react'
import  '../App.css'
import Fig1 from '../hangmandrawings/state1.GIF'
import Fig2 from '../hangmandrawings/state2.GIF'
import Fig3 from '../hangmandrawings/state3.GIF'
import Fig4 from '../hangmandrawings/state4.GIF'
import Fig5 from '../hangmandrawings/state5.GIF'
import Fig6 from '../hangmandrawings/state6.GIF'
import Fig7 from '../hangmandrawings/state7.GIF'
import Fig8 from '../hangmandrawings/state8.GIF'
import Fig9 from '../hangmandrawings/state9.GIF'
import Fig10 from '../hangmandrawings/state10.GIF'
import Fig11 from '../hangmandrawings/state11.GIF'

function Figure({wrongLetters}){
    const errors = wrongLetters.length

    return(
    <svg style={{color:'black'}}>
        {/* <!-- Rod --> */}
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" y1="20" x2="140" y2="50" />
        <line x1="60" y1="20" x2="60" y2="230" />
        <line x1="20" y1="230" x2="100" y2="230" />

        {/* <!-- Head --> */}
        {errors > 0 &&<circle cx="140" cy="70" r="20" />}
        {/* <!-- Body --> */}
        {errors > 1 && <line x1="140" y1="90" x2="140" y2="150" />}
        {/* <!-- Arms --> */}
        {errors > 2 && <line x1="140" y1="120" x2="120" y2="100" />}
        {errors > 3 &&<line x1="140" y1="120" x2="160" y2="100" />}
        {errors > 4 && <line x1="140" y1="150" x2="120" y2="180" />}
        {errors > 5 && <line x1="140" y1="150" x2="160" y2="180" />}
    </svg>
    )

}

export default Figure;
'use client' //forcing app to make this a client component to all it to save it own state

//React Imports
import { useState } from 'react';

// Component Imports
import LifeButtonGroup from '../buttons/buttongroup.js'
import PlayerName from '../player/name.js'

// CSS styling Imports
import styles from './player.module.css'


export default function PlayerLife(player) {

    const [lifeTotal, setLifeTotal] = useState(player.lifeTotal)

    function lifeUpClick() {
        setLifeTotal(lifeTotal + 1)
    }

    function lifeDownClick() {
        setLifeTotal(lifeTotal - 1)
    }

    // Use styling from 'styles' import, then string concating with some react-bootstrap classes.
    // Probably a dumb way to do this and should probably look up a fix
    let nameStyle = `${styles.player_name} card border-info text-warning` // example: adding in card, border-info, and text-warning bootstrap classes
    let plifeStyle = `${styles.plife}`
    let plifeStyleInverted = `${styles.plife_inverted}`
    let plifeTotalStyle = `${styles.plife_total}`

    if (player.inverted == true) {
        return (
            <div className={plifeStyleInverted}>
                <PlayerName name_style={nameStyle} player_name={player.name}></PlayerName>
                <div className={plifeTotalStyle}>
                    <p className='text-success'>{lifeTotal}</p>
                </div>
                <LifeButtonGroup upOnClick={lifeUpClick} downOnClick={lifeDownClick}></LifeButtonGroup>
            </div >
        )
    } else {
        return (
            <div className={plifeStyle}>
                <PlayerName name_style={nameStyle} player_name={player.name}></PlayerName>
                <div className={plifeTotalStyle}>
                    <p className='text-success'>{lifeTotal}</p>
                </div>
                <LifeButtonGroup upOnClick={lifeUpClick} downOnClick={lifeDownClick}></LifeButtonGroup>
            </div>
        )
    }
}
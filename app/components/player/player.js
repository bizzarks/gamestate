import styles from './player.module.css'

import LifeButtonGroup from '../buttons/buttongroup.js'
import PlayerName from '../player/name.js'

export default function PlayerLife(player) {

    let nameClass = `${styles.player_name} card border-info text-warning`

    if (player.inverted == 'true') {
        return (
            <div className={styles.plife_inverted}>
                <PlayerName name_style={nameClass} player_name={player.name}></PlayerName>
                <div className={styles.p_life_total}>
                    <p className='text-success'>{player.lifeTotal}</p>
                </div>
                <LifeButtonGroup></LifeButtonGroup>
            </div>
        )
    } else {
        return (
            <div className={styles.plife}>
                <PlayerName name_style={nameClass} player_name={player.name}></PlayerName>
                <div className={styles.p_life_total}>
                    <p className='text-success'>{player.lifeTotal}</p>
                </div>
                <LifeButtonGroup></LifeButtonGroup>
            </div>
        )
    }
}
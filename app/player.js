import styles from './page.module.css'


export default function PlayerLife(player) {
    return (
        <div className={styles.plife}>
            <div className={styles.player_name}>{player.name}</div>
            <div className={styles.p_life_total}>{player.lifeTotal}</div>
            <div className={styles.player_name_blank}></div>
        </div>
    )
}
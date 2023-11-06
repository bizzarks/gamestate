import styles from './page.module.css'


export default function PlayerLife(player) {
    if (player.inverted == 'true') {
        return (
            <div className={styles.plife}>
                <div className={styles.player_name_blank}></div>
                <div className={styles.p_life_total_inverted}>{player.lifeTotal}</div>
                <div className={styles.player_name_inverted}>{player.name}</div>
            </div>
        )
    } else {
        return (
            <div className={styles.plife}>
                <div className={styles.player_name}>{player.name}</div>
                <div className={styles.p_life_total}>{player.lifeTotal}</div>
                <div className={styles.player_name_blank}></div>
            </div>
        )
    }
}
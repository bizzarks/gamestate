import styles from './player.module.css'


export default function PlayerLife(player) {
    if (player.inverted == 'true') {
        return (
                <div className={styles.plife_inverted}>
                    <div className={styles.player_name}>{player.name}</div>
                    <div className={styles.p_life_total}>{player.lifeTotal}</div>
                    <div className={styles.player_name_blank}></div>
                    <div className={styles.life_button_container}>
                        <button className={styles.life_up_button}></button>
                        <button className={styles.life_down_button}></button>
                    </div>
                </div>
        )
    } else {
        return (
            <div className={styles.plife}>
                <div className={styles.player_name}>{player.name}</div>
                <div className={styles.p_life_total}>{player.lifeTotal}</div>
                <div className={styles.player_name_blank}></div>
                <div className={styles.life_button_container}>
                    <button className={styles.life_down_button}></button>
                    <button className={styles.life_up_button}></button>
                </div>
            </div>
        )
    }
}
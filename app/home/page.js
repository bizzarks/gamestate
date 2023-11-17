import styles from './page.module.css'

import PlayerLife from '../components/player/player.js'
import generateDefaultPlayerStates from '../../public/gamestate.js'

export default function Home() {

  let gamestate = generateDefaultPlayerStates()

  return (
    <main className={styles.main}>
      <div className={styles.grid2x2}>
        {
          gamestate.playerStates.map((g) => (
            < PlayerLife key={g.id} name={g.name} lifeTotal={g.life} inverted={g.id <= 2 ? true : false} props={g} />
          ))
        }
      </div>
    </main>
  )
}
import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/index.module.css'

const HomePage: NextPage = () => {
    return <div className={styles.homeWrap}>
        <div>
           <Link href="/counter">倒计时</Link>
        </div>
        <div>
          <Link href="/response">response页面</Link>
        </div>
        
    </div>
}

export default HomePage;
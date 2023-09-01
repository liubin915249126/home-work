import type { NextPage } from 'next'
import { Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons';
import styles from '../styles/res.module.css'
import { useState } from 'react';


const ResponsePage: NextPage = () => {
    const [visible, setVisible] = useState(false)
    return <div className={styles.wrap}>
        <header>
            <MenuOutlined
                onClick={() => setVisible(true)}
            />
        </header>
        <section className={styles.content}>
            <section className={styles.left}></section>
            <section className={styles.right}>
                <div></div>
                <div></div>
                <div></div>
            </section>
        </section>
        <footer>
        
        </footer>
        <Drawer
            open={visible}
            onClose={() => setVisible(false)}
            width='200'
            placement="left"
            rootClassName={styles.resDrawer}
        >
           <section className={styles.drawerContent}></section>
        </Drawer>
   </div>
}

export default ResponsePage;
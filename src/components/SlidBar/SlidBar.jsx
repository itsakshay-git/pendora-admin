import React from 'react';
import styles from './SlidBar.module.css'

const SlidBar = () => {
  return (
    <aside className={styles.aside}>
        <ul className={styles.list}>
            <li>User</li>
            <li>Roles</li>
            <li>Globle User Add-on Setting</li>
            <li>Manage Team</li>
            <li>Contacts</li>
        </ul>
    </aside>
  )
}

export default SlidBar
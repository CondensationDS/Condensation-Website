import Link from 'next/link'

export default function Sidebar() {

    return (
      <nav className={styles.nav}>
        <input className={styles.input} placeholder="Search..." />
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
    )
}
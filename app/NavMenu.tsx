import Image from 'next/image';
import Link from 'next/link';
import styles from './NavMenu.module.css'

export default function NavMenu(){
    

return(

    <header >
        <nav 
        className={styles.nav} >

        <Link href={'/'}>
        <Image
          src="/logo.svg" // Route of the image file
          width={161}
          height={110}
          alt="High Desert Milk Logo"

        />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href='/' className={'text-red-300 bg-white cursor-pointer p-1 hover:bg-slate-500'}>
              Home</Link>
        </li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>

        </nav>
    </header>

)
}

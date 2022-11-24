import styles from '../styles/Home.module.css'
import uStyles from '../styles/Users.module.css'
import logo from '../images/Paradigmo_Logo.png'
import Image from 'next/image'
import Link from 'next/link'

let register = false
let login = false

export default function auth() {
  return (
    <div className={uStyles.container__user}>
      <main className={uStyles.container__form}>
        <form name="contact_form" action="contact/?success=true">
          <label id="userName" htmlFor="userName">
            Username
          </label>
          <input type="text" name="userName" required />
          <label htmlFor="name" placeholder="Enter Name here">
            Name
          </label>
          <input type="name" name="name" required />
          <label htmlFor="password" placeholder="Enter password here">
            Password
          </label>
          <input type="password" name="password" required />{' '}
          <label htmlFor="password" id="confirm_password">
            Confirm Password
          </label>
          <input type="password" name="confirm_password" required />
          <Link href="/" className={uStyles.buttons}>
            <button id={uStyles.register}>Register</button>
            <button id={uStyles.home}>Home</button>
          </Link>
        </form>
      </main>
    </div>
  )
}

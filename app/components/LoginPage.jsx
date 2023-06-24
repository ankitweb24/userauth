import style from '@/app/styles/loginpage.module.css'
import Text_index from './Text_index'
import Button_Index from './Button_Index'

import { useSession } from 'next-auth/react'

const LoginPage = () => {
  return (
      <div className={style.content}>
        <img src="images/logo.png" alt="logo" className={style._logo} />
        <Text_index/>
        <Button_Index />
      </div>
  )
}

export default LoginPage
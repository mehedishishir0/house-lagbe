import React from 'react'
import LoginForm from './_components/loginForm'
import PageTransition from '@/components/PageTransition'

const page = () => {
  return (
    <PageTransition>
    <div>
      <LoginForm/>
    </div>
    </PageTransition>
  )
}

export default page
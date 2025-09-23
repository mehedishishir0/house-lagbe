import React from 'react'
import PageTransition from '@/components/PageTransition'
import ResetEmail from './_components/resetEmail'

const page = () => {
  return (
    <PageTransition>
      <div>
        < ResetEmail />
      </div>
    </PageTransition>
  )
}

export default page
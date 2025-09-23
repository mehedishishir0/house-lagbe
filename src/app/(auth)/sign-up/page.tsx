import React from 'react'
import SignUpform from './_components/signUpform'
import PageTransition from '@/components/PageTransition'

const page = () => {
  return (
    <PageTransition>
      <div>
        <SignUpform />
      </div>
    </PageTransition>
  )
}

export default page
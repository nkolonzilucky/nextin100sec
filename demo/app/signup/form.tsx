'use client'

import React from 'react'
import { signup } from '@/app/signup/actions'
import { useActionState } from 'react'
const SignUpForm = () => {
    const [state, action, pending] = useActionState(signup)
  return (
    <form action={action}>
        <input name='name' />
        {state?.errors?.name && <p>{state.errors.name}</p>}
        <input name='email' />
        {state?.errors?.email && <p>{state.errors.email}</p>}
        <input name='password' />
        {state?.errors?.password && <p>{state.errors.password}</p>}
      
        <button disabled={pending}>
            {pending ? 'Submitting...' : 'Sign up'}
            Sign up
        </button>
    </form>
  )
}

export default SignUpForm

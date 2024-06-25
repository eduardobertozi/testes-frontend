'use client'

import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

function Login() {
  const router = useRouter()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    router.push('/dashboard')
  }

  return (
    <div className='grid place-items-center space-y-12 p-6'>
      <h1 className='text-3xl font-bold'>Sign In</h1>

      <form onSubmit={handleSubmit} className='flex flex-col w-full gap-2'>
        <input
          className='border rounded p-3'
          type='text'
          placeholder='Insira seu e-mail'
        />
        <input
          className='border rounded p-3'
          type='text'
          placeholder='Insira sua senha'
        />
        <button
          className='w-full mt-2 p-3 text-white rounded bg-purple-500'
          // onClick={handleSubmit}
        >
          Entrar
        </button>
      </form>
    </div>
  )
}

export default Login

'use client'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Form } from '@/components/ui/form'
import { H1 } from '@/components/ui/heading'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

function Login() {
  const router = useRouter()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    router.push('/dashboard')
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <H1>Sign In</H1>

        <Input type='text' placeholder='Insira seu e-mail' />
        <Input type='text' placeholder='Insira sua senha' />
        <Button onClick={handleSubmit}>Entrar</Button>
        <Link href='/signup'>Não tem cadastro? Clique aqui</Link>
      </Form>
    </Container>
  )
}

export default Login

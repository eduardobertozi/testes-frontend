'use client'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Form } from '@/components/ui/form'
import { H1 } from '@/components/ui/heading'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

function SignUpPage() {
  const { push } = useRouter()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    push('/dashboard')
  }

  return (
    <Container>
      <H1>Cadastre-se</H1>

      <Form onSubmit={handleSubmit}>
        <Input type='text' placeholder='Insira seu nome' />
        <Input type='text' placeholder='Insira seu e-mail' />
        <Input type='text' placeholder='Insira sua senha' />
        <Button type='submit'>Sign Up</Button>
        <Link href='/login'>Já tem cadastro? Clique aqui</Link>
      </Form>
    </Container>
  )
}

export default SignUpPage

'use client'

import { useCallback, useEffect, useState } from 'react'
import { H1 } from '../ui/heading'
import Image from 'next/image'
import Link from 'next/link'
import { PokemonType } from '@/types/pokemon'

interface PokemonDetailsProps {
  id: number
  fetchPokemonDetails(id: number): Promise<PokemonType>
}

export function PokemonDetails({
  id,
  fetchPokemonDetails,
}: PokemonDetailsProps) {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonType | null>(null)

  const loadData = useCallback(
    async () => await fetchPokemonDetails(id),
    [id, fetchPokemonDetails]
  )

  useEffect(() => {
    loadData().then(setPokemonDetails)
  }, [loadData])

  return (
    <div className='grid h-screen place-items-center p-6'>
      {pokemonDetails && (
        <div className='flex w-full max-w-lg flex-col items-center justify-between gap-4 border p-4'>
          <H1>{pokemonDetails.name}</H1>

          <Image
            src={pokemonDetails.image}
            alt={pokemonDetails.name}
            width={400}
            height={400}
          />

          <div className='h-px w-full bg-zinc-700' />

          <div className='flex w-full flex-col space-y-2 text-start'>
            <strong>Details</strong>
            <span className='text-sm'>{pokemonDetails.type}</span>
          </div>

          <div className='h-px w-full bg-zinc-700' />

          <Link href='/dashboard' className='w-full text-start'>
            Voltar
          </Link>
        </div>
      )}
    </div>
  )
}

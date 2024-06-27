import Link from 'next/link'

function Dashboard() {
  return (
    <div className='grid place-items-center space-y-12 p-6'>
      <h1 className='text-3xl font-bold'>Dashboard</h1>

      <div className='flex gap-2 text-blue-800 underline'>
        <Link href='/login'>Login</Link>
        <Link href='/signup'>Sign Up</Link>
      </div>
    </div>
  )
}

export default Dashboard

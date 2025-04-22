import React from 'react'

const Background = () => {
  return (
    <>
    <div className='w-full h-screen fixed z-[2]'>
    <div className='w-full py-5 absolute top-[5%] text-zinc-700 flex justify-center font-semibold text-xl'>Documents.</div>
    <h1 className='text-[10vw] leading-none tracking-tight text-zinc-900 absolute justify-center top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold'>Docs.</h1>
    </div>
    </>
  )
}

export default Background
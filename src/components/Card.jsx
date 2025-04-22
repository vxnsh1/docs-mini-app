import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react"



const Card = ({data, reference}) => {
  return (
    <>
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} className='w-72 h-84 rounded-2xl bg-zinc-700/30 backdrop-blur-xs text-white px-5 py-7 overflow-hidden flex-shrink-0'>
        <FaFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex justify-between items-center py-5 px-5 mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center'>
                    {data.close ? <IoMdClose /> : <BiDownload size='1.25rem' color='#fff'/>}
                </span>
            </div>
            {
                data.tag.isOpen && (
                <div className={`tag w-full py-5 ${data.tag.color === 'blue' ? "bg-blue-500" : "bg-green-500"} flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>
                )
            }
            
        </div>
    </motion.div>
    </>
  )
}

export default Card
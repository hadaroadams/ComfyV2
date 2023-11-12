import React from 'react'
import { useNavigation } from 'react-router-dom'

const SubmitBtn = ({text1,text2}) => {
    const {state} = useNavigation()
    // console.log(text1,text2)
  return (
        <>
            <button type='submit' disabled={state==="submitting"} className='btn disabled:bg-[#73abec] dark:disabled:bg-[#f5aad5] disabled:text-white bg-[#0069E0] dark:bg-[#F67FC5] border-none text-[white]'>
                {state=='submitting'? <><span className="loading loading-spinner"></span><span>{text2}</span></> :<span>{text1}</span>}   
            </button>
        </>
  )
}

export default SubmitBtn

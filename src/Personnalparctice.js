import React, { useState } from 'react'

const Personnalparctice = () => {
    const[Click,setClick]=useState(0);
    document.body.style.background='yellow'
  return (
    <div>
      <p>youve cliclked on {Click } times</p>
      <button onClick={()=>setClick(Click +1)}>
        click me
      </button>
      {/* Personnalparctice
            <p>you've clicked {Click} times</p>
            <button onClick={()=>setClick(Click+1)}>
                click me
            </button> */}
    </div>
  )
}

export default Personnalparctice
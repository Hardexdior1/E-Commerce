import React from 'react'

const Ass = (props) => {
let Answer=props.theData
let Answer2=props.theData2
// let optional=props.optional

  return (

    <div>
      {/* <marquee behavior="normal" direction="left">REACT ... shey you dey wyn me niii</marquee> */}
   {/* {Answer.map
   ((Answer)=>{
    return <div>

<h1>{Answer.name}</h1> 
<p>{Answer.age}</p>
<p>{Answer.staus}</p>
{Answer.isMarried ?<p>{Answer.name} is married</p>:<p>{Answer.name} is not married</p> }
    </div>
   })} */}

        {/*{Answer2.filter((expect)=>{

          return <div>
            <p>{expect.names.includes('i')}</p>
          </div>

        })} */}



       
    </div>
  )
}

export default Ass
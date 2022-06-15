import React from 'react'

function Main({item,setvalueH,valueH,index,setComplement,complement,dispatchcomple,compleHendler}) {
  const deleteHendler = () => {
    setvalueH(valueH.filter(el => {
      return item.id !== el.id
    }))
    console.log(compleHendler);
  }
  // const complementHendler = () => {
  //   dispatchcomple
  // }
  return (
    <div className='todo' id={index} onClick={() => dispatchcomple({type : 'complemently', id:item.id})}>
      <h2>{item.name}</h2>
      <button onClick={deleteHendler}>x</button>
    </div>
  )
}

export default Main
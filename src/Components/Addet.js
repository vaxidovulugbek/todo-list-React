import React, { useReducer, useState } from 'react'
import Main from './Main'

let count = 1
function Addet() {
  const [value,setvalue] = useState('')
  const [valueH,setvalueH] = useState([])
  const[complement, setComplement] = useState(true)
  const valueHendler = (e) => {
    e.preventDefault()
    setvalue(e.target.value)
  }

  const submitHendler = (e) => {
    e.preventDefault()
    setvalueH([...valueH,{
      name:value,
      id:count
    }])
    count++
    dispatchcomple({typ:"add"})
    // setvalue(value= '')
    e.target.reset()
  }

  let reduser = (sum,action) => {
    if (action.qiymat === 'decrement') {
      return  sum - 1
    }
    if (action.qiymat === 'encrement') {
     return sum + 1
    }
  }


  let compleHendler = (comple,action) => {
    // if (action.type === 'complemently') {
    //   setvalueH(valueH.filter(el => {
    //     return action.type === 'complemently'
    //   }))
    // }
    // if (action.type === 'complemently') {
    //     console.log(comple);
    // }
    // console.log(action);
  }

  let [sum , dispatch] = useReducer(reduser,0)
  let [comple , dispatchcomple] = useReducer(compleHendler,[{dd:"saloma"}])

  let showe = () => {
    // dispatchcomple({salo:"salo"})
    console.log(comple);
    // console.log(sum);
  }
  return (
    <div>
      <form onSubmit={submitHendler}>
        <input type="text" placeholder='add' onChange={valueHendler}  />
        <button >add</button>
      </form>
      <div>
        <button onClick={showe}>Comlement</button>
        <button onClick={() => dispatch({qiymat : 'encrement'})}>UnComlement</button>
      </div>
      {
        valueH.map((item,i) => {
          return <div className='todohend' key={i} id={i}>
             <Main dispatchcomple={dispatchcomple} compleHendler={compleHendler} item={item} index={i} valueH={valueH} setvalueH={setvalueH} complement={complement} setComplement={setComplement} />
          </div>
        })
      }
    </div>
  )
}

export default Addet








// function Usereduser() {
  // let reduser = (count,action) => {
  //   if (action.qiymat === 'decrement') {
  //     count - 1
  //   }
  //   if (action.qiymat === 'encrement') {
  //     count + 1
  //   }
  // }
//   let [count , dispatch] = useReducer(reduser,0)
//   return (
//     <div>
//       <button className='btn' onClick={() => dispatch({qiymat : 'decrement'})} >-</button>
//       <span className='btn'>{count}</span>
//       <button className='btn' onClick={() => dispatch({qiymat : 'encrement'})}>+</button>
//     </div>
//   )
// }

// export default Usereduser










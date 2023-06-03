import { memo } from "react";
const ColorBox = ({color}) => {
  console.log('Color comp rendered');
  return (
    <div style={{width:100,height:100,backgroundColor:color,margin:5}}>
    </div>
  )
}
export default memo(function ColorBox({color,onClick}){
  console.log('Color comp rendered');
  return (
    <div style={{width:100,height:100,backgroundColor:color,margin:5}}>
    <button onClick={onClick}>HEllo brother in CHild</button>
    </div>
  )
})
// export default ColorBox
import { useState } from "react";
import style from "./App.module.css";
import ColorBox from "./components/ColorBox";
import { useCallback } from "react";
const AppMain = () => {
  const [appRenderCount,setappRenderCount]=useState(0);
  const handleClick = useCallback(() => {
      console.log("clicked");
    },[]);
  console.log(`app renders ${appRenderCount}`)
  return (
    <div className={style.App}>
    {appRenderCount}
     <button onClick={()=>{
      setappRenderCount(prev => prev+1)
     }}>
     Hello
     </button>
     <ColorBox color='black' onClick={handleClick}/>
    </div>
  );
};

export default AppMain;

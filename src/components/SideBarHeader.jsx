import { useState, useRef,  } from "react";
import { Header } from "./Header";
import { SideBar } from "./SideBar";

export function SideBarHeader({cartLength}){
   const [isSideBarOpen, setIsSideBarOpen] = useState(false);
   const sideBarNotifier = useRef (null)

   function toggleSideBar() {
    setIsSideBarOpen(prev => !prev);
     
  
    if(!isSideBarOpen){
     sideBarNotifier.current?.setAttribute('aria-label', 'side bar opened')
    }else{
      sideBarNotifier.current?.setAttribute('aria-label', 'side bar closed')
    }
   }

  return(   
    <div 
     className="header-side-bar-container">
      <Header onToggleSideBar = {toggleSideBar} cartLength = {cartLength} />
      <SideBar   
      ref={sideBarNotifier}
      onToggleSideBar = {toggleSideBar} />
    </div>
    
    
  )
}
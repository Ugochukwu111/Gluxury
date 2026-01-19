import { useState, useRef,  } from "react";
import { Header } from "./Header";
import { SideBar } from "./SideBar";

export function SideBarHeader({cartLength, onResults}){
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
      <Header toggleSideBar = {toggleSideBar} 
      cartLength = {cartLength} 
       onResults = {onResults} />
      <SideBar   
      ref={sideBarNotifier}
      onToggleSideBar = {toggleSideBar} />
    </div>
    
    
  )
}

import { createContext } from "react"
import React from "react"

export const cartContext=createContext()

export const Context=(props)=>{
    const info=8
    
  return(<cartContext.Provider value={info}>{props.Children}</cartContext.Provider>)
}
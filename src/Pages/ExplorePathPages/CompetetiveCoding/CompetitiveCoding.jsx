import React from 'react'
import styles from "./CompetitiveCoding.module.scss"
import { useEffect } from 'react'
const CompetitiveCoding = () => {
  useEffect(()=>{
    document.title= 'Explore Path: Competitive Coding';
},[]);
  return (
    <div>CompetitiveCoding</div>
  )
}

export default CompetitiveCoding
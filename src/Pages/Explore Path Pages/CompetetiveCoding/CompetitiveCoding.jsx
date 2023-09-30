import React from 'react'
import styles from "./CompetitiveCoding.module.scss"
import { useEffect } from 'react'
const CompetitiveCoding = () => {
  useEffect(()=>{
    document.title= 'Explore Path: Competitive Coding';
},[]);
  return (
    <div className={styles.ccwrapper}>
      <div className={styles.introduction}>
        <div className={styles.introductionTitle}>INTRODUCTION</div>
        <div className={styles.introductionContent}>Once you enter programming you just don’t learn how to code but you also know the “art of thinking”, by breaking your code into smaller chunks and then using your logic-based creativity to solve a problem from different angles. Programming is a fun exercise for your brain, programming is a mental sport. When this sport is held on the internet involving various sports programmers as contestants, then it is called Competitive Programming. In this, participants compete to solve programming problems using algorithms and data structures within a set time limit. The competitions are usually held online or onsite, and the challenges are designed to test the participants' problem-solving skills, efficiency, and accuracy.
<br />
Competitive coding involves solving problems in various categories such as data structures, algorithms, dynamic programming, graph theory, and more.</div>
      </div>
    </div>
  )
}

export default CompetitiveCoding
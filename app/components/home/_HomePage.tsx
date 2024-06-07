'use client'

import { motion } from "framer-motion"
import Hero from "./Hero"
import AboutMe from "./AboutMe"
import Tech from "./Tech"
import FlutterProjects from "./FlutterProjects"
import Hobby from "./Hobby"
import HireMe from "./HireMe"
import WebProjects from "./WebProjects"
import { useAppTheme } from "../theme/AppTheme"
import { useEffect } from "react"
import { flutterProjectModel, photographyModel, webProjectModel } from "@/app/utils/models"

const viewport = {
  once: false,
  amount: typeof window !== 'undefined' ? (window.innerWidth > 450 ? 0.3 : 0.1) : 0.3
}

const transition = {
  closed: { staggerChildren: 0.3, staggerDirection: -1 },
  open: { staggerChildren: 0.3, delayChildren: 0.2 }
}

interface props {flutterProjects: flutterProjectModel[], webProjects: webProjectModel[], photography: photographyModel[]};
const _HomePage = (props: props) => {

  const {themeColor} = useAppTheme();

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []); 

  return (
    <>
      <Hero />
      <motion.section id='AboutMe' initial='closed' whileInView='open' viewport={viewport} transition={transition} className='relative max-w-[100vw] overflow-hidden dark:bg-gradient-to-t dark:from-slate-900 dark:to-transparent'>
        <AboutMe themeColor={themeColor} />
      </motion.section>
      <motion.section id='Tech' initial='closed' whileInView='open' viewport={viewport} transition={transition} className=' relative dark:bg-gradient-to-b dark:from-slate-900'>
        <Tech themeColor={themeColor} />
      </motion.section>
      <motion.section id='WebProjects' initial='closed' whileInView='open' viewport={viewport} transition={transition} className='relative overflow-hidden'>
        <WebProjects data={props.webProjects} />
      </motion.section>
      <motion.section id='FlutterProjects' initial='closed' whileInView='open' viewport={viewport} transition={transition} className='relative overflow-hidden'>
        <FlutterProjects data={props.flutterProjects} />
      </motion.section>
      <motion.section id='MyHobby' initial='closed' whileInView='open' viewport={viewport} transition={transition} className=' relative overflow-hidden'>
        <Hobby data={props.photography} themeColor={themeColor}/>
      </motion.section>
      <motion.section id='HireMe' initial='closed' whileInView='open' viewport={viewport} transition={transition} className=' relative overflow-hidden myContainer py-[8rem]'>
        <HireMe />
      </motion.section>
    </>
  )
}

export default _HomePage
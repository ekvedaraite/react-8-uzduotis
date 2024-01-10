import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MainDivAnimation = ({ children }) => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  const [scrollingEnabled, setScrollingEnabled] = useState(false)

  useEffect(() => {
    setScrollingEnabled(false)

    const timeoutId = setTimeout(() => {
      setScrollingEnabled(true)
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollingEnabled) {
        window.scrollTo(0, 0)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollingEnabled])

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {children}
    </motion.div>
  )
}

export default MainDivAnimation

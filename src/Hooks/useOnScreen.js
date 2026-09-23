import { useEffect, useState } from "react"

export default function useOnScreen(ref) {

    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIntersecting(true)
            observer.disconnect() // trigger once, then stop observing
          }
        },
        { threshold: 0.1 }
      )

      observer.observe(ref.current)
      return () => { observer.disconnect() }
    }, [ref])

    return isIntersecting
  }
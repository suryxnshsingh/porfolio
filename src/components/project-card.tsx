"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { Github, ExternalLink, Code, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  videoUrl?: string
  githubUrl: string
  liveUrl: string
  index?: number
}

export function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  videoUrl,
  githubUrl,
  liveUrl,
  index = 0,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Reset hover state when not hovering
  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.2 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration: 0.9,
        ease: [0.25, 1, 0.5, 1],
        delay: index * 0.1,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col md:flex-row h-[24rem] md:h-[18rem] rounded-xl overflow-hidden bg-black border border-zinc-800/50 shadow-[0_0_25px_rgba(0,0,0,0.3)] hover:shadow-[0_0_35px_rgba(0,0,0,0.4)] transition-all duration-700"
    >
      {/* Grain texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-10" />

      {/* Media Section */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden p-2">

        {videoUrl ? (
          <motion.video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-contain rounded-lg"
            animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
            transition={{ duration: 1.4, ease: [0.33, 1, 0.68, 1] }}
          >
            <source src={videoUrl} type="video/mp4" />
            <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-full object-contain rounded-lg" />
          </motion.video>
        ) : (
          <motion.div
            className="relative w-full h-full rounded-lg overflow-hidden"
            animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
            transition={{ duration: 1.4, ease: [0.33, 1, 0.68, 1] }}
          >
            <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-full object-contain" />
          </motion.div>
        )}
      </div>

      {/* Content Section */}
      <div className="relative w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-between h-1/2 md:h-full z-20">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <motion.h3
              className="text-lg md:text-xl font-medium text-white"
              animate={isHovered ? { x: 8 } : { x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {title}
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -45 }}
              animate={
                isHovered ? { opacity: 1, scale: 1, rotate: 0, x: 8 } : { opacity: 0, scale: 0.6, rotate: -45, x: 0 }
              }
              transition={{ duration: 0.3 }}
              className="text-zinc-400"
            >
              <ChevronRight size={16} />
            </motion.div>
          </div>

          <motion.p
            className="text-zinc-400 mb-4 text-sm line-clamp-3"
            animate={isHovered ? { x: 8 } : { x: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            {description}
          </motion.p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                className="px-2 py-1 text-xs rounded-full border border-zinc-800 text-zinc-300 backdrop-blur-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                whileHover={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderColor: "rgba(255,255,255,0.3)",
                  transition: { duration: 0.2 },
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" asChild className="flex-1 h-10 flex items-center justify-center gap-2">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="size-4" />
              GitHub
            </a>
          </Button>

          <Button asChild className="flex-1 h-10 flex items-center justify-center gap-2">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="size-4" />
              Live Demo
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const dotsRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Dot class
    class Dot {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.radius = Math.random() * 2 + 1
        this.baseRadius = this.radius
        this.color = `rgba(0, 150, 255, ${Math.random() * 0.5 + 0.3})`
        this.repulsionForce = 100
      }

      update(mouse) {
        // Mouse interaction
        const dx = this.x - mouse.x
        const dy = this.y - mouse.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 100) {
          const force = (100 - distance) / 100
          const angle = Math.atan2(dy, dx)
          this.vx += Math.cos(angle) * force * 0.5
          this.vy += Math.sin(angle) * force * 0.5
          
          // Glow effect near mouse
          this.radius = this.baseRadius + (2 * force)
        } else {
          this.radius = this.baseRadius
        }

        // Update position with velocity
        this.x += this.vx
        this.y += this.vy

        // Bounce off walls
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1

        // Keep within bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x))
        this.y = Math.max(0, Math.min(canvas.height, this.y))

        // Slow down over time
        this.vx *= 0.99
        this.vy *= 0.99
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()

        // Add glow effect
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(
          this.x, this.y, this.radius,
          this.x, this.y, this.radius * 2
        )
        gradient.addColorStop(0, this.color)
        gradient.addColorStop(1, 'rgba(0, 150, 255, 0)')
        ctx.fillStyle = gradient
        ctx.fill()
      }
    }

    // Create dots
    const createDots = () => {
      const dotCount = Math.min(800, Math.floor((canvas.width * canvas.height) / 15000))
      dotsRef.current = []
      for (let i = 0; i < dotCount; i++) {
        dotsRef.current.push(new Dot())
      }
    }

    createDots()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw dots
      dotsRef.current.forEach(dot => {
        dot.update(mouseRef.current)
        dot.draw()
      })

      // Draw connections between nearby dots
      ctx.strokeStyle = 'rgba(0, 150, 255, 0.1)'
      ctx.lineWidth = 0.5
      
      for (let i = 0; i < dotsRef.current.length; i++) {
        for (let j = i + 1; j < dotsRef.current.length; j++) {
          const dot1 = dotsRef.current[i]
          const dot2 = dotsRef.current[j]
          const distance = Math.sqrt(
            Math.pow(dot1.x - dot2.x, 2) + 
            Math.pow(dot1.y - dot2.y, 2)
          )
          
          if (distance < 150) {
            const opacity = 1 - (distance / 150)
            ctx.strokeStyle = `rgba(0, 150, 255, ${opacity * 0.2})`
            ctx.beginPath()
            ctx.moveTo(dot1.x, dot1.y)
            ctx.lineTo(dot2.x, dot2.y)
            ctx.stroke()
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      }
    }

    // Mouse leave handler - reset mouse position
    const handleMouseLeave = () => {
      mouseRef.current = { x: -100, y: -100 }
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <section className="hero" id="hero">
      {/* Animated Background Canvas */}
      <canvas 
        ref={canvasRef}
        className="hero-canvas"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="hero-overlay" />
      
      {/* Hero Content */}
      <div className="hero-content">
        <h1>Empowering Nepal's Future Innovators</h1>
        <p>We provide free, hands-on STEM courses—from Python to Arduino—giving Nepali youth the tools to build their future.</p>
        <Link to="/about" className="cta-button">
          Discover More
        </Link>
      </div>
    </section>
  )
}

export default Hero
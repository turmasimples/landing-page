import Image from 'next/image'
import React from 'react'

interface TurmaLogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function TurmaLogo({ className = '', showText = true, size = 'md' }: TurmaLogoProps) {
  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <Image
        src="/turma-logo.png"
        alt="turma simples logo"
        width={100}
        height={100}
      />
      {showText && (
        <span className={`font-bold text-foreground ${textSizeClasses[size]}`}>
          turma simples
        </span>
      )}
    </div>
  )
}
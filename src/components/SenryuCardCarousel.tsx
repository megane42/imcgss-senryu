import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState } from 'react'
import { SenryuCard } from './SenryuCard'
import styles from './SenryuCardCarousel.module.css'
import type { Senryu } from '@/lib/types/senryu'

interface SenryuCardCarouselProps {
  senryus: Senryu[]
  onSelect: (index: number) => void
}

export const SenryuCardCarousel: React.FC<SenryuCardCarouselProps> = ({ senryus, onSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: false,
    containScroll: false,
  })

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        const newIndex = emblaApi.selectedScrollSnap()
        setSelectedIndex(newIndex)
        onSelect(newIndex)
      })
    }
  }, [emblaApi, onSelect])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!emblaApi) return
      switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault()
        emblaApi.scrollPrev()
        break
      case 'ArrowRight':
        event.preventDefault()
        emblaApi.scrollNext()
        break
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    // cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [emblaApi])

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {senryus.map((senryu, index) => (
            <div key={index} className={styles.embla__slide}>
              <SenryuCard senryu={senryu} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.dots}>
        {senryus.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${selectedIndex === index ? styles.dotActive : ''}`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
import { useEffect, useRef, useState, type KeyboardEvent, type TouchEvent } from 'react'

interface PhotoGalleryProps {
  photos: string[]
  title: string
  labels: { close: string; previous: string; next: string }
  onClose: () => void
}

function PhotoGallery({ photos, title, labels, onClose }: PhotoGalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const touchStartX = useRef<number | null>(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog && !dialog.open) dialog.showModal()
  }, [])

  useEffect(() => {
    for (const offset of [-1, 1]) {
      const image = new Image()
      image.src = photos[(index + offset + photos.length) % photos.length]
    }
  }, [index, photos])

  const go = (step: number) => setIndex((current) => (current + step + photos.length) % photos.length)

  function handleKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === 'ArrowLeft') go(-1)
    if (event.key === 'ArrowRight') go(1)
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) return
    const delta = event.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(delta) > 50) go(delta > 0 ? -1 : 1)
  }

  return (
    <dialog
      ref={dialogRef}
      className="photo-gallery"
      aria-label={title}
      onClose={onClose}
      onKeyDown={handleKeyDown}
    >
      <div className="gallery-header">
        <span className="gallery-title">{title}</span>
        <span className="gallery-counter">
          {index + 1} / {photos.length}
        </span>
      </div>

      <button type="button" className="gallery-btn gallery-close" onClick={onClose} aria-label={labels.close}>
        &times;
      </button>

      <div
        className="gallery-stage"
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0].clientX
        }}
        onTouchEnd={handleTouchEnd}
      >
        <img src={photos[index]} alt={`${title} ${index + 1}`} />
      </div>

      <button type="button" className="gallery-btn gallery-prev" onClick={() => go(-1)} aria-label={labels.previous}>
        &#8249;
      </button>
      <button type="button" className="gallery-btn gallery-next" onClick={() => go(1)} aria-label={labels.next}>
        &#8250;
      </button>
    </dialog>
  )
}

export default PhotoGallery

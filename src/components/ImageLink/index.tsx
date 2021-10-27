import styles from './ImageLink.module.scss'
import { IImage } from '../Image'
import Image from '../Image'
import { CSSProperties, ReactNode } from 'react'

interface IImageLink extends IImage {
  link?: string
  style?: CSSProperties
  hasText?: boolean
  onRight?: boolean
  children?: ReactNode
}

const ImageLink = ({
  className,
  src,
  alt,
  link,
  hasText = false,
  onRight = false,
  ...props
}: IImageLink) => {
  return (
    <div className={styles.container}>
      <a className={styles.icon} href={link} target="_blank" rel="noreferrer">
        <Image className={className} src={src} alt={alt} {...props} />
        {hasText ?? props.children}
      </a>
    </div>
  )
}

export default ImageLink

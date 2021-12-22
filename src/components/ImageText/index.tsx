import { CSSProperties } from 'react'
import { IImage } from '../Image'
import Image from '../Image'
import styles from './ImageLink.module.scss'
import classNames from '../../utils/classNames'

interface IImageLink extends IImage {
  link?: string
  style?: CSSProperties
  onRight?: boolean
}

const ImageLink = ({ link, onRight, children, ...props }: IImageLink) => {
  if (link) {
    return (
      <a
        className={classNames(styles.container, onRight && styles.right)}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <Image {...props} />
        {children && <div className={styles.text}>{children}</div>}
      </a>
    )
  } else {
    return (
      <div className={classNames(styles.container, onRight && styles.right)}>
        <Image {...props} />
        {children && <div className={styles.text}>{children}</div>}
      </div>
    )
  }
}

export default ImageLink

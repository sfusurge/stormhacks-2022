import styles from './MenuBtn.module.scss'
import { CSSProperties, ReactNode } from 'react'
import { IImage } from '../Image'
import Image from '../Image'
import { ReactComponent as Logo } from '../../assets/pageIcons/smallCube.svg'

interface IMenuBtn extends IImage {
  fill?: string
  stroke?: string
  link?: string
  style?: CSSProperties
  children?: ReactNode
}

const MenuBtn = ({
  className,
  src,
  alt,
  link,
  fill,
  stroke,
  ...props
}: IMenuBtn) => {
  return (
    <button className={styles.container}>
      <Logo fill={fill} stroke={stroke} />
      <div className={styles.imageLink}>
        <Image className={styles.img} src={src} alt={alt} />
        <p className={styles.btnText} style={props.style}>
          {link}
        </p>
      </div>
    </button>
  )
}

export default MenuBtn

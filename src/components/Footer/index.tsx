import styles from './Footer.module.scss'
import LinkButton from '../ImageText'
import socials from '../../utils/socials'
import pageIcons from '../../utils/pageIcons'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pagesContainer}>
        <h1 className={styles.heading}>
          Learn more today about{'\n'}
          <b className={styles.headingBold}>StormHacks 2022</b>
        </h1>
        <div className={styles.pageOptions}>
          {pageIcons.map(({ id, src, alt, link, color }) => (
            <LinkButton
              key={id}
              className={styles.pageIcon}
              src={src}
              alt={alt}
              link={link}
            >
              <p className={styles.pageIconText} style={{ color: color }}>
                {id}
              </p>
            </LinkButton>
          ))}
        </div>
      </div>
      <div className={styles.socialsContainer}>
        {socials.map(({ id, src, link }) => (
          <LinkButton
            key={id}
            className={styles.socialIcon}
            src={src}
            alt={id}
            link={link}
          />
        ))}
      </div>
    </div>
  )
}

export default Footer

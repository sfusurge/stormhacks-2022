import styles from './About.module.scss'
import Image from '../Image'
import timer from '../../assets/pageIcons/timer.svg'
import trophy from '../../assets/pageIcons/trophy.svg'
import person from '../../assets/pageIcons/person.svg'
import internet from '../../assets/pageIcons/internet.svg'
import editIcon from '../../assets/pageIcons/edit-orange.svg'
import dreamDesignDevelop from '../../assets/dreamDesignDevelop.svg'
import otterEyesClosed from '../../assets/otterEyesClosed.svg'
import execs from '../../utils/execs'
import ImageLink from '../ImageLink'

const execResolver = require.context('../../assets/execs', false, /.*\.png/)

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <p className={styles.title}>
          Enter our <span className={styles.headingBold}>{'StormHacks >'}</span>
        </p>
        <div className={styles.bigDetails}>
          <div className={styles.iconGroup}>
            <Image className={styles.icon} src={timer} alt={timer} />
            36 Hours
          </div>
          <div className={styles.iconGroup}>
            <Image className={styles.icon} src={trophy} alt={timer} />
            $1000+ in prizes{' '}
          </div>
        </div>
        <div className={styles.bigDetails}>
          <div className={styles.iconGroup}>
            <Image className={styles.icon} src={person} alt={timer} />
            400+ hackers
          </div>
          <div className={styles.iconGroup}>
            <Image className={styles.icon} src={internet} alt={timer} />
            Open worldwide
          </div>
        </div>
        <p style={{ marginBottom: '34px' }} className={styles.paragraph}>
          With interactive workshops, cross-team bonding activities, and a
          bounty of company swag, StormHacks is ready to welcome hackers,
          designers, engineers, and tech enthusiasts to our inaugural hackathon.
        </p>
        <p className={styles.paragraph}>
          On February 20 - 21, 2021, innovative individuals will come together
          to embrace their passion for technology - all in the span of 24 hours.
          Together they will face insurrmountable challenges as they design
          ideas and create impactful projects.
        </p>
        <a className={styles.applyBtn}>
          Apply Now
          <Image className={styles.editIcon} src={editIcon} />
        </a>
        <p style={{ marginTop: '240px' }} className={styles.title}>
          Who is <span className={styles.headingBold}>{'SFU Surge'}</span>
        </p>
        <p style={{ marginBottom: '15px' }} className={styles.paragraph}>
          With interactive workshops, cross-team bonding activities, and a
          bounty of company swag, StormHacks is ready to welcome hackers,
          designers, engineers, and tech enthusiasts to our inaugural hackathon.
        </p>
        <p className={styles.paragraph}>
          On February 20 - 21, 2021, innovative individuals will come together
          to embrace their passion for technology - all in the span of 24 hours.
          Together they will face insurrmountable challenges as they design
          ideas and create impactful projects.
        </p>
      </div>
      <Image className={styles.topImage} src={dreamDesignDevelop} />
      <Image className={styles.bottomImage} src={otterEyesClosed} />

      <div className={styles.execGroup}>
        {execs.map(exec => (
          <a
            className={styles.hyperLink}
            href={exec.link}
            target="_blank"
            rel="noreferrer"
          >
            <ImageLink
              src={execResolver(exec.src).default}
              className={styles.headshot}
              width={exec.width}
              height={exec.height}
              alt={exec.src}
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default About

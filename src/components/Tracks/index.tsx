import { useState } from 'react'
import styles from './Tracks.module.scss'
import Image from '../Image'
import motherHeart from '../../assets/pageIcons/motherHeart.svg'
import penTip from '../../assets/pageIcons/penTip.svg'

const Tracks = () => {
  const [filter, setFilter] = useState<string>('Mental health')
  const filterTypes = ['Mental health', 'Accessibility', 'Education']

  return (
    <div className={styles.container}>
      <div className={styles.textGroup}>
        <p className={styles.title}>
          Guide your upcoming project with{' '}
          <span className={styles.semiBold}>event tracks</span>
        </p>
        <p className={styles.smallBoldText}>
          It can get a little confusing about what to make during StormHacks,
          whether you’re an experienced hacker or if it’s your first time. If
          you’re stuck in that creative block, take a look at these themes to
          help flesh out your next idea or solution.
        </p>
        <div className={styles.btnGroup}>
          {filterTypes.map((filterType, i) => (
            <button
              className={
                filterType === filter ? styles.activeBtn : styles.inactiveBtn
              }
              onClick={() => {
                setFilter(filterType)
              }}
            >
              {filterType}
            </button>
          ))}
        </div>
        <div className={styles.blueBox}>
          <div className={styles.understanding}>
            <p className={styles.smallTitle}>
              Understanding ourselves{' '}
              <Image src={motherHeart} alt={motherHeart}></Image>
            </p>
            <div className={styles.smallParagraph}>
              <p>
                With people having to quarantine due to COVID-19, mental health
                issues amongst the population have skyrocketed or became worse
                due to the stress from isolation and lack of job security.
              </p>
              <p>
                However, mental health resources such as therapists are often
                unaffordable and many counseling services are backed up with
                long waitlists. Despite these mental health crises, people can
                still improve their circumstances in areas which include but are
                not limited to:
              </p>
              <ul>
                <li>Eating a more well rounded diet</li>
                <li>Getting more intense and frequent exercise</li>
                <li>Forming new relationships or improving current ones</li>
                <li>Gaining access to more affordable resources</li>
                <li>Managing their stress </li>
              </ul>
              <p className={styles.question}>
                What are some ways you can help people improve these areas in
                their life?
              </p>
            </div>
          </div>
        </div>

        <div className={styles.footerText}>
          <p
            style={{ margin: 0, paddingTop: '35px' }}
            className={styles.smallTitle}
          >
            Coding isn’t a must-have <Image src={penTip} alt={penTip}></Image>
          </p>
          <div className={styles.smallParagraph}>
            <p style={{ margin: 0, paddingBottom: '112px' }}>
              One of the most challenging things about a hackathon can be
              developing your final submission, especially for hackers who are
              aiming to build their design skills, sharing their ideas and
              stories through visuals and experiences. This can often lead to
              people feeling left out or discouraged from even entering their
              first hackathon, especially if you’re entering on your own. For
              all you designers, we’re hosting prizes and workshops to help
              support your no-code solutions and prototypes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tracks

import styles from './Faq.module.scss'
import AllQuestions from '../AllQuestions'
import Image from '../Image'
import ottersHotPink from '../../assets/ottersHotPink.svg'

const Faq = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <p className={styles.title}>
          Frequently <span className={styles.bold}>Asked Questions</span>
        </p>
        <AllQuestions />
      </div>
      <Image
        className={styles.backgroundImg}
        src={ottersHotPink}
        alt={ottersHotPink}
      />
    </div>
  )
}

export default Faq

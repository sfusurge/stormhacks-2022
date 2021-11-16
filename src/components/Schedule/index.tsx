import { useState, useEffect } from 'react'
import { calculateTimeLeft, formatDoubleDigitTime } from '../../utils/timeLeft'
import styles from './Schedule.module.scss'
import Image from '../Image'
import editIcon from '../../assets/pageIcons/editIcon.svg'
import facebook from '../../assets/socials/facebook-black.svg'
import instagram from '../../assets/socials/instagram-black.svg'
import discord from '../../assets/socials/discord.svg'
import linkedin from '../../assets/socials/linkedin-black.svg'

interface ITime {
  days?: string
  hours?: string
  minutes?: string
  seconds?: string
}

const getTime = (dueDate: string) => {
  const timeLeft = calculateTimeLeft(dueDate)
  const timeString: ITime = {}
  if (timeLeft) {
    timeString.days = formatDoubleDigitTime(timeLeft.days)
    timeString.hours = formatDoubleDigitTime(timeLeft.hours)
    timeString.minutes = formatDoubleDigitTime(timeLeft.minutes)
    timeString.seconds = formatDoubleDigitTime(timeLeft.seconds)
    return timeString
  }
  return null
}

const Schedule = () => {
  const socials = [
    { name: 'Instagram', image: instagram },
    { name: 'Facebook', image: facebook },
    { name: 'Discord', image: discord },
    { name: 'Linkedin', image: linkedin }
  ]

  const dueDate = '2023-09-02T21:00:00Z'
  const [timeLeft, setTimeLeft] = useState(getTime(dueDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTime(dueDate))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.title}>
          We’ll be releasing <span className={styles.bold}>our schedule</span>{' '}
          later on
        </p>
        <p className={styles.subTitle}>
          We’re going to need a bit more time before we release all of this info
          to the public. Update yourself ASAP by keeping up with us on our
          social media platforms.
        </p>
        <div className={styles.socialIcons}>
          {socials.map(social => (
            <p className={styles.textGroup}>
              <Image
                className={styles.social}
                src={social.image}
                alt={social.image}
              />
              {social.name}
            </p>
          ))}
        </div>
        <div className={styles.borderBox}>
          <div className={styles.textBox}>
            <p className={styles.title}>
              Apply Now
              <Image className={styles.icon} src={editIcon} alt={editIcon} />
            </p>
            {timeLeft ? (
              <p className={styles.bodyText}>
                Don’t leave your application to the last minute. Just as a heads
                up, there’s{' '}
                <span className={styles.semiBold}>
                  {timeLeft?.days} days, {timeLeft?.hours} hours,{' '}
                  {timeLeft?.minutes} minutes and {timeLeft?.seconds} seconds{' '}
                </span>{' '}
                <span className={styles.thin}>
                  left until applications close.
                </span>
              </p>
            ) : (
              <p className={styles.bodyText}> Applications are now closed </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule

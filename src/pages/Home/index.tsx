import { useEffect, useState, CSSProperties, useRef } from 'react'
import classNames from '../../util/classNames'
import styles from './Home.module.scss'

const k = (x: number, y: number, z: number) => {}

const sign = (x: number) => (x < 0 ? -1 : 1)

const leftRotate = (arr: unknown[]) => arr.push(arr.shift())
const rightRotate = (arr: unknown[]) => arr.unshift(arr.pop())

const rot = ([x, y]: number[]) => ({
  '--x': `${x}deg`,
  '--y': `${y}deg`
})

const classes = ['one', 'two', 'three', 'four', 'five', 'six']
const Home = () => {
  // const [faces, setFaces] = useState<Record<string, [number, number]>>({
  //   one: [0, 180],
  //   two: [0, 90],
  //   three: [0, 0],
  //   four: [0, -90],
  //   five: [90, 0],
  //   six: [-90, 0]
  // })
  const [{ faces, shape }, setFaces] = useState({
    faces: [
      [0, 180], // 0 front
      [0, 90], // 1 right
      [0, 0], // 2 back
      [0, 270], // 3 left
      [90, 0], // 4 top
      [270, 0] // 5 bot
    ],
    shape: { front: 0, right: 1, back: 2, left: 3, top: 4, bot: 5 }
  })

  console.log(shape)

  useEffect(() => {
    const s = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp': {
          faces[shape.front][0] += 90
          faces[shape.top][0] += 90
          faces[shape.back][0] += 90
          faces[shape.bot][0] += 90
          setFaces({
            faces,
            shape: {
              ...shape,
              front: shape.top,
              top: shape.back,
              back: shape.bot,
              bot: shape.front
            }
          })
          break
        }
        case 'ArrowDown': {
          faces[shape.front][0] -= 90
          faces[shape.top][0] -= 90
          faces[shape.back][0] -= 90
          faces[shape.bot][0] -= 90
          setFaces({
            faces,
            shape: {
              ...shape,
              front: shape.bot,
              top: shape.front,
              back: shape.top,
              bot: shape.back
            }
          })
          break
        }
        case 'ArrowRight': {
          faces[shape.front][1] += faces[shape.front][1] >= 180 ? -90 : 90
          faces[shape.left][1] += 90
          faces[shape.back][1] += 90
          faces[shape.right][1] += 90
          setFaces({
            faces,
            shape: {
              ...shape,
              front: shape.right,
              right: shape.back,
              back: shape.left,
              left: shape.front
            }
          })
          break
        }
        case 'ArrowLeft': {
          faces[shape.front][1] -= 90
          faces[shape.left][1] -= 90
          faces[shape.back][1] -= 90
          faces[shape.right][1] -= 90
          setFaces({
            faces,
            shape: {
              ...shape,
              front: shape.left,
              right: shape.front,
              back: shape.right,
              left: shape.back
            }
          })
          break
        }
      }
    }
    document.addEventListener('keydown', s)
    return () => {
      document.removeEventListener('keydown', s)
    }
  }, [faces, shape])

  return (
    <div className={styles.container}>
      <div className={styles.scene}>
        <div className={styles.cube}>
          {Object.values(faces).map((rotate, i) => (
            <div
              className={classNames(styles.side, styles[classes[i]])}
              style={rot(rotate) as CSSProperties}
            >
              {i}
            </div>
          ))}
          {/* <div className={classNames(styles.side, styles.one)}>1</div>
          <div className={classNames(styles.side, styles.two)}>2</div>
          <div className={classNames(styles.side, styles.three)}>3</div>
          <div className={classNames(styles.side, styles.four)}>4</div>
          <div className={classNames(styles.side, styles.five)}>5</div>
          <div className={classNames(styles.side, styles.six)}>6</div> */}
        </div>
      </div>
    </div>
  )
}

export default Home

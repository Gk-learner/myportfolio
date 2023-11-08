import './index.scss'
const AnimatedLetters = ({strArray, letterClass, idx}) => {
    return(
        <span>
            {
                strArray.map((char, i) => (
                    <span key={char + 1} className={`${letterClass} _${i+ idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}
export default AnimatedLetters
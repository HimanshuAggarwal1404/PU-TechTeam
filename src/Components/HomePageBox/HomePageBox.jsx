import styles from "./HomePageBox.module.scss"
const Homepagebox = (props) => {
    return (
        <div className={styles.Homepageboxwrapper}>
            <div className={styles.Homepagebox}>
                <div className={styles.logo}><img src={props.logo}></img></div>
                <div className={styles.title}>{props.title}</div>

            </div>
        </div>
    )
}
export default Homepagebox
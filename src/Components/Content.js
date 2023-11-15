import styles from './Content.module.css'



const Content = () => {
    return (
        <div className={styles.content}>
             <div className={styles.navBarLeft}>
                 <a href="/"><span className="material-symbols-outlined ">home</span></a>
                 <p>Home</p>
                 <a href="/"><span className="material-symbols-outlined">slideshow</span></a>
                 <p>Shorts</p>
                 <a href="/"><span className="material-symbols-outlined">subscriptions</span></a>
                 <p>Subscriptions</p>
                 <a href="/"><span className="material-symbols-outlined">playlist_add</span></a>
                 <p>You</p>
            </div>

            <div className={styles.mainVideo}>
            <iframe width="760" height="515" src="https://www.youtube.com/embed/aiqSjvRRjvA?si=AMWJAlwOvpW5d_PV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           </div>



        </div>
    );
}

export default Content;
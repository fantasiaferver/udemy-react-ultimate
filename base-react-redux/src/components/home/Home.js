import video from '../../assets/video-homepage.mp4'

const Home = (props) => {
    return (
        <div className="home-container">
            <p>Home</p>
            <video autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}

export default Home
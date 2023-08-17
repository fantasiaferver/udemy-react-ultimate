import video from '../../assets/video-homepage.mp4'

const Home = (props) => {
    return (
        <div className="home-container">
            <div className='left-content'>
                <div className='big-title' >Forms that break the norm</div>
                <div className='small-title'>Get more data—like signups, feedback, and anything else—with forms designed to be refreshingly different.</div>
                <button type="button" class="btn btn-dark fw-bold">Get started-it's free</button>
            </div>
            <video autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}

export default Home
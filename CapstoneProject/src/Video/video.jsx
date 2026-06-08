// import './video.css'

export default function Video() {
    return (
        <section className="video-section">
            {/* Video Section Content */}
            <div className="video-content">
                <video autoPlay muted loop controls>
                    <source
                        src="https://cdn.pixabay.com/video/2016/01/29/1992-153555258_medium.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Video Section Text */}
            <div className="video-text-section">
                <h2>How Planetary Data Helps Us Understand Space</h2>
                <p className="text_Section">
                    Planetary science goes beyond images. Comparing
                    <strong> mass, diameter, gravity,</strong> and
                    <strong> density,</strong>
                    we gain insight into how planets form, behave, and interact within
                    the solar system.
                </p>
            </div>
        </section>
    )
}
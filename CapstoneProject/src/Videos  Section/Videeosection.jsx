import "./Videosection.css";

function VideoSection() {
  return (
    <section class="video-section">
      <div class="video-section-container">
        {/* Video Section Content */}
        <div class="video-content">
          <video autoplay muted loop controls>
            <source
              src="https://cdn.pixabay.com/video/2016/01/29/1992-153555258_medium.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video Section Text */}
        <div class="video-text-section">
          <h2>How Planetary Data Helps Us Understand Space</h2>
          <p class="text_Section">
            Planetary science goes beyond images. Comparing
            <strong> mass, diameter, gravity,</strong> and
            <strong> density,</strong>
            we gain insight into how planets form, behave, and interact within
            the solar system.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;

import denimalsStage from '../assets/denimals-stage.png'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">

        <div className="hero-content">
          <p className="hero-kicker">
            IMMERSIVE CONTENT PROJECT
          </p>

          <h1>
            DAY6 <span>×</span> PHOTOISM
          </h1>

          <p className="hero-subtitle">
            공연의 순간을 사진으로 가져가다
          </p>

          <p className="hero-description">
            공연 현장에서 팬이 직접 참여하고,
            그날의 경험을 사진으로 남길 수 있는 포토이즘 협업 콘텐츠
          </p>
        </div>

        <div className="hero-visual">
          <img
            src={denimalsStage}
            alt="DAY6 데니멀즈 밴드 무대"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero
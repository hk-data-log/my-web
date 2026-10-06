import card01 from '../assets/공연_인증샷의_한계.png'
import card02 from '../assets/혼자_촬영의_어려움.png'
import card03 from '../assets/공연과_포토부스의_연결_부족.png'

function PainPoint() {
  const cards = [
    {
      id: 1,
      image: card01,
      alt: '공연 인증샷의 한계',
    },
    {
      id: 2,
      image: card02,
      alt: '혼자 촬영의 어려움',
    },
    {
      id: 3,
      image: card03,
      alt: '공연과 포토부스의 연결 부족',
    },
  ]

  return (
    <section className="pain-section">
      <div className="pain-inner">

        <p className="pain-label">
          02 PAIN POINT
        </p>

        <h2 className="pain-title">
          공연의 기억을 특별하게 남기기 어렵다
        </h2>

        <div className="pain-image-grid">
          {cards.map((card) => (
            <div
              className="pain-image-card"
              key={card.id}
            >
              <img
                src={card.image}
                alt={card.alt}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default PainPoint
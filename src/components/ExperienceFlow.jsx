function ExperienceFlow() {
  const steps = [
    {
      number: '01',
      phase: 'BEFORE',
      title: '공연 정보 확인',
      text: '콘서트 일정과 장소를 확인하고 공연을 기대한다.',
    },
    {
      number: '02',
      phase: 'BEFORE',
      title: '티켓팅',
      text: '공연 티켓을 예매하며 본격적인 관람 준비를 시작한다.',
    },
    {
      number: '03',
      phase: 'ON SITE',
      title: '공연장 방문',
      text: '공연 당일 현장에 도착해 공연장의 분위기를 경험한다.',
    },
    {
      number: '04',
      phase: 'ON SITE',
      title: '포토부스 발견',
      text: 'DAY6 전용 포토이즘 부스를 발견한다.',
    },
    {
      number: '05',
      phase: 'EXPERIENCE',
      title: '프레임 선택',
      text: '공연 날짜와 멤버가 반영된 한정 프레임을 선택한다.',
    },
    {
      number: '06',
      phase: 'EXPERIENCE',
      title: '촬영',
      text: '아티스트 프레임과 함께 직접 사진을 촬영한다.',
    },
    {
      number: '07',
      phase: 'AFTER',
      title: '사진 소장',
      text: '공연의 기억이 담긴 결과물을 가져가고 공유한다.',
    },
  ]

  return (
    <section className="section experience-section">
      <p className="section-label">04 EXPERIENCE FLOW</p>

      <div className="experience-heading">
        <h2>공연 경험이 사진으로 이어지는 흐름</h2>

        <p>
          공연을 기다리는 순간부터 현장에서 촬영하고
          결과물을 소장하는 순간까지 팬 경험을 연결합니다.
        </p>
      </div>

      <div className="experience-flow">
        {steps.map((step, index) => (
          <div className="experience-step" key={step.number}>

            <div className="step-top">
              <span className="step-number">{step.number}</span>

              {index !== steps.length - 1 && (
                <span className="step-line"></span>
              )}
            </div>

            <div className="step-card">
              <span className="step-phase">{step.phase}</span>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default ExperienceFlow
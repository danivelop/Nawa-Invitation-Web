/* External dependencies */
import React from 'react'
import classNames from 'classnames/bind'

/* Internal dependencies */
import Label from 'elements/Label'
import KakaoMap from 'elements/KakaoMap'
import SVGIcon from 'elements/SVGIcon'
import styled from './Invitation.module.scss'

interface InvitationProps {
  title: string
  description: string
  date: string
  time: string
  simpleLocation: string
}

const cx = classNames.bind(styled)

function Invitation({ title, description, date, time, simpleLocation }: InvitationProps) {
  return (
    <div className={cx('template-wrapper')}>
      <header>
        <div className={cx('character-wrapper')}>
          <img src="/images/character.png" alt="nothing" />
        </div>
      </header>
      <section>
        <article className={cx('template-description')}>
          <Label className={cx('title')}>{title}</Label>
          <p className={cx('description')}>{description}</p>
        </article>
        <article className={cx('template-content')}>
          <div className={cx('content-section')}>
            <div className={cx('info-top-bar')}>
              <Label className={cx('info-top-title')}>모임 정보</Label>
              <p>"마! 엉아다! 집합해라~&#x1F60E;?"</p>
            </div>
            <div className={cx('infos')}>
              <div className={cx('info', 'date-wrapper')}>
                <div className={cx('info-title')}>
                  <div className={cx('icon-wrapper')}>
                    <SVGIcon name="calendar" />
                  </div>
                  <p>모임 날짜</p>
                </div>
                <div className={cx('info-content')}>{date}</div>
              </div>
              <div className={cx('info', 'time-wrapper')}>
                <div className={cx('info-title')}>
                  <div className={cx('icon-wrapper')}>
                    <SVGIcon name="time" />
                  </div>
                  <p>모임 시간</p>
                </div>
                <div className={cx('info-content')}>{time}</div>
              </div>
              <div className={cx('info', 'location-wrapper')}>
                <div className={cx('info-title')}>
                  <div className={cx('icon-wrapper')}>
                    <SVGIcon name="location" />
                  </div>
                  <p>모임 장소</p>
                </div>
                <div className={cx('info-content')}>{simpleLocation}</div>
              </div>
            </div>
          </div>
          <div className={cx('content-section')}>
            <div className={cx('content-info-title')}>
              <SVGIcon name="map" />
              <p>주소</p>
            </div>
            <div className={cx('info-content')}>
              <KakaoMap
                generalAddress="잠실1동 코워킹 스페이스"
                detailAddress="서울특별시 송파구 잠실1동-5 마천로 328 오금현대아파트 43동"
                latitude={33.450701}
                longitude={126.570667}
              />
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export default React.memo(Invitation)

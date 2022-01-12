import React from 'react'
import {
  RoadMapContainer,
  TopBackground,
  BannerWrapper,
  RoadMapHeadWrapper,
  BannerContent,
  MonthDescription,
  LeftMonthWrapper,
  MonthBox,
  RightTextWrapper,
  TextWrappper,
  MonthBoxWrapper,
  LineImageWrapper,
  VerticalLineWrapper,
  Line,
  CenterImageWrapper,
  RightMonthWrapper,
  LeftTextWrapper,
  FooterImageWrapper,
  FooterBannerWrapper,
  FooterBanner,
  GalleryWrapper,
  MobileHead
} from './styles'

export const RoadMap = () => {

  const imageList = [
    { id: 1, title: '1', url: 'assets/images/1.png' },
    { id: 2, title: '2', url: 'assets/images/2.png' },
    { id: 3, title: '3', url: 'assets/images/3.png' },
    { id: 4, title: '4', url: 'assets/images/4.png' },
    { id: 5, title: '5', url: 'assets/images/5.png' },
    { id: 6, title: '6', url: 'assets/images/6.png' },
    { id: 7, title: '7', url: 'assets/images/7.png' },
    { id: 8, title: '8', url: 'assets/images/8.png' },
    { id: 9, title: '9', url: 'assets/images/9.png' },
    { id: 10, title: '10', url: 'assets/images/10.png' },
    { id: 11, title: '11', url: 'assets/images/1.png' },
    { id: 12, title: '11', url: 'assets/images/2.png' },
    { id: 13, title: '11', url: 'assets/images/3.png' },
    { id: 14, title: '11', url: 'assets/images/4.png' },
    { id: 15, title: '11', url: 'assets/images/5.png' }
  ]

  return (
    <>
      <RoadMapContainer id='roadmap'>
        <TopBackground />
        <VerticalLineWrapper>
          <Line />
        </VerticalLineWrapper>
        <MobileHead>
          <img src='assets/images/road-map-head.png' alt='road-map-head' />
          <img src='assets/images/line-background.png' alt='line-background' />
        </MobileHead>
        <BannerWrapper>
          <BannerContent>
            <p>TV PUNKS</p>
            <p>ROADMAP</p>
            <RoadMapHeadWrapper>
              <img src='assets/images/road-map-head.png' alt='road-map-head' />
            </RoadMapHeadWrapper>
          </BannerContent>
        </BannerWrapper>
        <MonthDescription>
          <LineImageWrapper>
            <img src='assets/images/line-background.png' alt='line-background' />
          </LineImageWrapper>
          <CenterImageWrapper>
            <img src='assets/images/line-image1.png' alt='line-image1' />
          </CenterImageWrapper>
          <LeftMonthWrapper>
            <MonthBoxWrapper>
              <MonthBox>
                <p>JANUARY 2O22</p>
                <img src='assets/images/right-arrow.png' alt='right-arrow' style={{ marginLeft: '15px' }} />
              </MonthBox>
              <p>Invasiton starting</p>
            </MonthBoxWrapper>
          </LeftMonthWrapper>
          <RightTextWrapper>
            <div>
              <TextWrappper>
                <img src='assets/images/dot.png' alt='dot' />
                <p>TV PUNKS INVAsION PLANS PREPRATIOn</p>
              </TextWrappper>
              <TextWrappper>
                <img src='assets/images/dot.png' alt='dot' />
                <p>TV PUNKS INVAsION PLANS PREPRATIOn</p>
              </TextWrappper>
              <TextWrappper>
                <img src='assets/images/dot.png' alt='dot' />
                <p>TV PUNKS INVAsION PLANS PREPRATIOn</p>
              </TextWrappper>
            </div>
          </RightTextWrapper>
        </MonthDescription>
        <MonthDescription>
          <CenterImageWrapper>
            <img src='assets/images/line-image2.png' alt='line-image2' />
          </CenterImageWrapper>
          <LeftTextWrapper>
            <div>
              <TextWrappper>
                <img src='assets/images/dot.png' alt='dot' />
                <p>TV PUNKS INVAsION PLANS PREPRATIOn</p>
              </TextWrappper>
              <TextWrappper>
                <img src='assets/images/dot.png' alt='dot' />
                <p>TV PUNKS INVAsION PLANS PREPRATIOn</p>
              </TextWrappper>
              <TextWrappper>
                <img src='assets/images/dot.png' alt='dot' />
                <p>TV PUNKS INVAsION PLANS PREPRATIOn</p>
              </TextWrappper>
            </div>
          </LeftTextWrapper>
          <RightMonthWrapper>
            <MonthBoxWrapper>
              <MonthBox>
                <p>JANUARY 2O22</p>
                <img src='assets/images/right-arrow.png' alt='right-arrow' style={{ marginLeft: '15px' }} />
              </MonthBox>
              <p>Invasiton starting</p>
            </MonthBoxWrapper>
          </RightMonthWrapper>
        </MonthDescription>
        <MonthDescription>
          <CenterImageWrapper>
            <img src='assets/images/line-image3.png' alt='line-image3' />
          </CenterImageWrapper>
          <LeftMonthWrapper>
            <MonthBoxWrapper>
              <MonthBox>
                <p>NOVEMBER 2O21</p>
                <img src='assets/images/right-arrow.png' alt='right-arrow' style={{ marginLeft: '15px' }} />
              </MonthBox>
              <p>Invasiton starting</p>
            </MonthBoxWrapper>
          </LeftMonthWrapper>
          <RightTextWrapper>
            <div>
              <TextWrappper>
                <img src='assets/images/dot.png' alt='dot' />
                <p>TV PUNKS INVAsION PLANS PREPRATIOn</p>
              </TextWrappper>
              <TextWrappper>
                <img src='assets/images/dot.png' alt='dot' />
                <p>TV PUNKS INVAsION PLANS PREPRATIOn</p>
              </TextWrappper>
              <TextWrappper>
                <img src='assets/images/dot.png' alt='dot' />
                <p>TV PUNKS INVAsION PLANS PREPRATIOn</p>
              </TextWrappper>
            </div>
          </RightTextWrapper>
        </MonthDescription>
        <MonthDescription>
          <CenterImageWrapper>
            <img src='assets/images/line-image4.png' alt='line-image4' />
          </CenterImageWrapper>
          <LeftTextWrapper>
            <div>
              <TextWrappper>
                <img src='assets/images/dot.png' alt='dot' />
                <p>TV PUNKS INVAsION PLANS PREPRATIOn</p>
              </TextWrappper>
              <TextWrappper>
                <img src='assets/images/dot.png' alt='dot' />
                <p>TV PUNKS INVAsION PLANS PREPRATIOn</p>
              </TextWrappper>
              <TextWrappper>
                <img src='assets/images/dot.png' alt='dot' />
                <p>TV PUNKS INVAsION PLANS PREPRATIOn</p>
              </TextWrappper>
            </div>
          </LeftTextWrapper>
          <RightMonthWrapper>
            <MonthBoxWrapper>
              <MonthBox>
                <p>DECEMBER 2O22</p>
                <img src='assets/images/right-arrow.png' alt='right-arrow' style={{ marginLeft: '15px' }} />
              </MonthBox>
              <p>Invasiton starting</p>
            </MonthBoxWrapper>
          </RightMonthWrapper>
        </MonthDescription>
        <MonthDescription>
          <CenterImageWrapper>
            <img src='assets/images/line-image5.png' alt='line-image5' />
          </CenterImageWrapper>
          <LeftMonthWrapper>
            <MonthBoxWrapper>
              <MonthBox>
                <p>JANUART 2O22</p>
                <img src='assets/images/right-arrow.png' alt='right-arrow' style={{ marginLeft: '15px' }} />
              </MonthBox>
              <p>Invasiton starting</p>
            </MonthBoxWrapper>
          </LeftMonthWrapper>
          <RightTextWrapper>
            <div>
              <TextWrappper>
                <img src='assets/images/dot.png' alt='dot' />
                <p>TV PUNKS INVAsION PLANS PREPRATIOn</p>
              </TextWrappper>
              <TextWrappper>
                <img src='assets/images/dot.png' alt='dot' />
                <p>TV PUNKS INVAsION PLANS PREPRATIOn</p>
              </TextWrappper>
              <TextWrappper>
                <img src='assets/images/dot.png' alt='dot' />
                <p>TV PUNKS INVAsION PLANS PREPRATIOn</p>
              </TextWrappper>
            </div>
          </RightTextWrapper>
        </MonthDescription>
        <FooterImageWrapper>
          <img src='assets/images/2022.png' alt='2022' />
          <FooterBannerWrapper>
            <FooterBanner>
              <p>
              The invading TV PUNKS want to capture the gaming Industry!
              </p> 
            </FooterBanner>
          </FooterBannerWrapper>
        </FooterImageWrapper>
      </RoadMapContainer>
      <GalleryWrapper>
        {imageList.map((item, i) => (
          <img src={item.url} alt={item.title} key={i} />
        ))}
      </GalleryWrapper>
    </>
  )
}

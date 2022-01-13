import React, { useEffect } from 'react'
import WebFont from "webfontloader";
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
  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          "Butcherman",
          "Fuzzy Bubbles",
          "Slackey",
          "Lobster",
          "Secular One",
          "VT323",
          "Press Start 2P",
        ],
      },
    });
  }, []);

  return (
    <>
      <RoadMapContainer id='roadmap' style={{fontFamily: 'VT323'}}>
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
          <LeftMonthWrapper>
            <MonthBoxWrapper>
              <MonthBox>
                <p>Stage 1</p>                                
              </MonthBox>
              <p>Invasiton starting</p>
            </MonthBoxWrapper>
          </LeftMonthWrapper>
          <RightTextWrapper>
            <div>
              <TextWrappper>
                <img src='assets/images/dot.png' alt='dot' />
                <p>Create twitter, tease those who follow about stealth drop </p>
              </TextWrappper>              
            </div>
          </RightTextWrapper>
        </MonthDescription>
        <MonthDescription>          
          <LeftTextWrapper>
            <div>
              <TextWrappper>
                <img src='assets/images/dot.png' alt='dot' />
                <p>Launch giveaway of 1 eth, give 24 hrs warning for stealth drop.</p>
              </TextWrappper>              
            </div>
          </LeftTextWrapper>
          <RightMonthWrapper>
            <MonthBoxWrapper>
              <MonthBox>
                <p>Stage 2</p>              
              </MonthBox>
              <p>Invasiton starting</p>
            </MonthBoxWrapper>
          </RightMonthWrapper>
        </MonthDescription>
        <MonthDescription>          
          <LeftMonthWrapper>
            <MonthBoxWrapper>
              <MonthBox>
                <p>Stage 3</p>              
              </MonthBox>
              <p>Invasiton starting</p>
            </MonthBoxWrapper>
          </LeftMonthWrapper>
          <RightTextWrapper>
            <div>
              <TextWrappper>
                <img src='assets/images/dot.png' alt='dot' />
                <p>Release stealth mint with a tweet one hour prior, alerting everybody (first 500 mints will be free!).</p>
              </TextWrappper>              
            </div>
          </RightTextWrapper>
        </MonthDescription>
        <MonthDescription>          
          <LeftTextWrapper>
            <div>
              <TextWrappper>
                <img src='assets/images/dot.png' alt='dot' />
                <p>Launch Tv Punks!</p>
              </TextWrappper>              
            </div>
          </LeftTextWrapper>
          <RightMonthWrapper>
            <MonthBoxWrapper>
              <MonthBox>
                <p>Stage 4</p>              
              </MonthBox>
              <p>Invasiton starting</p>
            </MonthBoxWrapper>
          </RightMonthWrapper>
        </MonthDescription>
        <MonthDescription>          
          <LeftMonthWrapper>
            <MonthBoxWrapper>
              <MonthBox>
                <p>Stage 5</p>              
              </MonthBox>
              <p>Invasiton starting</p>
            </MonthBoxWrapper>
          </LeftMonthWrapper>
          <RightTextWrapper>
            <div>
              <TextWrappper>
                <img src='assets/images/dot.png' alt='dot' />
                <p>Create discord, and form a community! </p>
              </TextWrappper>              
            </div>
          </RightTextWrapper>          
        </MonthDescription>
        <MonthDescription>          
          <LeftTextWrapper>
            <div>
              <TextWrappper>
                <img src='assets/images/dot.png' alt='dot' />
                <p>More eth giveaways to punks holders!</p>
              </TextWrappper>              
            </div>
          </LeftTextWrapper>
          <RightMonthWrapper>
            <MonthBoxWrapper>
              <MonthBox>
                <p>Stage 6</p>              
              </MonthBox>
              <p>Invasiton starting</p>
            </MonthBoxWrapper>
          </RightMonthWrapper>
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

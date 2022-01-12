import styled from 'styled-components'

export const FaqContainer = styled.div`
  background: linear-gradient(180deg, #6BCFFF 0%, #9CDFFF 100%);
  padding: 25px 25px 0 25px;

  > h1 {
    font-weight: bold;
    font-size: 50px;
    color: #000000;
    margin: 0;
    text-transform: uppercase;

    @media (min-width: 993px) {
      font-size: 72px;
    }

    @media (min-width: 1440px) {
      font-size: 96.2558px;
    }
  }

  @media (min-width: 993px) {
    padding: 30px 85px 0 85px;
  }
`

export const TextBox = styled.div`
  background: #FFFDEB;
  border-radius: 51px;
  padding: 33px 27px;
  margin: 25px 0;

  > p {
    font-size: 25px;
    color: #000000;
    margin: 0;

    @media (min-width: 993px) {
      font-size: 32px;
    }
    @media (min-width: 1440px) {
      font-size: 32px;
      font-size: 43.5653px;
    }

    &:first-child {
      margin-bottom: 20px;
    }

    span {
      font-weight: bold;
    }
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 162px;
    min-width: 162px;
  }
`
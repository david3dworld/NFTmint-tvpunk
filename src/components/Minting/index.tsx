import React from 'react'
import {
  Container,
  HeroContainer,
  HeroLeftContainer,
  Button,
  MintButtonContainer,
  MainContentContainer,
  ContentWrapper,
  BottomTextContainer
} from './styles'

export const Minting = () => {
  return (
    <Container bgimage='/assets/images/minting-background.png'>
      <HeroContainer>
        <div>
          <MintButtonContainer>
            <div className='image-container'>
              <img src='/assets/images/minting-1.png' alt='' />
              <img src='/assets/images/minting-2.png' alt='' />
              <img src='/assets/images/minting-3.png' alt='' />
              <img src='/assets/images/minting-4.png' alt='' />
              <div>
                <img src='/assets/images/cat_shiluette.png' alt='' />
                <img src='/assets/images/question.png' alt='' />
              </div>
            </div>
            <Button>
              Mint
            </Button>
          </MintButtonContainer>
          <p>Max 20 per stansaction.Need more? Just repeat</p>
          <h2>230<span>/3000 Sold</span></h2>
        </div>
        <HeroLeftContainer>
          <div>
            <h2>Price</h2>
            <div>
              <span>0.05</span>
              <span> + </span>
              <span>gas fee</span>
            </div>
          </div>
          <div>
            <h2>Remining Kitties</h2>
            <div>
              <span>2391</span>
            </div>
          </div>
        </HeroLeftContainer>
      </HeroContainer>
      <MainContentContainer>
        <h1>HOW TO MINT</h1>
        <ContentWrapper>
          <div>
            <div>
              <img src='/assets/images/dot.png' alt='' />
              <p>Join our Discord</p>
            </div>
            <div>
              <img src='/assets/images/dot.png' alt='' />
              <p>When the sale starts, you will see a “Connect Wallet” button at the top of our website. Connect your Phantom, Sollet or Solflare wallet.</p>
            </div>
            <div>
              <img src='/assets/images/dot.png' alt='' />
              <p>When your wallet is successfully connected, “Connect Wallet” button will change to the “Mint” button. Click “Mint” button. Please make sure that you have enough SOL on your wallet balance.</p>
            </div>
            <div>
              <img src='/assets/images/dot.png' alt='' />
              <p>Approve transaction and wait a bit until it wiil be confirmed.</p>
            </div>
            <div>
              <img src='/assets/images/dot.png' alt='' />
              <p>Congratulations! You can find your Shiba Family collectibles by clicking “Your Collectibles” in Phantom Wallet.</p>
            </div>
          </div>
          <div>
            <img src='/assets/images/SolKittie_0094.png' alt='' />
          </div>
        </ContentWrapper>
      </MainContentContainer>
      <BottomTextContainer>
        <p>Share your NFT in Twitter, Discord and other social networks. Don’t forget to add tags:</p>
        <p>#SolKitties #NFT #SOL</p>
      </BottomTextContainer>
    </Container>
  )
}

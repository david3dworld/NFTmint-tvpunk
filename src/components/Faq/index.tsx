import React from 'react'
import {
  FaqContainer,
  TextBox,
  ImageWrapper
} from './styles'

export const Faq = () => {
  return (
    <FaqContainer id='faq'>
      <h1>Faq</h1>
      <TextBox>
        <p><span>Q:</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
        <p><span>A:</span> 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
      </TextBox>
      <TextBox>
        <p><span>Q:</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
        <p><span>A:</span> 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
      </TextBox>
      <TextBox>
        <p><span>Q:</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
        <p><span>A:</span> 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
      </TextBox>
      <ImageWrapper>
        <img src='assets/images/faq.png' alt='faq' />
      </ImageWrapper>
    </FaqContainer>
  )
}

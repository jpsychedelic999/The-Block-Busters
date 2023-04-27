import React from 'react'
import Link from 'gatsby-link'
import '/Users/joshpichardo/Documents/my-app/src/layouts/index.css'
import Card from '../components/card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
import styled from 'styled-components';

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`


const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
      <h1>The Block-Busters</h1>
      <p>Welcome to the World's best Web 3 streaming platform where you the user has full control. Any movie or video at your fingertips with a click of a button.</p>

<Wave />
      </div>
    </div>
    <div className="Cards">
    <h2>The Block-Busters Selction</h2>
    <div className="CardGroup">
    <Card 
      title="Parasite (2019):"
      text="This South Korean black comedy thriller"
      image={require('../images/images/wallpaper.jpg')} />
    <Card 
      title="La La Land (2016):"
      text="A romantic musical film directed by Damien Chazelle"
      image={require('../images/images/wallpaper2.jpg')} />
    <Card 
      title="Get Out (2017):"
      text="Directed by Jordan Peele, this horror film uses elements of social satire"
      image={require('../images/images/wallpaper3.jpg')} />
    <Card 
      title="Mad Max: Fury Road (2015):"
      text="Directed by George Miller, this action-packed, post-apocalyptic film"
      image={require('../images/images/wallpaper4.jpg')} />
     </div>
    </div>
    <Section
  image={require('../images/images/space2.jpg')}
  logo={require('../images/images/orionx1.svg')}
  title="About The Block-Busters" 
  text="We aim to give you the best service possible. Serve the web for movies like never before." />
  <SectionCaption>The Block-Busters Catalog</SectionCaption>
  <SectionCellGroup>
    {staticdata.cells.map(cell =>(
    <Cell 
      title={cell.title}
      image={cell.image} />
  ))}
  </SectionCellGroup>
  </div>
)

export default IndexPage

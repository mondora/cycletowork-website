import React from "react"

import { graphql, useStaticQuery, Link } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Markdown from "../components/markdown"
import Footer from "../components/footer"
import Carousel from "../components/carousel"

const ContentWrapper = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 48px auto 120px auto;
  @media (max-width: 640px) {
    width: 100%;
  }
`

const AppWrapper = styled.div`
  width: fit-content;
  margin: auto;
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const AppLogo = styled(GatsbyImage)`
  border-radius: 16px;
  margin: 16px auto;
`
const AppTitle = styled.h1`
  margin: 8px 0;
`

const AppLink = styled.a`
  color: #01875f;
  text-decoration: none;
`

const ImageContainer = styled.div`
  padding: 16px;
  text-align: center;
`

const StyledLink = styled(Link)`
  color: #01875f;
  padding: 16px;
  font-size: 2em;
  text-decoration: none;
  font-weight: bold;
  display: block;
`

const DownloadButtonContainer = styled.div`
  display: grid;
  width: 100%;
  margin-top: 24px;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const Homepage = () => {
  const { contentfulHomePage } = useStaticQuery(graphql`
    query {
      contentfulHomePage {
        title
        appName
        appDeveloper {
          text
          url
        }
        appLogo {
          title
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
        screenshots {
          id
          title
          gatsbyImageData(width: 200, placeholder: BLURRED)
        }
        description {
          childMarkdownRemark {
            htmlAst
          }
        }
        privacyLink {
          text
          url
        }
        rulesLink {
          text
          url
        }
        downloadLinks {
          id
          url
          iconImage {
            title
            gatsbyImageData(width: 200, placeholder: BLURRED)
          }
        }
        footer {
          childMarkdownRemark {
            htmlAst
          }
        }
      }
    }
  `)
  return (
    <ContentWrapper>
      <AppWrapper>
        <AppLogo
          height={20}
          image={contentfulHomePage.appLogo.gatsbyImageData}
          alt={contentfulHomePage.appLogo.title}
        />
        <div>
          <AppTitle>{contentfulHomePage.appName}</AppTitle>
          <AppLink target={"_blank"} href={contentfulHomePage.appDeveloper.url}>
            {contentfulHomePage.appDeveloper.text}
          </AppLink>
        </div>
      </AppWrapper>
      <Carousel>
        {contentfulHomePage.screenshots.map((image) => (
          <ImageContainer key={image.id}>
            <GatsbyImage
              objectFit={"contain"}
              image={image.gatsbyImageData}
              alt={image.title}
            />
          </ImageContainer>
        ))}
      </Carousel>
      <Markdown
        data={contentfulHomePage.description.childMarkdownRemark.htmlAst}
      />
      <StyledLink to={contentfulHomePage.privacyLink.url}>
        {contentfulHomePage.privacyLink.text}
      </StyledLink>
      <StyledLink to={contentfulHomePage.rulesLink.url}>
        {contentfulHomePage.rulesLink.text}
      </StyledLink>
      <DownloadButtonContainer>
        {contentfulHomePage.downloadLinks.map((download) => (
          <div key={download.id}>
            <a href={download.url} target="_blank" rel="noreferrer">
              <GatsbyImage
                image={download.iconImage.gatsbyImageData}
                alt={download.iconImage.title}
              />
            </a>
          </div>
        ))}
      </DownloadButtonContainer>
      <Footer data={contentfulHomePage.footer.childMarkdownRemark.htmlAst} />
    </ContentWrapper>
  )
}

export default Homepage

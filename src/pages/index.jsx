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
          <GatsbyImage
            key={image.id}
            height={20}
            image={image.gatsbyImageData}
            alt={image.title}
          />
        ))}
      </Carousel>
      <Markdown
        data={contentfulHomePage.description.childMarkdownRemark.htmlAst}
      />
      <Link to={contentfulHomePage.privacyLink.url}>
        {contentfulHomePage.privacyLink.text}
      </Link>
      <Link to={contentfulHomePage.rulesLink.url}>
        {contentfulHomePage.rulesLink.text}
      </Link>
      <Footer data={contentfulHomePage.footer.childMarkdownRemark.htmlAst} />
    </ContentWrapper>
  )
}

export default Homepage

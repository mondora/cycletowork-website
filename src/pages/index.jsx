import React from "react"

import { graphql, useStaticQuery, Link } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Markdown from "../components/markdown"

const AppWrapper = styled.div``

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
          gatsbyImageData(width: 200, placeholder: BLURRED)
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
    <>
      <AppWrapper>
        <div>{contentfulHomePage.appName}</div>
        <a href={contentfulHomePage.appDeveloper.url}>
          {contentfulHomePage.appDeveloper.text}
        </a>
        <GatsbyImage
          height={20}
          image={contentfulHomePage.appLogo.gatsbyImageData}
          alt={contentfulHomePage.appLogo.title}
        />
      </AppWrapper>
      {contentfulHomePage.screenshots.map((image) => (
        <GatsbyImage
          key={image.id}
          height={20}
          image={image.gatsbyImageData}
          alt={image.title}
        />
      ))}
      <Markdown
        data={contentfulHomePage.description.childMarkdownRemark.htmlAst}
      />
      <Link to={contentfulHomePage.privacyLink.url}>
        {contentfulHomePage.privacyLink.text}
      </Link>
      <Link to={contentfulHomePage.rulesLink.url}>
        {contentfulHomePage.rulesLink.text}
      </Link>
      <Markdown data={contentfulHomePage.footer.childMarkdownRemark.htmlAst} />
    </>
  )
}

export default Homepage

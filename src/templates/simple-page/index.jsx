import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import styled from "styled-components"

import Markdown from "../../components/markdown"

export const pageQuery = graphql`
  query ($slug: String!) {
    contentfulSimplePage(slug: { eq: $slug }) {
      node_locale
      pageName
      content {
        childMarkdownRemark {
          htmlAst
        }
      }
    }
  }
`

const Container = styled.div`
  width: 100%;
  font-family: "Lato";
  font-style: normal;
  box-sizing: border-box;
  max-width: 768px;
  margin: auto;
  padding: 10px;
`

const SimplePage = ({ data: { contentfulSimplePage } }) => {
  return (
    <Container>
      <Markdown
        data={contentfulSimplePage.content.childMarkdownRemark.htmlAst}
      />
    </Container>
  )
}

SimplePage.propTypes = {
  data: PropTypes.shape({
    contentfulSimplePage: PropTypes.shape({
      node_locale: PropTypes.string.isRequired,
      pageName: PropTypes.string.isRequired,
      content: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
}

export default SimplePage

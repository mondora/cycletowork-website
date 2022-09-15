import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

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

const SimplePage = ({ data: { contentfulSimplePage } }) => {
  return (
    <>
      <Markdown
        data={contentfulSimplePage.content.childMarkdownRemark.htmlAst}
      />
    </>
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

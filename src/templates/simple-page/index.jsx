import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

export const pageQuery = graphql`
  query ($slug: String!) {
    contentfulSimplePage(slug: { eq: $slug }) {
      node_locale
      pageName
    }
  }
`

const SimplePage = ({ data: { contentfulSimplePage } }) => {
  return <h1>{contentfulSimplePage.pageName}</h1>
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

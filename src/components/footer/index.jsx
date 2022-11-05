import React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"

import Markdown from "../markdown"

const FooterContainer = styled.div`
  background-color: #20272f;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  padding-top: 20px;
`

const Footer = ({ data }) => {
  return (
    <FooterContainer>
      <Markdown data={data} />
    </FooterContainer>
  )
}

Footer.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Footer

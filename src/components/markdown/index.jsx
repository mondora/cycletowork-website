import React from "react"

import PropTypes from "prop-types"
import rehypeReact from "rehype-react"
import styled from "styled-components"

import Link from "../link"

const PrimaryTitle = styled.h1`
  font-weight: 400;
  font-size: 2em;

  @media (min-width: 960px) {
    font-size: 3em;
  }
`

const SecondaryTitle = styled.h2`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.75em;
  font-weight: 600;
  margin: calc(1.25em + 0.15vw) 0 calc(0.75em + 0.15vw);

  @media (min-width: 960px) {
    font-size: 2em;
  }
`

const TertiaryTitle = styled.h3`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.5em;
  font-weight: 600;
  margin: calc(1em + 0.15vw) 0 calc(0.75em + 0.15vw);

  @media (min-width: 960px) {
    font-size: 1.5em;
  }
`

const Paragraph = styled.p`
  font-size: calc(1em + 0.15vw);
  line-height: 1.7em;
  margin: 0 0 1em;
  color: var(--text-gray);
`

const Bold = styled.strong`
  color: var(--text-dark-black);
`

const ListElement = styled.li`
  font-size: calc(1em + 0.15vw);
  line-height: 1.7em;
  color: var(--text-gray);
`

const Underline = styled.span`
  text-decoration: underline;
`

const BlockQuote = styled.blockquote`
  border: 1px solid rgb(32, 39, 47);
  padding: 20px 20px 0 20px;
  font-size: calc(1em + 0.15vw);
  font-family: "Playfair Display", serif;
  font-weight: 400;
`

const Table = styled.table`
  font-size: calc(1em + 0.15vw);
  margin: 0 0 2em;
  border-collapse: collapse;
  overflow-x: auto;
  th {
    padding: 1em;
    text-align: left;
    border: 1px solid rgb(32, 39, 47);
  }

  td {
    padding: 1em;
    white-space: nowrap;
    border: 1px solid rgb(32, 39, 47);
  }
`
const Wrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`

const Wrapped = ({ children }) => {
  return (
    <Wrapper>
      <Table>{children}</Table>
    </Wrapper>
  )
}

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: PrimaryTitle,
    h2: SecondaryTitle,
    h3: TertiaryTitle,
    p: Paragraph,
    strong: Bold,
    a: Link,
    li: ListElement,
    blockquote: BlockQuote,
    del: Underline,
    table: Wrapped,
  },
}).Compiler

const Markdown = ({ data }) => <>{renderAst(data)}</>

Markdown.propTypes = {
  data: PropTypes.object,
}

export default Markdown

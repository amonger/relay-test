import { useFragment } from "react-relay"
import { graphql } from "relay-runtime"
import { Book_data$key } from "../../__generated__/Book_data.graphql"


const queryDef = graphql`
  fragment Book_data on Book {
    author
  }
`
export default function Book ({queryRef}: {queryRef: Book_data$key}) {
  const {author } = useFragment<Book_data$key>(queryDef, queryRef)
  return <>
     {author}
  </>
}
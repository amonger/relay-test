import { useEffect } from "react"
import { useQueryLoader } from "react-relay"
import { graphql } from "relay-runtime"
import { BooksQuery } from "../../__generated__/BooksQuery.graphql"

const queryDef = graphql`
  query BooksQuery {
    books {
      edges{
        node {
          id
          author
        }
      }
    }
  }
`


export default function Books () {
  const [queryRef, loadQuery, disposeQuery] = useQueryLoader<BooksQuery>(queryDef)

  useEffect(() => {
    loadQuery({})
  })

  return <div>
    Books
  </div>
}
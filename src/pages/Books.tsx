import { useQueryLoader } from "react-relay"
import { graphql } from "relay-runtime"
import { BooksQuery } from "../../__generated__/BooksQuery.graphql"

const queryDef = graphql`
  query BooksQuery {
    books {
      id
      author
    }
  }
`

export default function Books () {
  const books = useQueryLoader<BooksQuery>(queryDef)

  return <div>
    {JSON.stringify(books)}
  </div>
}
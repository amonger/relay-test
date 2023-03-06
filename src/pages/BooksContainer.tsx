import Book from "@/components/Book"
import { useEffect } from "react"
import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from "react-relay"
import { graphql } from "relay-runtime"
import { BooksContainerQuery } from "../../__generated__/BooksContainerQuery.graphql"
import Books from "./Books"

export const booksQueryDef = graphql`
  query BooksContainerQuery {
    books {
      ...Books_BookConnection
    }
  }
`

export default function BooksContainer () {
  const [queryRef, loadQuery] = useQueryLoader<BooksContainerQuery>(booksQueryDef)

  useEffect(() => {
    loadQuery({})
  }, [])

  if (queryRef == null) {
    return <>Loading</>
  }

  return <BooksComponent queryRef={queryRef} />
}

function BooksComponent({queryRef}: {queryRef: PreloadedQuery<BooksContainerQuery>}) {
  const data = usePreloadedQuery(booksQueryDef, queryRef)
  
  return <Books queryRef={data.books!} />
}
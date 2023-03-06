import Book from "@/components/Book"
import { useEffect } from "react"
import { useFragment, useQueryLoader } from "react-relay"
import { graphql } from "relay-runtime"
import { Books_BookConnection$key } from "../../__generated__/Books_BookConnection.graphql"

const queryDef = graphql`
  fragment Books_BookConnection on BookConnection {
    edges {
      node {
        ...Book_data
      }
    }
  }
`

export default function Books ({queryRef}: {queryRef: Books_BookConnection$key}) {
  const data = useFragment<Books_BookConnection$key>(queryDef, queryRef)

  if (queryRef == null) {
    return <>Loading</>
  }


  return <div>
    {data.edges?.map((bookRef, i) => {
      if (bookRef !== null) {
        return <Book key={i} queryRef={bookRef.node!} />
      }
    })}
  </div>
}
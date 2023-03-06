/**
 * @generated SignedSource<<f17fe566267b64900920dfe9df48b578>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BooksContainerQuery$variables = {};
export type BooksContainerQuery$data = {
  readonly books: {
    readonly " $fragmentSpreads": FragmentRefs<"Books_BookConnection">;
  } | null;
};
export type BooksContainerQuery = {
  response: BooksContainerQuery$data;
  variables: BooksContainerQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BooksContainerQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "BookConnection",
        "kind": "LinkedField",
        "name": "books",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Books_BookConnection"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BooksContainerQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "BookConnection",
        "kind": "LinkedField",
        "name": "books",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BookEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Book",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "author",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f7c887b980d961a2abc7117ce481d9f1",
    "id": null,
    "metadata": {},
    "name": "BooksContainerQuery",
    "operationKind": "query",
    "text": "query BooksContainerQuery {\n  books {\n    ...Books_BookConnection\n  }\n}\n\nfragment Book_data on Book {\n  author\n}\n\nfragment Books_BookConnection on BookConnection {\n  edges {\n    node {\n      ...Book_data\n    }\n  }\n}\n"
  }
};

(node as any).hash = "9c50bd2addb3fab9c918b9a513220c87";

export default node;

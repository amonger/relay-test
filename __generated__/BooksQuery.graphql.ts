/**
 * @generated SignedSource<<16df3f8a106c0e814202b88d8a39c01d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type BooksQuery$variables = {};
export type BooksQuery$data = {
  readonly books: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly author: string | null;
        readonly id: string | null;
      } | null;
    } | null> | null;
  } | null;
};
export type BooksQuery = {
  response: BooksQuery$data;
  variables: BooksQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
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
                "name": "id",
                "storageKey": null
              },
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BooksQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BooksQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "e6171ee1ffd6069b33215627dc541ad2",
    "id": null,
    "metadata": {},
    "name": "BooksQuery",
    "operationKind": "query",
    "text": "query BooksQuery {\n  books {\n    edges {\n      node {\n        id\n        author\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7675848a40ac231873f1b9ab86bf47af";

export default node;

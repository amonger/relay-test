/**
 * @generated SignedSource<<b612b8920913ea05f7c1748742e0364d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type BooksQuery$variables = {};
export type BooksQuery$data = {
  readonly books: ReadonlyArray<{
    readonly title: string | null;
  } | null> | null;
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
    "concreteType": "Book",
    "kind": "LinkedField",
    "name": "books",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
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
    "cacheID": "d740c73db79b9ae420999a9845ac6299",
    "id": null,
    "metadata": {},
    "name": "BooksQuery",
    "operationKind": "query",
    "text": "query BooksQuery {\n  books {\n    title\n  }\n}\n"
  }
};
})();

(node as any).hash = "4e150baa36352c00149a195f3bdc3960";

export default node;

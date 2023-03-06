/**
 * @generated SignedSource<<2f0b32b87814bb0d0154e704aa461eae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Books_BookConnection$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly " $fragmentSpreads": FragmentRefs<"Book_data">;
    } | null;
  } | null> | null;
  readonly " $fragmentType": "Books_BookConnection";
};
export type Books_BookConnection$key = {
  readonly " $data"?: Books_BookConnection$data;
  readonly " $fragmentSpreads": FragmentRefs<"Books_BookConnection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Books_BookConnection",
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
              "args": null,
              "kind": "FragmentSpread",
              "name": "Book_data"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "BookConnection",
  "abstractKey": null
};

(node as any).hash = "cc28bac6e091fb612dedce6640550e08";

export default node;

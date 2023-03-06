/**
 * @generated SignedSource<<1b0d602a818e400f61d50891173a5909>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Book_data$data = {
  readonly author: string | null;
  readonly " $fragmentType": "Book_data";
};
export type Book_data$key = {
  readonly " $data"?: Book_data$data;
  readonly " $fragmentSpreads": FragmentRefs<"Book_data">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Book_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "author",
      "storageKey": null
    }
  ],
  "type": "Book",
  "abstractKey": null
};

(node as any).hash = "ef9f4744b9246e97790c54ef20d53dd4";

export default node;

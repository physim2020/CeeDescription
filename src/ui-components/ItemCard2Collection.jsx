/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Home } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ItemCard2 from "./ItemCard2";
import { Collection } from "@aws-amplify/ui-react";
export default function ItemCard2Collection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Home,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "ItemCard2Collection")}
    >
      {(item, index) => (
        <ItemCard2
          home={item}
          height="auto"
          width="auto"
          margin="4px 4px 4px 4px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ItemCard2>
      )}
    </Collection>
  );
}

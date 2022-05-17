/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { SortDirection } from "@aws-amplify/datastore";
import { Home } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import StandardCard from "./StandardCard";
import { Collection } from "@aws-amplify/ui-react";
export default function StandardCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = {
    sort: (s) => s.createdAt(SortDirection.DESCENDING),
  };
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Home,
    pagination: itemsPagination,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      direction="row"
      alignItems="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "StandardCardCollection")}
    >
      {(item, index) => (
        <StandardCard
          height="auto"
          width="auto"
          margin="10px 10px 10px 10px"
          home={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></StandardCard>
      )}
    </Collection>
  );
}

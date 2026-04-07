import SafeView from "@/components/SafeView";
import SearchHeader from "@/components/SearchHeader";
import SearchResults from "@/components/SearchResults";
import React from "react";

const SearchScreen = () => {
  return (
    <SafeView header={<SearchHeader />}>
      <SearchResults />
    </SafeView>
  );
};

export default SearchScreen;

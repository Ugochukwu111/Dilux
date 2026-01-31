import { ListingCard } from "../Components/ListingCard";
import { landListings } from "../../content";
import { FilterListings } from "../Components/FilterListings";
import { Footer } from "../Components/Footer";
import { Helmet } from "react-helmet-async";
import { WhatsAppIcon } from "../Components/WhatsAppIcon";

import { useSearchParams } from "react-router-dom";

import { useState, useEffect } from "react";

export function ListingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredLandListings, setFilteredLandListings] =
    useState(landListings);

  let filters = {
    size: searchParams.get("size") || "",
    price: searchParams.get("price") || "",
    location: searchParams.get("location") || "",
  };

  useEffect(() => {
    let filtered = landListings;

    if (filters.size) {
      filtered = filtered.filter((l) => l.size === filters.size);
    }

    if (filters.location) {
      filtered = filtered.filter((l) => l.location === filters.location);
    }

    if (filters.price) {
      const maxPrice = Number(filters.price);
      filtered = filtered.filter((l) => l.newPrice <= maxPrice);
    }

    setFilteredLandListings(filtered);
  }, [filters.size, filters.location, filters.price]);

  return (
    <div>

      <Helmet>
        <title>Verified Land for Sale in Edo State | Dilux Properties</title>
        <meta
          name="description"
          content="Explore verified land for sale in Edo State. All Dilux properties come with approved documents including C of O, survey plans, and community approvals."
        />
        <meta
          name="keywords"
          content="land for sale in Edo State, buy land Edo State Nigeria, verified land Edo, land with C of O Edo State, Dilux land listings"
        />
      </Helmet>
      <WhatsAppIcon/>

      <br />
      <br />
      <br />
      <br />
      <h1>Dilux Properties</h1>
      <FilterListings filters={filters} setSearchParams={setSearchParams} />
      <main className="container">
        {filteredLandListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

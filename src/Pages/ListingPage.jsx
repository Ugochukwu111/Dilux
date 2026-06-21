import { ListingCard } from "../Components/ListingCard";
import { landListings } from "../content";
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
        <link rel="canonical" href="https://diluxproperties.com.ng/properties" />
        <meta
          name="description"
          content="Explore verified land for sale in Edo State. All Dilux properties come with approved documents including C of O, survey plans, and community approvals."
        />
        <meta
          name="keywords"
          content="land for sale in Edo State, buy land Edo State Nigeria, verified land Edo, land with C of O Edo State, Dilux land listings"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Verified Land for Sale in Edo State | Dilux Properties" />
        <meta property="og:description" content="Explore verified land for sale in Edo State with full documentation and transparent processes." />
        <meta property="og:url" content="https://diluxproperties.com.ng/properties" />
        <meta property="og:image" content="https://diluxproperties.com.ng/dilux-favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Verified Land for Sale in Edo State | Dilux Properties" />
        <meta name="twitter:description" content="Explore verified land for sale in Edo State with full documentation and transparent processes." />
        <meta name="twitter:image" content="https://diluxproperties.com.ng/dilux-favicon.png" />
        <script type="application/ld+json">{`{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "url": "https://diluxproperties.com.ng/properties",
  "name": "Dilux Properties - Listings",
  "description": "Verified land listings in Edo State with documentation and secure purchase process."
}`}</script>
      </Helmet>
      <WhatsAppIcon/>

      <br />
      <br />
      <br />
      <h1 className="text-center">Dilux Properties</h1>
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

import { ListingCard } from "../Components/ListingCard";
import { landListings } from "../../content";
import { FilterListings } from "../Components/FilterListings";
import { Footer } from "../Components/Footer";

import { useSearchParams, } from "react-router-dom";

import { useState , useEffect} from "react"; 



export function ListingPage() {

  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredLandListings, setFilteredLandListings] = useState(landListings);

    let filters = {
    size: searchParams.get("size") || "",
    price: searchParams.get("price") || "",
    location: searchParams.get("location") || "",
  };


   useEffect(() => {
    let filtered = landListings;

    if (filters.size) {
      filtered = filtered.filter(l => l.size === filters.size);
    }

    if (filters.location) {
      filtered = filtered.filter(l => l.location === filters.location);
    }

    if (filters.price) {
      const maxPrice = Number(filters.price);
      filtered = filtered.filter(l => l.newPrice <= maxPrice);
    }

    setFilteredLandListings(filtered);
  }, [filters.size, filters.location, filters.price]);

  


  return(
      <div>
        <br /><br /><br /><br />
        <h1>Dilux Properties</h1>
        <FilterListings 
        filters={filters} 
        setSearchParams={setSearchParams}
        />
        <main className="container">
         
          {
              filteredLandListings.map((listing) => (
    <ListingCard key={listing.id} listing={listing} />
  ))
          }
          
        </main>
        <Footer/>
      </div>
  );
}
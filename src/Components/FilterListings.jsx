import * as Select from '@radix-ui/react-select';
import './FilterListings.css';
import { landListings } from '../../content';
import { ListFilter } from 'lucide-react';


const interval = 500_000;
const maxPrice = Math.max(...landListings.map(l => l.newPrice));



// Keep your SelectItem helper outside or at the top
const SelectItem = ({ children, value }) => (
  <Select.Item value={value} className="select-item">
    <Select.ItemText>{children}</Select.ItemText>
    <Select.ItemIndicator className="select-indicator">✓</Select.ItemIndicator>
  </Select.Item>
);

// This is the reusable block
const DiluxDropdown = ({ placeholder, options, value, onChange }) => (
  <div className="filter-item-container">
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger className="select-trigger">
        <Select.Value placeholder={placeholder} />
        <Select.Icon className="select-icon">▼</Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="select-content">
          <Select.Viewport className="select-viewport">
            {options.map((opt, index) => (
              <SelectItem key={opt.value + index} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  </div>
);


export function FilterListings({ filters, setSearchParams }) {

    const updateFilter = (key, value) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      value ? next.set(key, value) : next.delete(key);
      return next;
    });
  };

const propertySize = [...new Set(landListings.map(l => l.size))]
  .map(size => ({ label: size, value: size }));

const propertyLocation = [...new Set(landListings.map(l => l.location))]
  .map(location => ({ label: location, value: location }));

  const priceRanges = Array.from(
  { length: Math.ceil(maxPrice / interval) },
  (_, i) => {
    const price = (i + 1) * interval;
    return {
      label: `Under ₦${price.toLocaleString()}`,
      value: String(price),
    };
  }
);



  return (
    <div className="filter-bar-wrapper">
      {/* Property Type Select */}
      <DiluxDropdown 
        placeholder="Property Size"
        options={propertySize}
        value={filters.size}
        onChange={(val) => updateFilter("size", val)}
      />

      {/* Price Select */}
      <DiluxDropdown 
        placeholder="Price Range"
        options={priceRanges}
        value={filters.price}
        onChange={(val) => updateFilter("price", val)}
      />

      {/* Size Select */}
      <DiluxDropdown 
        placeholder="Location"
        options={propertyLocation} // etc
        value={filters.location}
        onChange={(val) => updateFilter("location", val)}
      />

      <button
       onClick={()=> setSearchParams({})} 
      >
        Clear Filters <ListFilter />
      </button>
    </div>
  );
}
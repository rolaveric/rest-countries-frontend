# First impression

Straight forward and flexible.

Due to time constraints at home, I'm going to try knock it out with what I know:

- Angular
- Flexbox
- font-awesome

If time permits I'd like to explore Vue and CSS Grids - maybe css variables for "dark mode".

Desktop vs mobile seems to be simple reactive design (ie. Media queries + grids)

# Component hierarchy

Common

- rc-header

Views

- rc-home-view (#!/)
  - rc-search-input
  - rc-region-filter
  - rc-country-cards
    - rc-country-card
- rc-detail-view (#!/countries/:id)
  - rc-back-button
  - rc-country-flag
  - rc-country-title
  - rc-country-details
  - rc-border-countries

# Styling

The style guide provided covers everything nicely.  
Most I'd do is change the "px" to "rem" for relative sizing, and setup variables (CSS or SCSS?) for colours and font-family.

I'll make use of Angular's emulated style encapsulation - I may regret this if I do attempt a Vue port, but it'll be a learning experience nonetheless.

# Accessibility

Proper use of ARIA attributes should be included to assist screen readers.  
Ability to "tab" focus on countries would also be beneficial for keyboard users.  
Static rendering for `<noscript>` and slower clients would be beneficial - also good for SEO (if site were publicly facing). Can be easily shoehorned with angular-universal. Unsure of options for React and Vue, but I'm confident they exist.

# Data

API docs: https://restcountries.eu/

The API comes with plenty of endpoints for retrieving the data in different ways.  
However each endpoint seems to always return the entire country record, rather then an id or reference. Meaning that with every call to these endpoints (such as on every keypress of the search bar) we are re-retrieving the same data over-and-over.  
As the dataset is only ~48.32kb, and the filter functions are very simple (`country.name.toLowerCase().includes(lowerCaseQuery) || country.altSpellings.some((altSpelling) => altSpelling.toLowerCase().includes(lowerCaseQuery))` and `country.region === selectedRegion`) it would make the most sense to simply use the `/all` endpoint to retrieve the whole dataset and process it locally.  
This is compounded by the fact that when we initially visit the home page, no filters are applied, so we must have retrieved all the countries anyway.

The API does have query-string parameters for filtering the fields per-country ( https://restcountries.eu/#filter-response ) but there doesn't appear to be any pagination parameters (eg. `?limit=10&index=30` - open issue: https://github.com/apilayer/restcountries/issues/54 ).

So the data handling should be fairly simple:

1. Retrieve all countries on load
2. Index countries for easy filtering (eg. Apply `toLowerCase()` to all queryable fields)
3. Create index functions for `byName()` and `byRegion()`
4. Create methods for applying selected filters.

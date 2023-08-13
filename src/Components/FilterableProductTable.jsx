import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

import { useState } from 'react'

export default function FilterableProductTable ({ products }) {
  const hasProducts = products.length > 0

  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)

  return (
    <section style={{ maxWidth: '320px', margin: '0 auto' }}>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={setFilterText} onInStockOnlyChange={setInStockOnly} />
      {
                hasProducts ? <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} /> : 'There is no products'
            }
    </section>
  )
}

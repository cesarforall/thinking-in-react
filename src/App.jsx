import './App.css'
import productResponse from './mocks/products'

import FilterableProductTable from './Components/FilterableProductTable'

export default function App () {
  const products = [...productResponse]

  return (
    <main style={{ display: 'flex', width: '100%', paddingTop: '5rem', placeItems: 'center' }}>
      <FilterableProductTable products={products} />
    </main>
  )
}

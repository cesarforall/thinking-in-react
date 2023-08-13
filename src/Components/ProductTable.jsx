import ProductRow from './ProductRow'
import ProductCategoryRow from './ProductCategoryRow'

export default function ProductTable ({ products, filterText, inStockOnly }) {
  const rows = []
  let lastCategory = null

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return
    }
    if (inStockOnly && !product.stocked) {
      return
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow category={product.category} key={product.category} />
      )
    }
    rows.push(
      <ProductRow product={product} key={product.name} />
    )
    lastCategory = product.category
  })

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th style={{ fontWeight: 'bold' }}>Name</th>
            <th style={{ fontWeight: 'bold' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </main>
  )
}

export default function ProductCategoryRow ({ category }) {
  return (
    <tr>
      <th colSpan='2' style={{ textAlign: 'center', fontWeight: 'bold' }}>
        {category}
      </th>
    </tr>
  )
}

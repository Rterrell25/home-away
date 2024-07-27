import PropertyCard from '@/components/card/PropertyCard'
import { PropertyCardProps } from '@/utils/types'

const PropertiesList = ({
  properties
}: {
  properties: PropertyCardProps[]
}) => {
  return (
    <section>
      {properties.map((property, index) => {
        return <PropertyCard key={property.id} property={property} />
      })}
    </section>
  )
}

export default PropertiesList

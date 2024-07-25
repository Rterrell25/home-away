'use client'
import { useState } from 'react'
import { amenities, Amenity } from '@/utils/amenities'
import { Checkbox } from '@/components/ui/checkbox'

const AmenitiesInput = ({ defaultValue }: { defaultValue?: Amenity[] }) => {
  const [selectedAmenities, setSelectedAmenities] = useState<Amenity[]>(
    defaultValue || amenities
  )

  const handleChange = (amenity: Amenity) => {
    setSelectedAmenities((prevState) => {
      return prevState.map((a) => {
        if (a.name === amenity.name) {
          return { ...a, selected: !a.selected }
        }

        return a
      })
    })
  }

  return (
    <section>
      <input
        type='hidden'
        name='amenities'
        value={JSON.stringify(selectedAmenities)}
      />

      <div className='grid grid-cols-2 gap-4'>
        {selectedAmenities.map((amenity, index) => {
          return (
            <div key={index} className='flex items-center space-x-2'>
              <Checkbox
                id={amenity.name}
                checked={amenity.selected}
                onCheckedChange={() => handleChange(amenity)}
              />
              <label
                htmlFor={amenity.name}
                className='text-sm font-medium leading-none capitalize flex gap-x-2 items-center'
              >
                {amenity.name} <amenity.icon className='w-4 h-4' />
              </label>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default AmenitiesInput

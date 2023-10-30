'use client'

import { StringUtils } from "@/utils/stringUtil";
import { Icon } from "@iconify/react/dist/iconify.js";

type AddressProps = AddressType;

const Address = ({uf, city, neighborhood}: AddressProps) => {
  const capitalizeNeighborMood = StringUtils.capitalizeFirstCharacterInText(neighborhood);
  const capitalizeCity = StringUtils.capitalizeFirstCharacterInName(city ?? "")
  const address = `${capitalizeNeighborMood} ${capitalizeCity} ${uf?.toUpperCase()}` 

  return (
    <div className="flex items-center gap-1 text-sm">
      <Icon icon="fluent:location-28-filled"/>
      <span>{address}</span>
    </div>
  )
} 

export default Address;
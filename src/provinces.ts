import nodeCountries from "node-countries";

export const getProvincName = () => {
  const provinces = nodeCountries.US.provinces;
  const foundProvince = provinces.find((p) => p.short === "CA");
  if (foundProvince) {
    return foundProvince.name;
  }
  return null;
};

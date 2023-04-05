import nodeCountries from "node-countries/build/index";

export const getProvincName = () => {
  const provinces = nodeCountries.default.US.provinces;
  const foundProvince = provinces.find((p) => p.short === "CA");
  if (foundProvince) {
    return foundProvince.name;
  }
  return null;
};

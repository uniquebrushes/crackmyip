import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type IpDetailsWhereInput = {
  id?: StringFilter;
  ipv4?: StringNullableFilter;
  ipv6?: StringNullableFilter;
  city?: StringNullableFilter;
  region?: StringNullableFilter;
  state?: StringNullableFilter;
  zipCode?: StringNullableFilter;
  country?: StringNullableFilter;
  isp?: StringNullableFilter;
  organization?: StringNullableFilter;
  asNumber?: StringNullableFilter;
  asName?: StringNullableFilter;
  timeZone?: StringNullableFilter;
  ipAddress?: StringNullableFilter;
  userAgent?: StringNullableFilter;
};

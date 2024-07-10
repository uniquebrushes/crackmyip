import { SortOrder } from "../../util/SortOrder";

export type IpDetailsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  ipv4?: SortOrder;
  ipv6?: SortOrder;
  city?: SortOrder;
  region?: SortOrder;
  state?: SortOrder;
  zipCode?: SortOrder;
  country?: SortOrder;
  isp?: SortOrder;
  organization?: SortOrder;
  asNumber?: SortOrder;
  asName?: SortOrder;
  timeZone?: SortOrder;
  ipAddress?: SortOrder;
  userAgent?: SortOrder;
};

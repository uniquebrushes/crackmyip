import { IpDetails as TIpDetails } from "../api/ipDetails/IpDetails";

export const IPDETAILS_TITLE_FIELD = "asName";

export const IpDetailsTitle = (record: TIpDetails): string => {
  return record.asName?.toString() || String(record.id);
};

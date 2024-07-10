export type IpDetails = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  ipv4: string | null;
  ipv6: string | null;
  city: string | null;
  region: string | null;
  state: string | null;
  zipCode: string | null;
  country: string | null;
  isp: string | null;
  organization: string | null;
  asNumber: string | null;
  asName: string | null;
  timeZone: string | null;
  ipAddress: string | null;
  userAgent: string | null;
};

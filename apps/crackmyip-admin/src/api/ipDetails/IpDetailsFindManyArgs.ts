import { IpDetailsWhereInput } from "./IpDetailsWhereInput";
import { IpDetailsOrderByInput } from "./IpDetailsOrderByInput";

export type IpDetailsFindManyArgs = {
  where?: IpDetailsWhereInput;
  orderBy?: Array<IpDetailsOrderByInput>;
  skip?: number;
  take?: number;
};

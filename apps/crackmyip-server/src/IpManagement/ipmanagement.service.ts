import { Injectable } from "@nestjs/common";
import { IpDetailsInput } from "../ipManagement/IpDetailsInput";
import { IpDetailsOutput } from "../ipManagement/IpDetailsOutput";

@Injectable()
export class IpManagementService {
  constructor() {}
  async FetchIpDetailsAndQuality(args: IpDetailsInput): Promise<IpDetailsOutput> {
    throw new Error("Not implemented");
  }
}

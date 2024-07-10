import * as graphql from "@nestjs/graphql";
import { IpDetailsInput } from "../ipManagement/IpDetailsInput";
import { IpDetailsOutput } from "../ipManagement/IpDetailsOutput";
import { IpManagementService } from "./ipmanagement.service";

export class IpManagementResolver {
  constructor(protected readonly service: IpManagementService) {}

  @graphql.Mutation(() => IpDetailsOutput)
  async FetchIpDetailsAndQuality(
    @graphql.Args()
    args: IpDetailsInput
  ): Promise<IpDetailsOutput> {
    return this.service.FetchIpDetailsAndQuality(args);
  }
}

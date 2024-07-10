import * as graphql from "@nestjs/graphql";
import { IpDetailsResolverBase } from "./base/ipDetails.resolver.base";
import { IpDetails } from "./base/IpDetails";
import { IpDetailsService } from "./ipDetails.service";

@graphql.Resolver(() => IpDetails)
export class IpDetailsResolver extends IpDetailsResolverBase {
  constructor(protected readonly service: IpDetailsService) {
    super(service);
  }
}

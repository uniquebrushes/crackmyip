import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IpDetailsService } from "./ipDetails.service";
import { IpDetailsControllerBase } from "./base/ipDetails.controller.base";

@swagger.ApiTags("ipDetails")
@common.Controller("ipDetails")
export class IpDetailsController extends IpDetailsControllerBase {
  constructor(protected readonly service: IpDetailsService) {
    super(service);
  }
}

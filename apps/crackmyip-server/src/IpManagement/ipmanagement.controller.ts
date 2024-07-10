import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { IpManagementService } from "./ipmanagement.service";
import { IpDetailsInput } from "../ipManagement/IpDetailsInput";
import { IpDetailsOutput } from "../ipManagement/IpDetailsOutput";

@swagger.ApiTags("ipManagements")
@common.Controller("ipManagements")
export class IpManagementController {
  constructor(protected readonly service: IpManagementService) {}

  @common.Post("/ip-details-and-quality")
  @swagger.ApiOkResponse({
    type: IpDetailsOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchIpDetailsAndQuality(
    @common.Body()
    body: IpDetailsInput
  ): Promise<IpDetailsOutput> {
        return this.service.FetchIpDetailsAndQuality(body);
      }
}

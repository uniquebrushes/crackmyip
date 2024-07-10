import { Module } from "@nestjs/common";
import { IpManagementService } from "./ipmanagement.service";
import { IpManagementController } from "./ipmanagement.controller";
import { IpManagementResolver } from "./ipmanagement.resolver";

@Module({
  controllers: [IpManagementController],
  providers: [IpManagementService, IpManagementResolver],
  exports: [IpManagementService],
})
export class IpManagementModule {}

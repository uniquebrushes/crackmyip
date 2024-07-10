import { Module } from "@nestjs/common";
import { IpDetailsModuleBase } from "./base/ipDetails.module.base";
import { IpDetailsService } from "./ipDetails.service";
import { IpDetailsController } from "./ipDetails.controller";
import { IpDetailsResolver } from "./ipDetails.resolver";

@Module({
  imports: [IpDetailsModuleBase],
  controllers: [IpDetailsController],
  providers: [IpDetailsService, IpDetailsResolver],
  exports: [IpDetailsService],
})
export class IpDetailsModule {}

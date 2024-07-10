import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IpDetailsServiceBase } from "./base/ipDetails.service.base";

@Injectable()
export class IpDetailsService extends IpDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

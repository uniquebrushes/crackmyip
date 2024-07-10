/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { IpDetailsService } from "../ipDetails.service";
import { IpDetailsCreateInput } from "./IpDetailsCreateInput";
import { IpDetails } from "./IpDetails";
import { IpDetailsFindManyArgs } from "./IpDetailsFindManyArgs";
import { IpDetailsWhereUniqueInput } from "./IpDetailsWhereUniqueInput";
import { IpDetailsUpdateInput } from "./IpDetailsUpdateInput";

export class IpDetailsControllerBase {
  constructor(protected readonly service: IpDetailsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: IpDetails })
  async createIpDetails(
    @common.Body() data: IpDetailsCreateInput
  ): Promise<IpDetails> {
    return await this.service.createIpDetails({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        ipv4: true,
        ipv6: true,
        city: true,
        region: true,
        state: true,
        zipCode: true,
        country: true,
        isp: true,
        organization: true,
        asNumber: true,
        asName: true,
        timeZone: true,
        ipAddress: true,
        userAgent: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [IpDetails] })
  @ApiNestedQuery(IpDetailsFindManyArgs)
  async ipDetailsItems(@common.Req() request: Request): Promise<IpDetails[]> {
    const args = plainToClass(IpDetailsFindManyArgs, request.query);
    return this.service.ipDetailsItems({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        ipv4: true,
        ipv6: true,
        city: true,
        region: true,
        state: true,
        zipCode: true,
        country: true,
        isp: true,
        organization: true,
        asNumber: true,
        asName: true,
        timeZone: true,
        ipAddress: true,
        userAgent: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: IpDetails })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async ipDetails(
    @common.Param() params: IpDetailsWhereUniqueInput
  ): Promise<IpDetails | null> {
    const result = await this.service.ipDetails({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        ipv4: true,
        ipv6: true,
        city: true,
        region: true,
        state: true,
        zipCode: true,
        country: true,
        isp: true,
        organization: true,
        asNumber: true,
        asName: true,
        timeZone: true,
        ipAddress: true,
        userAgent: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: IpDetails })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateIpDetails(
    @common.Param() params: IpDetailsWhereUniqueInput,
    @common.Body() data: IpDetailsUpdateInput
  ): Promise<IpDetails | null> {
    try {
      return await this.service.updateIpDetails({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          ipv4: true,
          ipv6: true,
          city: true,
          region: true,
          state: true,
          zipCode: true,
          country: true,
          isp: true,
          organization: true,
          asNumber: true,
          asName: true,
          timeZone: true,
          ipAddress: true,
          userAgent: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: IpDetails })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteIpDetails(
    @common.Param() params: IpDetailsWhereUniqueInput
  ): Promise<IpDetails | null> {
    try {
      return await this.service.deleteIpDetails({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          ipv4: true,
          ipv6: true,
          city: true,
          region: true,
          state: true,
          zipCode: true,
          country: true,
          isp: true,
          organization: true,
          asNumber: true,
          asName: true,
          timeZone: true,
          ipAddress: true,
          userAgent: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
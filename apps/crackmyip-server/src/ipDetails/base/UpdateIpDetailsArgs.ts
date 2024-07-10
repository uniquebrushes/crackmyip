/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IpDetailsWhereUniqueInput } from "./IpDetailsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { IpDetailsUpdateInput } from "./IpDetailsUpdateInput";

@ArgsType()
class UpdateIpDetailsArgs {
  @ApiProperty({
    required: true,
    type: () => IpDetailsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => IpDetailsWhereUniqueInput)
  @Field(() => IpDetailsWhereUniqueInput, { nullable: false })
  where!: IpDetailsWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => IpDetailsUpdateInput,
  })
  @ValidateNested()
  @Type(() => IpDetailsUpdateInput)
  @Field(() => IpDetailsUpdateInput, { nullable: false })
  data!: IpDetailsUpdateInput;
}

export { UpdateIpDetailsArgs as UpdateIpDetailsArgs };
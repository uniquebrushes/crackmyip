import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const IpDetailsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ipv4" source="ipv4" />
        <TextInput label="ipv6" source="ipv6" />
        <TextInput label="city" source="city" />
        <TextInput label="region" source="region" />
        <TextInput label="state" source="state" />
        <TextInput label="zipCode" source="zipCode" />
        <TextInput label="country" source="country" />
        <TextInput label="isp" source="isp" />
        <TextInput label="organization" source="organization" />
        <TextInput label="asNumber" source="asNumber" />
        <TextInput label="asName" source="asName" />
        <TextInput label="timeZone" source="timeZone" />
        <TextInput label="ipAddress" source="ipAddress" />
        <TextInput label="userAgent" source="userAgent" />
      </SimpleForm>
    </Create>
  );
};

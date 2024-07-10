import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const IpDetailsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"IPDetailsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="ipv4" source="ipv4" />
        <TextField label="ipv6" source="ipv6" />
        <TextField label="city" source="city" />
        <TextField label="region" source="region" />
        <TextField label="state" source="state" />
        <TextField label="zipCode" source="zipCode" />
        <TextField label="country" source="country" />
        <TextField label="isp" source="isp" />
        <TextField label="organization" source="organization" />
        <TextField label="asNumber" source="asNumber" />
        <TextField label="asName" source="asName" />
        <TextField label="timeZone" source="timeZone" />
        <TextField label="ipAddress" source="ipAddress" />
        <TextField label="userAgent" source="userAgent" />
      </Datagrid>
    </List>
  );
};

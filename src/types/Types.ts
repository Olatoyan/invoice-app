export type InvoiceDataProps = {
  idd: number;
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAdd: SenderAddressProps[];
  clientAddress: ClientAddressProps[];
  items: ItemProps[];
  total: number;
};

export type CreateInvoiceProps = {
  idd: number;
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  total: number;
};

export type ClientAddressProps = {
  id: number;
  street: string;
  city: string;
  country: string;
  postCode: string;
  invoiceId: number;
};

export type SenderAddressProps = {
  id: number;
  invoiceId: number;
  street: string;
  city: string;
  country: string;
  postCode: string;
};

export type ItemProps = {
  id: number;
  invoiceId: number;
  name: string;
  quantity: number;
  price: number;
  total: number;
};

export type InvoiceDataProps = {
  idd: number;
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: string;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAdd: SenderAddressProps[];
  clientAddress: ClientAddressProps[];
  items: ItemProps[];
  total: number;
};

type ClientAddressProps = {
  id: number;
  street: string;
  city: string;
  country: string;
  postCode: string;
};

type SenderAddressProps = {
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

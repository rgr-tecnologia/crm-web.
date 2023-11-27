import { Customer } from "@/types/customer";

const API_URL = process.env.API_URL;

const getCustomers = () => {
  return fetch(`${API_URL}/customers`).then(
    (res) => res.json() as Promise<Customer[]>
  );
};

export default async function Page() {
  const customers: Customer[] = await getCustomers();

  return (
    <ul>
      {customers.map((customer) => (
        <li key={customer.uuid}>{customer.name}</li>
      ))}
    </ul>
  );
}

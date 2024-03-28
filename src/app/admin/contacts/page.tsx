import { ContactProps } from "@/types";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default async function page() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/contact`, {
    headers: {
      "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
    },
    next: { revalidate: 10 },
  });

  const contacts = await response.json();
  return (
    <div className="w-[70%] h-screen flex justify-center px-10 m-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>E-mail</TableHead>
            <TableHead>Assunto</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((item: ContactProps, index: number) => (
            <TableRow key={index} className="cursor-pointer hover:bg-gray-400">
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>
                <h1 className="w-[30rem] align-middle p-4 truncate">{item.content}</h1>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

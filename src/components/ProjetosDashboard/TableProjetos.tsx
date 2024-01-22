import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FaTrashAlt, FaEye, FaPencilAlt } from "react-icons/fa";
import { ProjetoProps } from "@/types";
import { useRouter } from "next/navigation";

interface TableProps {
  Projetos: ProjetoProps[];
  onDelete: (id: string) => void;
  viewModal: (id: string) => void;
}

export function TableProjetos({ Projetos, onDelete, viewModal }: TableProps) {
  const router = useRouter();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>N°</TableHead>
          <TableHead>Titulo</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Tecnologias</TableHead>
          <TableHead className="text-right">Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Projetos.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell className="font-medium text-lg">{item.title}</TableCell>
            <TableCell>
              <p className={`${item.published ? "text-green-500" : "text-red-500"} font-bold text-base`}>{item.published ? "Publicado" : "Não Publicado"}</p>
            </TableCell>
            <TableCell className="w-[50px] flex gap-2">
              {item.types.slice(0, 5).map((type, index) => (
                <p className="bg-red-200 p-1 rounded text-white" key={index}>
                  {type}
                </p>
              ))}
            </TableCell>
            <TableCell className="text-right">
              <button
                onClick={() => onDelete(item.id)}
                className="bg-[#ff1818] m-1 rounded-xl text-xl cursor-pointer text-white px-3 text-center py-2 transition-colors hover:bg-[#571919] shadow-lg"
              >
                <FaTrashAlt size={20} />
              </button>

              <button
                onClick={() => viewModal(item.id)}
                className="bg-green-500 m-1 rounded-xl text-xl cursor-pointer text-white px-3 text-center py-2 transition-colors hover:bg-green-700 shadow-lg"
              >
                <FaEye size={20} />
              </button>

              <button
                onClick={() => router.push(`/admin/projects/${item.id}`)}
                className="bg-blue-400 m-1 rounded-xl text-xl cursor-pointer text-white px-3 text-center py-2 transition-colors hover:bg-blue-500 shadow-lg"
              >
                <FaPencilAlt size={20} />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FaTrashAlt, FaEye, FaPencilAlt } from "react-icons/fa";
import { ProjetoProps } from "@/types";
import { useRouter } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "../ui/dropdown-menu";
import { DropdownMenuGroup, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { useFormProject } from "@/context/FormContext";
import { LoadingSpinner } from "../Loading";

interface TableProps {
  Projetos: ProjetoProps[];
  Loading: Boolean;
  handleDelete: (id: string) => void;
  isViewModal: (id: string) => void;
}

export function TableProjetos({ Projetos, handleDelete, isViewModal, Loading }: TableProps) {
  let edit = true;

  const { openFormModal } = useFormProject();
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
        {Loading ? (
          <TableRow>
            <TableCell colSpan={5} className="text-center">
              <LoadingSpinner />
            </TableCell>
          </TableRow>
        ) : (
          Projetos.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell className="font-medium text-lg">{item.title}</TableCell>
              <TableCell>
                <p className={`${item.published ? "text-green-500" : "text-red-500"} font-bold text-base`}>
                  {item.published ? "Publicado" : "Não Publicado"}
                </p>
              </TableCell>
              <TableCell className="w-[50px] flex gap-2">
                {item.types.slice(0, 5).map((type: string, index: number) => (
                  <p className="bg-gray-400 text-white dark:bg-white dark:text-black p-1 rounded" key={index}>
                    {type}
                  </p>
                ))}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="bg-gray-400 hover:bg-gray-300 dark:bg-white text-white dark:text-black dark:hover:bg-gray-100 font-bold text-xl">
                      ...
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="dark:bg-gray-400 dark:text-white dark:border-gray-300">
                    <DropdownMenuGroup>
                      <DropdownMenuItem
                        className="dark:hover:bg-[#1b1b1b] dark:text-white cursor-pointer"
                        onClick={() => handleDelete(item.id as string)}
                      >
                        Delete
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="dark:hover:bg-[#1b1b1b] dark:text-white cursor-pointer"
                        onClick={() => isViewModal(item.id as string)}
                      >
                        Olhar projeto
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="dark:hover:bg-[#1b1b1b] dark:text-white cursor-pointer"
                        onClick={() => openFormModal(item.id as string, edit as boolean)}
                      >
                        Editar
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}

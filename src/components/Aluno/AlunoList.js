import React, { useEffect, useState } from "react";
import AlunoManage from "@/components/Aluno/AlunoManage";
import CustomTable from "@/components/CustomTable";
// import { alunosSubscribe, deleteAluno } from "@/services/alunos-service";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import CustomAlertDialog from "../CustomAlertDialog";
import CustomToastHook from "../CustomToast";
import Sidebar from "../Sidebar";

const AlunoList = () => {
  const {
    isOpen: isOpenManage,
    onOpen: onOpenManage,
    onClose: onCloseManage,
  } = useDisclosure();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();
  const [Alunos, setAlunos] = useState([]);
  const [Aluno, setAluno] = useState([]);
  const [_, showToast] = CustomToastHook();
  const columns = [{ prop: "nome", desc: "Nome" }];
  const filterProps = [{ prop: "nome", desc: "Nome" }];
  const actions = [
    {
      icon: <FaEdit size="14px" />,
      size: "xs",
      colorScheme: "teal",
      onClick: (art) => handleEditClickFn(art),
    },
    {
      icon: <FaTrash size="14px" />,
      size: "xs",
      colorScheme: "red",
      onClick: (art) => handleDeleteClickFn(art),
    },
  ];
  const defaultSortProp = "";
  const sortAscendent = false;
  const pageSizes = [10, 20, 50];
  const defaultPageSize = 10;

  useEffect(() => {
    // alunosSubscribe({ setAlunos });
  }, []);

  const handleEditClickFn = (Aluno) => {
    setAluno(Aluno);
    onOpenManage();
  };

  const handleDeleteConfirmFn = () => {
    // deleteAluno(Aluno.id)
    //   .then((e) => showToast({ description: "Alunoshop Excluído" }))
    //   .catch((e) => {
    //     console.log(e);
    //     showToast({
    //       description: "Ocorreu um erro, tente mais tarde!",
    //       status: "error",
    //     });
    //   })
    //   .finally(()=>
      handleModalCloseFn()
      // );
  };

  const handleDeleteClickFn = (Aluno) => {
    setAluno(Aluno);
    onOpenDelete();
  };

  const handleModalCloseFn = () => {
    setAluno(null);
    onCloseManage();
    onCloseDelete();
  };

  const handleNewClickFn = () => {
    setAluno(null);
    onOpenManage();
  };

  return (
    <Sidebar onNew={handleNewClickFn}>
      <Flex flex={1}>
        Alunos
        <CustomTable
          {...{
            rows: Alunos,
            columns,
            actions,
            filterProps,
            defaultSortProp,
            sortAscendent,
            pageSizes,
            defaultPageSize,
          }}
        />
        {isOpenManage && (
          <AlunoManage
            {...{ isOpen: isOpenManage, onClose: handleModalCloseFn, Aluno }}
          />
        )}
        {isOpenDelete && (
          <CustomAlertDialog
            isOpen={isOpenDelete}
            title={"Excluir Alunoshop"}
            body={
              "Tem certeza de que deseja excluir o Alunoshop \n\n" +
              Aluno?.nome +
              "?"
            }
            onConfirm={handleDeleteConfirmFn}
            onCancel={handleModalCloseFn}
          />
        )}
      </Flex>
    </Sidebar>
  );
};

export default AlunoList;

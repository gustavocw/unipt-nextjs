import React, { useEffect, useState } from "react";
import CustomTable from "@/components/CustomTable";
import {
  ProfessoresSubscribe,
  deleteProfessore,
} from "@/services/Professores-service";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import CustomAlertDialog from "../CustomAlertDialog";
import CustomToastHook from "../CustomToast";
import Sidebar from "../Sidebar";
import ProfessorManager from "./Manage";

const ProfessoreList = () => {
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
  const [Professores, setProfessores] = useState([]);
  const [Professore, setProfessore] = useState([]);
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
    ProfessoresSubscribe({ setProfessores });
  }, []);

  const handleEditClickFn = (Professore) => {
    setProfessore(Professore);
    onOpenManage();
  };

  const handleDeleteConfirmFn = () => {
    deleteProfessore(Professore.id)
      .then((e) => showToast({ description: "Professoreshop Excluído" }))
      .catch((e) => {
        console.log(e);
        showToast({
          description: "Ocorreu um erro, tente mais tarde!",
          status: "error",
        });
      })
      .finally(handleModalCloseFn);
  };

  const handleDeleteClickFn = (Professore) => {
    setProfessore(Professore);
    onOpenDelete();
  };

  const handleModalCloseFn = () => {
    setProfessore(null);
    onCloseManage();
    onCloseDelete();
  };

  const handleNewClickFn = () => {
    setProfessore(null);
    onOpenManage();
  };

  return (
    <Sidebar onNew={handleNewClickFn}>
      <Flex flex={1}>
        Professores
        <CustomTable
          {...{
            rows: Professores,
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
          <ProfessorManager
            {...{
              isOpen: isOpenManage,
              onClose: handleModalCloseFn,
              Professore,
            }}
          />
        )}
        {isOpenDelete && (
          <CustomAlertDialog
            isOpen={isOpenDelete}
            title={"Excluir Professoreshop"}
            body={
              "Tem certeza de que deseja excluir o Professoreshop \n\n" +
              Professore?.nome +
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

export default ProfessoreList;

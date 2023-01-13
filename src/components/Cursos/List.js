import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Table,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import Sidebar from "../Sidebar";

const CursosList = () => {
  return (
    <Sidebar>
      <Accordion>
        <AccordionItem eventKey="0">
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Direito
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Table>
              <Thead>
                <Tr>
                  <Th>Semestres</Th>
                  <Th>Disciplinas</Th>
                  <Th>Professor</Th>
                  <Th>Alunos</Th>
                </Tr>
                <Tr>
                  <Td>1º</Td>
                  <Td>Direito Economico</Td>
                  <Td>Marcos Souza</Td>
                  <Td>Carlos Silva</Td>
                </Tr>
                <Tr>
                  <Td>1º</Td>
                  <Td>Direito Comercial </Td>
                  <Td>Elizabete Souza</Td>
                  <Td>Liliane Silva</Td>
                </Tr>
              </Thead>
            </Table>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem eventKey="1">
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Administração
              </Box>
            </AccordionButton>{" "}
          </h2>
          <AccordionPanel pb={4}>
            <Table>
              <Thead>
                <Tr>
                  <Th>Semestres</Th>
                  <Th>Disciplinas</Th>
                  <Th>Professor</Th>
                  <Th>Alunos</Th>
                </Tr>
                <Tr>
                  <Td>1º</Td>
                  <Td>Economia Política</Td>
                  <Td>Marcos Souza</Td>
                  <Td>Carlos Silva</Td>
                </Tr>
                <Tr>
                  <Td>1º</Td>
                  <Td>Introdução à Administração Pública</Td>
                  <Td>Elizabete Souza</Td>
                  <Td>Liliane Silva</Td>
                </Tr>
                <Tr>
                  <Td>2º</Td>
                  <Td>Contabilidade Pública</Td>
                  <Td>Moacir Souza</Td>
                  <Td>Roberto Algusto</Td>
                </Tr>
              </Thead>
            </Table>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Sidebar>
  );
};

export default CursosList;

import { upsertProfessore } from "@/services/Professores-service";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Tab,
  Table,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Textarea,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomToastHook from "../CustomToast";

const ProfessorManager = ({ Professore = {}, isOpen, onClose }) => {
  const [loading, setloading] = useState(false);
  const [_, showtoast] = CustomToastHook();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: Professore,
  });

  function onSubmit(Professore) {
    setloading(true);
    upsertProfessore(Professore)
      .then(() =>
        showtoast({
          description: `Professores ${
            Professore?.id ? "alterado" : "adicionado"
          } com sucesso!`,
        })
      )
      .catch((error) => {
        console.log("error ", error);
        showtoast({
          status: "error",
          description: "Ocorreu um erro, por favor, tente mais tarde!",
        });
      })
      .finally(onClose);
  }

  return (
    <Modal onClose={onClose} size={"2xl"} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{Professore ? "Editar" : "Novo"} Professores</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box bg="white" p={10} borderRadius="5px" shadow="base" flex={1}>
            <form>
              <Tabs>
                <TabList>
                  <Tab>Dados</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Dados {...{ register, errors }} />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </form>
            <Stack
              direction={"row"}
              justifyContent={"flex-start"}
              spacing={3}
              pt={5}
            >
              <Button
                isLoading={loading}
                colorScheme={"red"}
                variant={"outline"}
                onClick={onClose}
              >
                Cancelar
              </Button>
              <Button
                isLoading={loading}
                onClick={() => handleSubmit(onSubmit)()}
                colorScheme={"blue"}
              >
                Salvar
              </Button>
            </Stack>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default ProfessorManager;

const Dados = ({ register, errors }) => {
  return (
    <Stack spacing={5}>
      <FormControl isInvalid={errors.nome_completo}>
        <Input
          {...register("nome_completo", { required: "Campo Obrigat??rio." })}
        />
        <FormLabel>Nome completo</FormLabel>
        <FormErrorMessage>
          {errors.nome_completo?.message}
        </FormErrorMessage>{" "}
      </FormControl>
      <FormControl isInvalid={errors.email}>
        <Input {...register("email", { required: "Campo Obrigat??rio." })} />
        <FormLabel>Email</FormLabel>
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>{" "}
      </FormControl>
      <FormControl isInvalid={errors.nif}>
        <Input {...register("nif", { required: "Campo Obrigat??rio." })} />
        <FormLabel>NIF</FormLabel>
        <FormErrorMessage>{errors.nif?.message}</FormErrorMessage>{" "}
      </FormControl>
      <FormControl isInvalid={errors.nascimento}>
        <Input
          {...register("nascimento", { required: "Campo Obrigat??rio." })}
        />
        <FormLabel>Nascimento</FormLabel>
        <FormErrorMessage>{errors.nascimento?.message}</FormErrorMessage>{" "}
      </FormControl>
      <FormControl isInvalid={errors.cp}>
        <Input {...register("cp", { required: "Campo Obrigat??rio." })} />
        <FormLabel>C??digo Postal</FormLabel>
        <FormErrorMessage>{errors.cp?.message}</FormErrorMessage>{" "}
      </FormControl>
      <FormControl isInvalid={errors.endereco}>
        <Input {...register("endereco", { required: "Campo Obrigat??rio." })} />
        <FormLabel>Endere??o</FormLabel>
        <FormErrorMessage>{errors.endereco?.message}</FormErrorMessage>{" "}
      </FormControl>
      <FormControl isInvalid={errors.horas_trabalhadas}>
        <Input
          {...register("horas_trabalhadas", { required: "Campo Obrigat??rio." })}
        />
        <FormLabel>Horas trabalhadas</FormLabel>
        <FormErrorMessage>
          {errors.horas_trabalhadas?.message}
        </FormErrorMessage>{" "}
      </FormControl>
      <FormControl isInvalid={errors.pagamento}>
        <Input {...register("pagamento", { required: "Campo Obrigat??rio." })} />
        <FormLabel>Tipo de Pagamento</FormLabel>
        <FormErrorMessage>{errors.pagamento?.message}</FormErrorMessage>{" "}
      </FormControl>
      <FormControl isInvalid={errors.conta}>
        <Input {...register("conta", { required: "Campo Obrigat??rio." })} />
        <FormLabel>Conta Banc??ria</FormLabel>
        <FormErrorMessage>{errors.conta?.message}</FormErrorMessage>{" "}
      </FormControl>
    </Stack>
  );
};

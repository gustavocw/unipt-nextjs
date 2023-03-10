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

const ProfessoreManager = ({ Professore = {}, isOpen, onClose }) => {
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
          description: `Professoreshop ${
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
        <ModalHeader>{Professore ? "Editar" : "Novo"} Professoreshop</ModalHeader>
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
export default ProfessoreManager;

const Dados = ({ register, errors }) => {
  return (
    <Stack spacing={5}>
      <FormControl isInvalid={errors.nome_completo}>
        <Input
          {...register("nome_completo", { required: "Campo Obrigat??rio." })}
        />
        <FormLabel>nome_completo</FormLabel>
        <FormErrorMessage>
          {errors.nome_completo?.message}
        </FormErrorMessage>{" "}
      </FormControl>
      <FormControl isInvalid={errors.email}>
        <Input {...register("email", { required: "Campo Obrigat??rio." })} />
        <FormLabel>email</FormLabel>
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>{" "}
      </FormControl>
      <FormControl isInvalid={errors.nif}>
        <Input {...register("nif", { required: "Campo Obrigat??rio." })} />
        <FormLabel>nif</FormLabel>
        <FormErrorMessage>{errors.nif?.message}</FormErrorMessage>{" "}
      </FormControl>
      <FormControl isInvalid={errors.cp}>
        <Input {...register("cp", { required: "Campo Obrigat??rio." })} />
        <FormLabel>cp</FormLabel>
        <FormErrorMessage>{errors.cp?.message}</FormErrorMessage>{" "}
      </FormControl>
      <FormControl isInvalid={errors.matricula}>
        <Input {...register("matricula", { required: "Campo Obrigat??rio." })} />
        <FormLabel>matricula</FormLabel>
        <FormErrorMessage>{errors.matricula?.message}</FormErrorMessage>{" "}
      </FormControl>
      <FormControl isInvalid={errors.cidade}>
        <Input {...register("cidade", { required: "Campo Obrigat??rio." })} />
        <FormLabel>cidade</FormLabel>
        <FormErrorMessage>{errors.cidade?.message}</FormErrorMessage>{" "}
      </FormControl>
      <FormControl isInvalid={errors.rua}>
        <Input {...register("rua", { required: "Campo Obrigat??rio." })} />
        <FormLabel>rua</FormLabel>
        <FormErrorMessage>{errors.rua?.message}</FormErrorMessage>{" "}
      </FormControl>
      <FormControl isInvalid={errors.complemento}>
        <Input
          {...register("complemento", { required: "Campo Obrigat??rio." })}
        />
        <FormLabel>complemento</FormLabel>
        <FormErrorMessage>{errors.complemento?.message}</FormErrorMessage>{" "}
      </FormControl>
      <FormControl isInvalid={errors.nascimento}>
        <Input
          {...register("nascimento", { required: "Campo Obrigat??rio." })}
        />
        <FormLabel>nascimento</FormLabel>
        <FormErrorMessage>{errors.nascimento?.message}</FormErrorMessage>{" "}
      </FormControl>
      <FormControl isInvalid={errors.nome_pai}>
        <Input {...register("nome_pai", { required: "Campo Obrigat??rio." })} />
        <FormLabel>nome_pai</FormLabel>
        <FormErrorMessage>{errors.nome_pai?.message}</FormErrorMessage>{" "}
      </FormControl>
      <FormControl isInvalid={errors.nome_mae}>
        <Input {...register("nome_mae", { required: "Campo Obrigat??rio." })} />
        <FormLabel>nome_mae</FormLabel>
        <FormErrorMessage>{errors.nome_mae?.message}</FormErrorMessage>{" "}
      </FormControl>
      <FormControl isInvalid={errors.entidade_de_conclusao}>
        <Input
          {...register("entidade_de_conclusao", {
            required: "Campo Obrigat??rio.",
          })}
        />
        <FormLabel>entidade_de_conclusao</FormLabel>
        <FormErrorMessage>
          {errors.entidade_de_conclusao?.message}
        </FormErrorMessage>{" "}
      </FormControl>
      <FormControl isInvalid={errors.observacao}>
        <Input
          {...register("observacao", { required: "Campo Obrigat??rio." })}
        />
        <FormLabel>observacao</FormLabel>
        <FormErrorMessage>{errors.observacao?.message}</FormErrorMessage>{" "}
      </FormControl>
    </Stack>
  );
};

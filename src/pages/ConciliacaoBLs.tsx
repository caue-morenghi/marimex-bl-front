import { Box } from "@mui/material";
import Header from "../layout/Header";
import { useEffect, useState } from "react";
import blsjson from "../data/bl.json";
import { BL } from "../components/conciliacao-bls/BL";

export type BlItem = {
  id: number;
  ncontaineres: number;
  src: string;
  company: string;
  bl: string;
  peso_bruto: string;
  cubagem: string;
  shipper: string;
  consignee: string;
  navio: string;
  portoorigem: string;
  portodestino: string;
  dataemissao: string;
  modalidade: string;
  moedavalorfrete: string;
  ncm: string;
  quantidade: string;
  dimcontainer: string;
  containeres: string[];
  lacres: string;
};

export const ConciliacaoBLs = () => {

  const [bls, setbls] = useState<BlItem[]>([]);

  useEffect(() => {
    setbls(blsjson);
  }, []);

  return (
    <Box minHeight="100vh">
      <Header titulo="Painel de Conciliação de BL" />

      <Box sx={{ padding: "3em", display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2em' }}>
        {bls.map((bl) => (
            <BL
            key={bl.id}
            bl={bl}
            />
        ))}
      </Box>
    </Box>
  );
};

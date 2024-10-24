import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { BlItem } from '../pages/ConciliacaoBLs';

const DetailPage: React.FC = () => {
  const location = useLocation();
  const { bl } = location.state as { bl: BlItem };

  if (!bl) {
    return <Typography>Item not found</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4">{bl.bl}</Typography>
      <Typography>{bl.company}</Typography>
      <Typography>{bl.peso_bruto}</Typography>
      <Typography>{bl.cubagem}</Typography>
      <Typography>{bl.shipper}</Typography>
      <Typography>{bl.consignee}</Typography>
      <Typography>{bl.navio}</Typography>
      <Typography>{bl.portoorigem}</Typography>
      <Typography>{bl.portodestino}</Typography>
      <Typography>{bl.dataemissao}</Typography>
      <Typography>{bl.modalidade}</Typography>
      <Typography>{bl.moedavalorfrete}</Typography>
      <Typography>{bl.ncm}</Typography>
      <Typography>{bl.quantidade}</Typography>
      <Typography>{bl.dimcontainer}</Typography>
      <Typography>{bl.containeres.join(', ')}</Typography>
      <Typography>{bl.lacres}</Typography>
      {/* Adicione mais detalhes conforme necessário */}
    </Box>
  );
};

export default DetailPage;
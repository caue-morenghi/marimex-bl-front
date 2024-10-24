import React, { useCallback, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { BlItem } from "../../pages/ConciliacaoBLs";
import { useLocation } from "react-router-dom";
import FormConciliacao from "./formconciliacao";
import { set } from "react-hook-form";
import Header from "../../layout/Header";

const ConciliacaoBL = () => {
  const location = useLocation();
  const { bl } = location.state as { bl: BlItem };

  const { register, setValue, handleSubmit, errors } = FormConciliacao();

  const imagePath = require(`../../data/assets/bl${bl.id}.png`);

  const handleSetValues = useCallback(() => {
    setValue("bl", bl.bl);
    setValue("peso_bruto", bl.peso_bruto);
    setValue("cubagem", bl.cubagem);
    setValue("shipper", bl.shipper);
    setValue("consignee", bl.consignee);
    setValue("navio", bl.navio);
    setValue("portoorigem", bl.portoorigem);
    setValue("portodestino", bl.portodestino);
    setValue("dataemissao", bl.dataemissao);
    setValue("modalidade", bl.modalidade);
    setValue("moedavalorfrete", bl.moedavalorfrete);
    setValue("ncm", bl.ncm);
    setValue("quantidade", bl.quantidade);
    setValue("dimcontainer", bl.dimcontainer);
    setValue("containeres", bl.containeres);
    setValue("lacres", bl.lacres);
  }, []);

  useEffect(() => {
    handleSetValues();
  }, [bl, setValue, handleSetValues]);

  const handleDataSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Header titulo=""/>
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src={imagePath}
              alt={`BL ${bl.bl}`}
              style={{ width: "100%" }}
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', gap: '2em' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3em' }}>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: '700' }}>BL: {bl.bl}</Typography>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: '700' }}>{bl.company}</Typography>
            </Box>
            <form onSubmit={handleSubmit(handleDataSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography sx={{ fontWeight: "700", fontSize: "16px" }}>
                    BL
                  </Typography>
                  <input
                    style={{
                      border: "1px solid #a0a0a0",
                      outline: "none",
                      padding: ".5em",
                      backgroundColor: "#f1f1f1",
                      fontSize: "0.9rem",
                      borderRadius: "5px",
                    }}
                    type="text"
                    {...register("bl")}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ fontWeight: "700", fontSize: "16px" }}>
                    Peso Bruto
                  </Typography>
                  <input
                    style={{
                      border: "1px solid #a0a0a0",
                      outline: "none",
                      padding: ".5em",
                      backgroundColor: "#f1f1f1",
                      fontSize: "0.9rem",
                      borderRadius: "5px",
                    }}
                    type="text"
                    {...register("peso_bruto")}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ fontWeight: "700", fontSize: "16px" }}>
                    Cubagem
                  </Typography>
                  <input
                    style={{
                      border: "1px solid #a0a0a0",
                      outline: "none",
                      padding: ".5em",
                      backgroundColor: "#f1f1f1",
                      fontSize: "0.9rem",
                      borderRadius: "5px",
                    }}
                    type="text"
                    {...register("cubagem")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontWeight: "700", fontSize: "16px" }}>
                    Shipper
                  </Typography>
                  <input
                    style={{
                      border: "1px solid #a0a0a0",
                      outline: "none",
                      padding: ".5em",
                      backgroundColor: "#f1f1f1",
                      fontSize: "0.9rem",
                      borderRadius: "5px",
                    }}
                    type="text"
                    {...register("shipper")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontWeight: "700", fontSize: "16px" }}>
                    Consignee
                  </Typography>
                  <input
                    style={{
                      border: "1px solid #a0a0a0",
                      outline: "none",
                      padding: ".5em",
                      backgroundColor: "#f1f1f1",
                      fontSize: "0.9rem",
                      borderRadius: "5px",
                    }}
                    type="text"
                    {...register("consignee")}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ fontWeight: "700", fontSize: "16px" }}>
                    Navio
                  </Typography>
                  <input
                    style={{
                      border: "1px solid #a0a0a0",
                      outline: "none",
                      padding: ".5em",
                      backgroundColor: "#f1f1f1",
                      fontSize: "0.9rem",
                      borderRadius: "5px",
                    }}
                    type="text"
                    {...register("navio")}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ fontWeight: "700", fontSize: "16px" }}>
                    Porto Origem
                  </Typography>
                  <input
                    style={{
                      border: "1px solid #a0a0a0",
                      outline: "none",
                      padding: ".5em",
                      backgroundColor: "#f1f1f1",
                      fontSize: "0.9rem",
                      borderRadius: "5px",
                    }}
                    type="text"
                    {...register("portoorigem")}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ fontWeight: "700", fontSize: "16px" }}>
                    Porto Destino
                  </Typography>
                  <input
                    style={{
                      border: "1px solid #a0a0a0",
                      outline: "none",
                      padding: ".5em",
                      backgroundColor: "#f1f1f1",
                      fontSize: "0.9rem",
                      borderRadius: "5px",
                    }}
                    type="text"
                    {...register("portodestino")}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ fontWeight: "700", fontSize: "16px" }}>
                    Data Emissão
                  </Typography>
                  <input
                    style={{
                      border: "1px solid #a0a0a0",
                      outline: "none",
                      padding: ".5em",
                      backgroundColor: "#f1f1f1",
                      fontSize: "0.9rem",
                      borderRadius: "5px",
                    }}
                    type="text"
                    {...register("dataemissao")}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ fontWeight: "700", fontSize: "16px" }}>
                    Modalidade
                  </Typography>
                  <input
                    style={{
                      border: "1px solid #a0a0a0",
                      outline: "none",
                      padding: ".5em",
                      backgroundColor: "#f1f1f1",
                      fontSize: "0.9rem",
                      borderRadius: "5px",
                    }}
                    type="text"
                    {...register("modalidade")}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ fontWeight: "700", fontSize: "16px" }}>
                    Moeda Valor Frete
                  </Typography>
                  <input
                    style={{
                      border: "1px solid #a0a0a0",
                      outline: "none",
                      padding: ".5em",
                      backgroundColor: "#f1f1f1",
                      fontSize: "0.9rem",
                      borderRadius: "5px",
                    }}
                    type="text"
                    {...register("moedavalorfrete")}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ fontWeight: "700", fontSize: "16px" }}>
                    NCM
                  </Typography>
                  <input
                    style={{
                      border: "1px solid #a0a0a0",
                      outline: "none",
                      padding: ".5em",
                      backgroundColor: "#f1f1f1",
                      fontSize: "0.9rem",
                      borderRadius: "5px",
                    }}
                    type="text"
                    {...register("ncm")}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ fontWeight: "700", fontSize: "16px" }}>
                    Quantidade
                  </Typography>
                  <input
                    style={{
                      border: "1px solid #a0a0a0",
                      outline: "none",
                      padding: ".5em",
                      backgroundColor: "#f1f1f1",
                      fontSize: "0.9rem",
                      borderRadius: "5px",
                    }}
                    type="text"
                    {...register("quantidade")}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ fontWeight: "700", fontSize: "16px" }}>
                    DIM CONTAINER
                  </Typography>
                  <input
                    style={{
                      border: "1px solid #a0a0a0",
                      outline: "none",
                      padding: ".5em",
                      backgroundColor: "#f1f1f1",
                      fontSize: "0.9rem",
                      borderRadius: "5px",
                    }}
                    type="text"
                    {...register("dimcontainer")}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ fontWeight: "700", fontSize: "16px" }}>
                    CONTAINERES
                  </Typography>
                  <input
                    style={{
                      border: "1px solid #a0a0a0",
                      outline: "none",
                      padding: ".5em",
                      backgroundColor: "#f1f1f1",
                      fontSize: "0.9rem",
                      borderRadius: "5px",
                    }}
                    type="text"
                    {...register("containeres")}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ fontWeight: "700", fontSize: "16px" }}>
                    LACRES DOS CONTAINERES
                  </Typography>
                  <input
                    style={{
                      border: "1px solid #a0a0a0",
                      outline: "none",
                      padding: ".5em",
                      backgroundColor: "#f1f1f1",
                      fontSize: "0.9rem",
                      borderRadius: "5px",
                    }}
                    type="text"
                    {...register("lacres")}
                  />
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ConciliacaoBL;

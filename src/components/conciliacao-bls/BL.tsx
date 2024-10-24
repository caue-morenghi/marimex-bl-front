import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import InsertDriveFile from '@mui/icons-material/InsertDriveFile';
import { BlItem } from '../../pages/ConciliacaoBLs';
import { useNavigate } from 'react-router-dom';

type BLProps = {
    bl: BlItem
}

export const BL = ({ bl }: BLProps) => {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/details/${bl.id}`, { state: { bl } });
    };

    return (
        <Box
            onClick={handleClick}
            sx={{
                width: "30%",
                height: theme.spacing(8),
                backgroundColor: theme.palette.background.default,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '.5em',
                border: '1px solid #d1d1d1',
                borderRadius: '10px',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                borderRight: '10px solid #5d5d5d',
                transition: 'transform 0.1s',
                '&:hover': {
                    transform: 'scale(1.02)',
                },
                cursor: 'pointer'
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <InsertDriveFile sx={{ fontSize: '36px' }} />
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: '600', fontSize: '14px' }}>{bl.bl}</Typography>
                        <Typography sx={{ fontWeight: '600' }}>{bl.modalidade}</Typography>
                    </Box>
                </Box>
                <Typography sx={{ fontWeight: '600' }}>{bl.ncontaineres} CONTAINERES</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <Typography sx={{ fontWeight: '700', fontSize: '13px' }}>Leitura</Typography>
                <Typography sx={{ fontWeight: '700', fontSize: '13px' }}>Conferência</Typography>
                <Typography sx={{ fontWeight: '700', fontSize: '13px' }}>Invoice</Typography>
            </Box>
        </Box>
    );
};
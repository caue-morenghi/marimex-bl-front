import {
  Icon,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

type IListItemLinkProps = {
  to: string;
  icon: string;
  label: string;
  onClick: () => void;
};

export const ListItemLink = ({
  icon,
  onClick,
  to,
  label
}: IListItemLinkProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onClick();
    navigate(to);
  };

  return (
    <Tooltip title={label} onClick={handleClick} >
      <IconButton sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Icon sx={{ fontSize: '40px' }}>{icon}</Icon>
      </IconButton>
    </Tooltip>
  );
};

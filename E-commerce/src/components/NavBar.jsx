import { StyledBadge } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from "@mui/material/ShoppingCartIcon"

export const NavBar = () => {
    return (
        <>
            <div>
                <a href="/">Inicio</a>
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>
            </div>



        </>
    )
}

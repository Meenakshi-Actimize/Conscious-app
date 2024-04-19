import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';


import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';




const pages = ['SHOP', 'OFFERS', 'CONSCIOUS WALLET', 'BLOG', 'ABOUT US', 'SHOP BY DIET'];
// const settings = ['SHOP', 'OFFERS', 'CONSCIOUS WALLET', 'BLOG', 'ABOUT US', 'SHOP BY DIET'];

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        backgroundColor: '#263238',
        border: `2px solid ${theme.palette.background.paper}`,
        color: 'white'
    },
}));

function Navbarcomp() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white', height: '48px', justifyContent: 'center' }}>

            <Toolbar disableGutters>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    <img src="./images/horizontal_logo_black.jpg" alt="image" width="65%" dir='rtl' />
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'inline-flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="rgb(0,0.3,0.3,0.7)"
                        sx={{ marginRight: 'auto' }}
                    >
                        <MenuIcon sx={{ paddingRight: '70px' }} />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}  >
                                <Typography textAlign="center" color="textSecondary" >{page}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    <img src="./images/horizontal_logo_black.jpg" alt="image" width="65%" dir='rtl' />

                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'rgb(0,0.3,0.3,0.7)', display: 'block' }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>
                <Box>
                    <InputAdornment position="start" sx={{
                        color: 'rgb(0,0.3,0.3,0.7)',

                    }}>
                        <SearchOutlinedIcon />
                    </InputAdornment>
                </Box>
                <Box>
                    <InputAdornment position="start" sx={{
                        color: 'rgb(0,0.3,0.3,0.7)'
                    }}>
                        <PersonOutlineOutlinedIcon />
                    </InputAdornment>
                </Box>
                <Box>
                    <InputAdornment position="start" sx={{
                        color: 'rgb(0,0.3,0.3,0.7)'
                    }}>
                                <LocalMallOutlinedIcon />
                    </InputAdornment>
                </Box>


            </Toolbar>
        </AppBar>
    );
}
export default Navbarcomp;
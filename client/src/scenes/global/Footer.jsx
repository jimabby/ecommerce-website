import { useTheme, Box, Typography } from '@mui/material';
import { shades } from '../../theme';

const Footer = () => {
  const {palette: {neutral}} = useTheme();

  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography fontWeight='bold' mb='30px' color={shades.secondary[500]}>
            iDesign
          </Typography>
          <div>
            Welcome to iDesign, where creativity meets quality. Discover our exclusive range of products designed 
            to inspire and delight. Have questions? Reach out to us at support@idesign.com or call +1 (800) 123-4567. 
            Connect with us on social media @iDesign for the latest updates and inspiration.
          </div>
        </Box>
        <Box>
          <Typography variant='h4' fontWeight='bold' mb='30px'>
            About us
          </Typography>
          <Typography mb='30px'>Careers</Typography>
          <Typography mb='30px'>Our Stories</Typography>
          <Typography mb='30px'>Terms & Conditions</Typography>
          <Typography mb='30px'>Privacy Policy</Typography>
        </Box>
        <Box>
          <Typography variant='h4' fontWeight='bold' mb='30px'>
            Customer Care
          </Typography>
          <Typography mb='30px'>Help Center</Typography>
          <Typography mb='30px'>Track Your Order</Typography>
          <Typography mb='30px'>Corporate & Bulk Purchasing</Typography>
          <Typography mb='30px'>Returns & Refunds</Typography>
        </Box>
        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant='h4' fontWeight='bold' mb='30px'>
            Contact Us
          </Typography>
          <Typography mb='30px'>4464 Janice Lee Dr, Michigan, United States 48864</Typography>
          <Typography mb='30px'>Email: support@idesign.com</Typography>
          <Typography mb='30px'>Phone: +1 (800) 123-4567</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer;
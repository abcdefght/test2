// Third party.
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function Home() {
  return (
    <Box 
      height="100vh" 
      display="flex" 
      justifyContent="center" 
      alignItems="center"
    >
      <Typography variant="h2" component="p">
        Welcome to SimplyLab's onsite interview!
      </Typography>
    </Box>
  );
}

export default Home;

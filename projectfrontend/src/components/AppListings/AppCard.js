import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const AppCard = ({
  myDirection,
  title,
  appshorts,
  appcardHref,
  appimagelink,
}) => {
  return (
    <Box mt={3}>
      <Link href={appcardHref} sx={{ textDecoration: "none" }}>
        <Card>
          <Box
            sx={{
              display: { xs: "block", md: `${myDirection}` },
              flexDirection: "cloumn",
            }}
          >
            <CardMedia
              component={"img"}
              height="300"
              image={`${appimagelink}`}
              alt="Image not Working"
              sx={{
                width: "400px",
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.8,
                  boxSizing: "border-box",
                  zIndex: "1",
                  transition: `all 0.50s ease`,
                },
              }}
            />
            <CardContent sx={{ minHeight: "260px" }}>
              <Typography gutterBottom variant="h4" align="center">
                {title}
              </Typography>
              <Typography gutterBottom variant="h5" color="text.secondary">
                {appshorts}
              </Typography>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </CardContent>
          </Box>
        </Card>
      </Link>
    </Box>
  );
};

export default AppCard;

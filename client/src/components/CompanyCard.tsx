import React, {FC} from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import BusinessIcon from "@mui/icons-material/Business";

type CompanyInfoProps = {
  companyInfo: {
    company_name: string, 
    repos: string[],
    id: string | number
  }
}

const CompanyCard: FC<CompanyInfoProps> = ({companyInfo}) => {
  return (
    <Box sx={{ width: 275 }}>
      <Card variant="outlined">
        <CardActionArea>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Private
            </Typography>
            <Typography variant="h6" className="truncate-single">
              <div style={{ display: "flex", alignItems: "center" }}>
                <BusinessIcon style={{ marginRight: 10 }}></BusinessIcon>
                {companyInfo.company_name}
              </div>
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {companyInfo.repos.length} Repos
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default CompanyCard;


import React, {FC} from "react";
import { Link, Outlet } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";

import Container from "@mui/material/Container";
import CompanyCard from "./CompanyCard";
import { URL, API } from "../constants";
import useFetch from "../useFetch";

type CompanyProps = {
    company_name: string, 
    repos: string[],
    id: string
}
const CompaniesView = () => {
  const { data, error } = useFetch(API.GET_ALL);
  const handleClick = (e: React.SyntheticEvent<HTMLButtonElement>, id: string) => {
    const event = new CustomEvent("onDrawerOpen", { detail: id });
    document.dispatchEvent(event);
  };
  return (
    <>
      <Container>
        <Typography component="h2">
          Company Registry
        </Typography>
        <Grid container spacing={2}>
          {data &&
            data.map((company:CompanyProps) => (
              <Grid
                
                key={company.id}
                onClick={(e: any) => {
                  handleClick(e, company.id);
                }}
              >
                <Link
                  to={URL.COMPANY(company.id)}
                  style={{ textDecoration: "none" }}
                >
                  <CompanyCard companyInfo={company} />
                </Link>
              </Grid>
            ))}
        </Grid>
      </Container>

      <Outlet />
      {error && <Alert severity="error">{error}</Alert>}
    </>
  );
}
export default CompaniesView;


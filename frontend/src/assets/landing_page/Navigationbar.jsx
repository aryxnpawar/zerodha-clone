import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import "./Navigationbar.css";
import { NavLink } from "react-router-dom";

export default function Navigationbar() {
  return (
    <>
      <Grid className="navbar" container>
        <Grid direction={"row"} size={6}>
          <Stack sx={{ paddingBottom: "10px" }}>
            <NavLink to='/'>
            <img
              className="zerodhaLogo navbar-item"
              src="/images/logo.svg"
              alt="ZERODHA LOGO"
            />
            </NavLink>
            
          </Stack>
        </Grid>

        <Grid item size={6}>
          <nav>
            <Stack direction="row" justifyContent="flex-end">
              <ul className="navbar-item">
                <li>
                  <NavLink className="text-body-2" to={"/signup"}>
                    Signup
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-body-2" to={"/about"}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-body-2" to={"/products"}>
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-body-2" to={"/pricing"}>
                    Pricing
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-body-2" to={"/support"}>
                    Support
                  </NavLink>
                </li>
              </ul>
            </Stack>
          </nav>
        </Grid>
      </Grid>
    </>
  );
}

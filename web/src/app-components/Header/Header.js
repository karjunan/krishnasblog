//organisms
// "use client";

import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

/**
 * Global Header component
 * Includes navigation and a top drawer in mobile view
 */
export function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Header</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

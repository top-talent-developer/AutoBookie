import React from "react";
import Grid from "@material-ui/core/Grid";

import img_footer from "../assets/footer/footer.png";
const Footer = () => {
  return (
    <div>
      <Grid container style={{ zIndex: -100 }}>
        <Grid item xs={12}>
          <img src={img_footer} alt="footer" className="footer_img" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

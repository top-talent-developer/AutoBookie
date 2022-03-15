import React from "react";
import Grid from "@material-ui/core/Grid";
import img_premium from "../assets/Home/premium.png";
import img_elipse from "../assets/Premium/elipse.png";
const Premium = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <Grid container>
        <Grid item xs={12}>
          <div className="home_live_bettting_title">PREMIUM</div>
        </Grid>
      </Grid>
      <div className="padding_div">
        <Grid container spacing={2}>
          <Grid xs={11} md={7}>
            <div className="home_premium_text premium_text_content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              tempor metus, pellentesque aenean consequat porttitor bibendum
              cursus in. Lacus amet integer id cursus pretium urna massa. Diam
              viverra sit diam cursus. Fermentum semper turpis auctor sit. Sit
              consectetur nunc, donec risus posuere metus gravida purus,
              laoreet. Erat ac sit vitae accumsan.
            </div>
          </Grid>
          <Grid xs={12} md={1}></Grid>
          <Grid xs={11} md={4}>
            <img
              src={img_premium}
              alt="premium"
              className="home_premium_premium_img premium_premium_img"
            />
          </Grid>
        </Grid>
      </div>

      <div className="padding_div" justifyContent="center">
        <Grid container justifyContent>
          <Grid xs={12} md={6} style={{ textAlign: "center" }}>
            <button className="theme_btn">GET A PREMIUM ACCOUNT</button>
          </Grid>
          <Grid xs={12} md={6}>
            <div className="premium_two_right_grp">
              <div className="premium_two_right_grp_left">
                <img src={img_elipse} alt="elipse" />
              </div>
              <div className="premium_two_right_grp_right">
                4 Free withdrawals
              </div>
            </div>
            <div className="premium_two_right_grp">
              <div className="premium_two_right_grp_left">
                <img src={img_elipse} alt="elipse" />
              </div>
              <div className="premium_two_right_grp_right">
                Data insights provided by the sports betting API
              </div>
            </div>{" "}
            <div className="premium_two_right_grp">
              <div className="premium_two_right_grp_left">
                <img src={img_elipse} alt="elipse" />
              </div>
              <div className="premium_two_right_grp_right">
                Detailed sports-related, team-related, player-related BI linked
                to Events
              </div>
            </div>{" "}
            <div className="premium_two_right_grp">
              <div className="premium_two_right_grp_left">
                <img src={img_elipse} alt="elipse" />
              </div>
              <div className="premium_two_right_grp_right">
                $25 monthly pre-pay
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Premium;

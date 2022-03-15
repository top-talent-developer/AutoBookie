import React from "react";
import Grid from "@material-ui/core/Grid";
import img_sport1 from "../assets/sport/sport1.png";
import img_sport2 from "../assets/sport/sport2.png";
import img_sport3 from "../assets/sport/sport3.png";
import img_sport4 from "../assets/sport/sport4.png";
import img_sport5 from "../assets/sport/sport1.png";
import img_sport6 from "../assets/sport/sport6.png";
const Sports = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <Grid container>
        <Grid item xs={12}>
          <div className="home_live_bettting_title">SPORTS</div>
        </Grid>
      </Grid>
      <div className="padding_div">
        <Grid container justifyContent="center">
          <Grid item xs={11}>
            <div className="sport_text_content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              tempor metus, pellentesque aenean consequat porttitor bibendum
              cursus in. Lacus amet integer id cursus pretium urna massa. Diam
              viverra sit diam cursus. Fermentum semper turpis auctor sit. Sit
              consectetur nunc, donec risus posuere metus gravida purus,
              laoreet. Erat ac sit vitae accumsan.
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="padding_div">
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <img src={img_sport1} alt="sport" className="sport_sport_img" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src={img_sport2} alt="sport" className="sport_sport_img" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src={img_sport3} alt="sport" className="sport_sport_img" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src={img_sport4} alt="sport" className="sport_sport_img" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src={img_sport5} alt="sport" className="sport_sport_img" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src={img_sport6} alt="sport" className="sport_sport_img" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Sports;

import React from "react";
import Grid from "@material-ui/core/Grid";
import img_with from "../assets/Home/with.png";
import img_bet from "../assets/Home/bet.png";
import img_star from "../assets/Home/star.png";
import img_sport1 from "../assets/Home/sport1.png";
import img_sport2 from "../assets/Home/sport2.png";
import img_sport3 from "../assets/Home/sport3.png";
import img_sport4 from "../assets/Home/sport4.png";
import img_sport5 from "../assets/Home/sport5.png";
import img_sport6 from "../assets/Home/sport6.png";
import img_premium from "../assets/Home/premium.png";
const Home = () => {
  return (
    <div style={{ marginTop: "70px" }}>
      <Grid container justifyContent="center">
        <Grid item xs={10} md={5} lg={4}>
          <div className="home_first_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
            aliquet blandit tristique volutpat congue in est. Sit vitae pharetra
            viverra neque. Sit euismod augue ultrices suspendisse. Duis ipsum ac
            vitae facilisis eu platea eu.
          </div>
          <div className="home_first_btn_div">
            <button className="home_first_btn ">GO TO THE BETS</button>
          </div>
        </Grid>
        <Grid item xs={12} md={5} lg={7}>
          <img src={img_with} alt="with" className="home_img_with" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <div className="home_live_bettting_title">LIVE BETTING</div>
        </Grid>
      </Grid>

      <div className="padding_div">
        <Grid container justifyContent="center">
          <Grid item xs={10} md={5} lg={4}>
            <div className="home_bets_div">
              <Grid container>
                <Grid item xs={3}>
                  <img src={img_bet} alt="bet" />
                </Grid>
                <Grid item xs={8} md={5}>
                  <div className="home_bets_div_title">
                    Golden State Warriors vs Denver Nuggets
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className="home_bets_text_volume">Volume</div>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}>
                  <div className="home_bets_text_money">$ 250</div>
                </Grid>
                <Grid item xs={8}>
                  <button className="home_bets_btn_bets">BETS</button>
                </Grid>
                <Grid item xs={2}>
                  <img
                    src={img_star}
                    alt="star"
                    className="home_bets_star_img"
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={10} md={5} lg={4}>
            <div className="home_bets_div">
              <Grid container>
                <Grid item xs={3}>
                  <img src={img_bet} alt="bet" />
                </Grid>
                <Grid item xs={8} md={5}>
                  <div className="home_bets_div_title">
                    Golden State Warriors vs Denver Nuggets
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className="home_bets_text_volume">Volume</div>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}>
                  <div className="home_bets_text_money">$ 250</div>
                </Grid>
                <Grid item xs={8}>
                  <button className="home_bets_btn_bets">BETS</button>
                </Grid>
                <Grid item xs={2}>
                  <img
                    src={img_star}
                    alt="star"
                    className="home_bets_star_img"
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={10} md={5} lg={4}>
            <div className="home_bets_div">
              <Grid container>
                <Grid item xs={3}>
                  <img src={img_bet} alt="bet" />
                </Grid>
                <Grid item xs={8} md={5}>
                  <div className="home_bets_div_title">
                    Golden State Warriors vs Denver Nuggets
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className="home_bets_text_volume">Volume</div>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}>
                  <div className="home_bets_text_money">$ 250</div>
                </Grid>
                <Grid item xs={8}>
                  <button className="home_bets_btn_bets">BETS</button>
                </Grid>
                <Grid item xs={2}>
                  <img
                    src={img_star}
                    alt="star"
                    className="home_bets_star_img"
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={10} md={5} lg={4}>
            <div className="home_bets_div">
              <Grid container>
                <Grid item xs={3}>
                  <img src={img_bet} alt="bet" />
                </Grid>
                <Grid item xs={8} md={5}>
                  <div className="home_bets_div_title">
                    Golden State Warriors vs Denver Nuggets
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className="home_bets_text_volume">Volume</div>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}>
                  <div className="home_bets_text_money">$ 250</div>
                </Grid>
                <Grid item xs={8}>
                  <button className="home_bets_btn_bets">BETS</button>
                </Grid>
                <Grid item xs={2}>
                  <img
                    src={img_star}
                    alt="star"
                    className="home_bets_star_img"
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={10} md={5} lg={4}>
            <div className="home_bets_div">
              <Grid container>
                <Grid item xs={3}>
                  <img src={img_bet} alt="bet" />
                </Grid>
                <Grid item xs={8} md={5}>
                  <div className="home_bets_div_title">
                    Golden State Warriors vs Denver Nuggets
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className="home_bets_text_volume">Volume</div>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}>
                  <div className="home_bets_text_money">$ 250</div>
                </Grid>
                <Grid item xs={8}>
                  <button className="home_bets_btn_bets">BETS</button>
                </Grid>
                <Grid item xs={2}>
                  <img
                    src={img_star}
                    alt="star"
                    className="home_bets_star_img"
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={10} md={5} lg={4}>
            <div className="home_bets_div">
              <Grid container>
                <Grid item xs={3}>
                  <img src={img_bet} alt="bet" />
                </Grid>
                <Grid item xs={8} md={5}>
                  <div className="home_bets_div_title">
                    Golden State Warriors vs Denver Nuggets
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className="home_bets_text_volume">Volume</div>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}>
                  <div className="home_bets_text_money">$ 250</div>
                </Grid>
                <Grid item xs={8}>
                  <button className="home_bets_btn_bets">BETS</button>
                </Grid>
                <Grid item xs={2}>
                  <img
                    src={img_star}
                    alt="star"
                    className="home_bets_star_img"
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={10} md={5} lg={4}>
            <div className="home_bets_div">
              <Grid container>
                <Grid item xs={3}>
                  <img src={img_bet} alt="bet" />
                </Grid>
                <Grid item xs={8} md={5}>
                  <div className="home_bets_div_title">
                    Golden State Warriors vs Denver Nuggets
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className="home_bets_text_volume">Volume</div>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}>
                  <div className="home_bets_text_money">$ 250</div>
                </Grid>
                <Grid item xs={8}>
                  <button className="home_bets_btn_bets">BETS</button>
                </Grid>
                <Grid item xs={2}>
                  <img
                    src={img_star}
                    alt="star"
                    className="home_bets_star_img"
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={10} md={5} lg={4}>
            <div className="home_bets_div">
              <Grid container>
                <Grid item xs={3}>
                  <img src={img_bet} alt="bet" />
                </Grid>
                <Grid item xs={8} md={5}>
                  <div className="home_bets_div_title">
                    Golden State Warriors vs Denver Nuggets
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className="home_bets_text_volume">Volume</div>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}>
                  <div className="home_bets_text_money">$ 250</div>
                </Grid>
                <Grid item xs={8}>
                  <button className="home_bets_btn_bets">BETS</button>
                </Grid>
                <Grid item xs={2}>
                  <img
                    src={img_star}
                    alt="star"
                    className="home_bets_star_img"
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={10} md={5} lg={4}>
            <div className="home_bets_div">
              <Grid container>
                <Grid item xs={3}>
                  <img src={img_bet} alt="bet" />
                </Grid>
                <Grid item xs={8} md={5}>
                  <div className="home_bets_div_title">
                    Golden State Warriors vs Denver Nuggets
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className="home_bets_text_volume">Volume</div>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}>
                  <div className="home_bets_text_money">$ 250</div>
                </Grid>
                <Grid item xs={8}>
                  <button className="home_bets_btn_bets">BETS</button>
                </Grid>
                <Grid item xs={2}>
                  <img
                    src={img_star}
                    alt="star"
                    className="home_bets_star_img"
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={10} md={5} lg={4}>
            <div className="home_bets_div">
              <Grid container>
                <Grid item xs={3}>
                  <img src={img_bet} alt="bet" />
                </Grid>
                <Grid item xs={8} md={5}>
                  <div className="home_bets_div_title">
                    Golden State Warriors vs Denver Nuggets
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className="home_bets_text_volume">Volume</div>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}>
                  <div className="home_bets_text_money">$ 250</div>
                </Grid>
                <Grid item xs={8}>
                  <button className="home_bets_btn_bets">BETS</button>
                </Grid>
                <Grid item xs={2}>
                  <img
                    src={img_star}
                    alt="star"
                    className="home_bets_star_img"
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={10} md={5} lg={4}>
            <div className="home_bets_div">
              <Grid container>
                <Grid item xs={3}>
                  <img src={img_bet} alt="bet" />
                </Grid>
                <Grid item xs={8} md={5}>
                  <div className="home_bets_div_title">
                    Golden State Warriors vs Denver Nuggets
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className="home_bets_text_volume">Volume</div>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}>
                  <div className="home_bets_text_money">$ 250</div>
                </Grid>
                <Grid item xs={8}>
                  <button className="home_bets_btn_bets">BETS</button>
                </Grid>
                <Grid item xs={2}>
                  <img
                    src={img_star}
                    alt="star"
                    className="home_bets_star_img"
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={10} md={5} lg={4}>
            <div className="home_bets_div">
              <Grid container>
                <Grid item xs={3}>
                  <img src={img_bet} alt="bet" />
                </Grid>
                <Grid item xs={8} md={5}>
                  <div className="home_bets_div_title">
                    Golden State Warriors vs Denver Nuggets
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className="home_bets_text_volume">Volume</div>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}>
                  <div className="home_bets_text_money">$ 250</div>
                </Grid>
                <Grid item xs={8}>
                  <button className="home_bets_btn_bets">BETS</button>
                </Grid>
                <Grid item xs={2}>
                  <img
                    src={img_star}
                    alt="star"
                    className="home_bets_star_img"
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>

      <Grid container>
        <Grid item xs={12}>
          <div className="home_live_bettting_title">SPORTS</div>
        </Grid>
      </Grid>
      <div className="padding_div">
        <Grid container justifyContent="center">
          <Grid item xs={11}>
            <div className="sport_intro_text">
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
            <img src={img_sport1} alt="sport" className="sport_img" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src={img_sport2} alt="sport" className="sport_img" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src={img_sport3} alt="sport" className="sport_img" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src={img_sport4} alt="sport" className="sport_img" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src={img_sport5} alt="sport" className="sport_img" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src={img_sport6} alt="sport" className="sport_img" />
          </Grid>
        </Grid>
      </div>
      <Grid container>
        <Grid item xs={12}>
          <div className="home_live_bettting_title">PREMIUM</div>
        </Grid>
      </Grid>
      <div className="padding_div">
        <Grid container spacing={2}>
          <Grid xs={11} md={4}>
            <img
              src={img_premium}
              alt="premium"
              className="home_premium_premium_img"
            />
          </Grid>
          <Grid xs={11} md={8}>
            <div className="home_premium_text">
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
      <Grid container>
        <Grid item xs={12}>
          <div className="home_live_bettting_title">ABOUT US</div>
        </Grid>
      </Grid>
      <div className="padding_div" >
        <Grid container justifyContent="center">
          <Grid item xs={11} md={6}>
            <div className="home_about_grp">
            <div className="home_about_title">OUR VISION</div>
            <div className="home_about_content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              tempor metus, pellentesque aenean consequat porttitor bibendum
              cursus in. Lacus amet integer id cursus pretium urna massa.
            </div>
            </div>
          </Grid>
          <Grid item xs={11} md={6}>
          <div className="home_about_grp">

            <div className="home_about_title">OUR MODEL</div>
            <div className="home_about_content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              tempor metus, pellentesque aenean consequat porttitor bibendum
              cursus in. Lacus amet integer id cursus pretium urna massa.
            </div>
            </div>

          </Grid>
          <Grid item xs={11} md={6}>
          <div className="home_about_grp">

            <div className="home_about_title">OUR TEAM</div>
            <div className="home_about_content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              tempor metus, pellentesque aenean consequat porttitor bibendum
              cursus in. Lacus amet integer id cursus pretium urna massa.
            </div>
            </div>

          </Grid>
          <Grid item xs={11} md={6}>
          <div className="home_about_grp">

            <div className="home_about_title">OUR SUPPORT</div>
            <div className="home_about_content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              tempor metus, pellentesque aenean consequat porttitor bibendum
              cursus in. Lacus amet integer id cursus pretium urna massa.
            </div>
            </div>

          </Grid>
        </Grid>
      </div>
      
      <Grid container justifyContent="center" >
        <Grid item xs={12} style={{ zIndex: 100 }}>
          <div className="home_join_grp">
          <div className="home_join_title">What are you waiting for?</div>
          <div className="home_join_content">Open and fund your Autobookie account today and start winning.</div>
          <button className="home_join_btn theme_btn">JOIN FREE</button>
          </div>
        </Grid>
      </Grid>

    </div>
  );
};

export default Home;

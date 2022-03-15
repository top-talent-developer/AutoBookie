import React, { useEffect, useState } from "react";
import { useWallet } from "../hooks/useWallet";
import { useWalletModal } from "../hooks/useWalletModal";
import WalletModal from "./WalletModal/WalletModal";
import { NotificationManager } from "react-notifications";
import { tokenContract, presaleContract } from "../contracts";
import { ethers } from "ethers";
import { toBigNum } from "../utils";
import bnbpng from "../assets/bnb.png";
import shibapng from "../assets/shiba.png";
import Grid from "@material-ui/core/Grid";
import Modal from "react-modal";
import { useWeb3React } from "@web3-react/core";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
  },
};

export default function MainFlex() {
  const { active, account, library } = useWallet();
  const { activate } = useWeb3React();
  const { toggleOpen } = useWalletModal();
  const [bscAmount, setBSCAmount] = useState(0);
  const [shibaAmount, setShibaAmount] = useState(0);
  const [tokenPrice, setTokenPrice] = useState(1000);
  const [shibaBalance, setShibaBalance] = useState(0);
  const [signer, setSigner] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [walletcode, setWalletcode] = useState("");
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    if (account !== undefined) setWalletcode(account.slice(10, 18));
  });
  useEffect(() => {
    const getSigner = async () => {
      if (active) {
        const signer = await library.getSigner();
        setSigner(signer);
      }
    };
    getSigner();
  }, [active]);

  useEffect(() => {
    const getPrice = async () => {
      let price = await presaleContract.getPrice();
      setTokenPrice(price);
    };
    getPrice();
  }, []);

  useEffect(() => {
    const getBalance = async () => {
      if (active && account) {
        let balance = await tokenContract.balanceOf(account);
        setShibaBalance(balance);
      } else {
        setShibaBalance(0);
      }
    };
    getBalance();
  }, [active]);

  const onBuy = async () => {
    try {
      if (bscAmount == 0) {
        NotificationManager.error("Please input BNB amount");
      }
      let bnbAmount = bscAmount;
      console.log("signer", signer);
      var signedPresaleContract = presaleContract.connect(signer);
      let prov = ethers.getDefaultProvider();
      const balance = await prov.getBalance(account);
      let estimatedPrice = Number(balance) - toBigNum(0.0003, 18) * 1e18;
      if (estimatedPrice > toBigNum(bnbAmount, 18)) {
      }

      console.log("Balance", balance);

      console.log("amount", toBigNum(bnbAmount, 18));
      var tx = await signedPresaleContract.buy({
        value: toBigNum(bnbAmount, 18),
      });
      await tx.wait();
      NotificationManager.success("Buy Success");
    } catch (error) {
      console.log("error code", error.code);

      if (error.code === "INSUFFICIENT_FUNDS")
        NotificationManager.error("Insufficient funds");
      else console.log(error);
    }
  };
  const onBscChange = (e) => {
    if (e.target.value === "") {
      setBSCAmount(0);
      setShibaAmount(0);
    } else {
      setShibaAmount(e.target.value * tokenPrice);
      setBSCAmount(e.target.value);
    }
  };

  const onShibaChange = (e) => {
    if (e.target.value === "") {
      onBscChange(0);
      onShibaChange(0);
    } else {
      setBSCAmount(e.target.value / tokenPrice);
      setShibaAmount(e.target.value);
    }
  };
  const Presale = () => {
    document.getElementById("airdrop_modal").style.display = "none";
    document.getElementById("presale_modal").style.display = "block";
  };
  const Airdrop = () => {
    document.getElementById("airdrop_modal").style.display = "block";
    document.getElementById("presale_modal").style.display = "none";
  };

  const disconnect=()=>{
    activate(null);
  }
  return (
    <>
      <WalletModal />
      <section className="inner-banner top-back-img">
        {!active ? (
          <button className="top_connect_btn" onClick={toggleOpen}>
            Connect Wallet{" "}
          </button>
        ) : (
          <button className="top_connect_btn" onClick={disconnect}>Disconnect</button>
        )}

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-xl-6 text-center">
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={10} md={4}>
                  <button className="top_btn" onClick={Presale}>
                    Presale
                  </button>
                </Grid>
                <Grid item xs={10} md={4}>
                  <button className="top_btn" onClick={Airdrop}>
                    Airdrop
                  </button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </section>
      <section className="padding-top padding-bottom">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-6">
              <div className="game-details-left">
                <div id="coin-flip-cont">
                  <div className="coins-wrapper">
                    <div className="front">
                      <img src={bnbpng} alt="game" />
                    </div>
                    <div className="back">
                      <img src={shibapng} alt="game" />
                    </div>
                  </div>
                </div>
                <div className="cd-ft"></div>
              </div>
            </div>
            <div
              className="col-lg-6"
              id="airdrop_modal"
              style={{ display: "none" }}
            >
              <div className="game-details-right">
                <h3 className="mb-4 text-center">AirDrop</h3>
                <div className="mt-5 text-center">
                  <div className="presale_txt1">
                    Airdrop Tokens are automatically sent to your wallet within
                    96 hours after all your tasks have been verified by our
                    team.
                  </div>
                  <br />
                  <div className="presale_txt2">
                    Airdrop Reward:20MTK Tokens
                  </div>
                  <br />

                  <div className="presale_txt3">
                    Referral Reward:10MTK Tokens
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <button
                    className="cmn--btn active w-100 text-center"
                    onClick={openModal}
                    style={{ zIndex: 0 }}
                  >
                    Begin AirDrop Tasks
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6" id="presale_modal">
              <div className="game-details-right">
                {active && shibaBalance ? (
                  <>
                    <h3 className="mb-4 text-center">
                      Current Balance :{" "}
                      <span className="base--color">
                        <span className="bal">{Number(shibaBalance)}</span>{" "}
                        LShiba
                      </span>
                    </h3>
                  </>
                ) : (
                  <h3 className="mb-4 text-center">Presale</h3>
                )}

                <form id="game">
                  <div className="form-group">
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        step="0.000001"
                        value={parseFloat(bscAmount).toString()}
                        onChange={onBscChange}
                        className="form-control form--control amount-field"
                        placeholder="Enter BNB amount"
                      />
                      <span
                        className="input-group-text text-white bg--base"
                        id="basic-addon2"
                      >
                        BNB
                      </span>
                    </div>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        step="1"
                        onChange={onShibaChange}
                        value={parseFloat(shibaAmount).toString()}
                        name="invest"
                        className="form-control form--control amount-field"
                        placeholder="Enter LShiba amount"
                      />
                      <span
                        className="input-group-text text-white bg--base"
                        id="basic-addon2"
                      >
                        LShiba
                      </span>
                    </div>
                    {/* <small className="form-text text-muted"><i className="fas fa-info-circle mr-2"></i>Minimum: 1 USD | Maximum: 500.00 USD | <span className="text-warning">Win Amount  1  %</span></small> */}
                  </div>
                  <div className="form-group mt-4 mt-sm-5 justify-content-center d-flex flex-wrap justify-content-between">
                    <div className="single-select head gmimg active">
                      <div className="back">
                        <img src={bnbpng} alt="game" />
                      </div>
                    </div>
                    <div className="single-select tail gmimg">
                      <div className="front">
                        <img src={shibapng} alt="game" />
                      </div>
                    </div>
                  </div>
                </form>
                <div className="mt-5 text-center">
                  {active ? (
                    <button
                      onClick={onBuy}
                      className="cmn--btn active w-100 text-center"
                    >
                      Buy LShiba
                    </button>
                  ) : (
                    <button
                      onClick={toggleOpen}
                      className="cmn--btn active w-100 text-center"
                    >
                      Connect Wallet
                    </button>
                  )}
                  {/* <a href="!#" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" className="mt-3 btn btn-link btn--sm radius-5">Game Instruction <i className="las la-info-circle"></i></a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal_text_first_task">
          First <u>Task</u>
        </div>
        <div className="modal_text_content">
          <div>
            1.Search and Join our
            <a target="_blank" href="https://t.me/luckyshiba_official">
              <font className="text-info">Telegram Channel</font>{" "}
              <font className="text-warning">@LuckyShibasann</font>
            </a>
          </div>
          2.Add 3 Friends into the our Telegram group 2,3 or group 4
          <br />
          3.Copy the code below and send into any of the{" "}
          <a target="_blank" href="https://t.me/luckyshiba_official">
            groups
          </a>{" "}
          for verification
          <br />
          <br />
          <strong>
            <u>LShiba{walletcode}</u>
          </strong>
          <br />
          <br />
          <div style={{ textAlign: "center", padding: "10px" }}>
            <button className="done_btn">Done Lets Proceed</button>
            <button className="can_btn" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

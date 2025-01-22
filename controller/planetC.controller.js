const { default: axios } = require("axios");

const getToken = async (req, res) => {
  try {
    const TOKENURL =
      "https://planetctechnology.in/planetcapi/auth/user/generateToken";
    const user_name = "8650222777";
    const password = "Welcome@2580";
    const formData = new FormData();
    formData.append("user_name", user_name);
    formData.append("password", password);
    const response = await axios.post(TOKENURL, formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    console.log("res...", response.data);
    res
      .status(200)
      .json({ message: "Token generate Successfully", token: response.data });
  } catch (error) {
    console.log("getToken Error", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const payOut = async (req, res) => {
  try {
    const { token, amount, accountNo, ifsc, name, bankName, phoneNo } =
      req.body;

    if (
      !token ||
      !amount ||
      !accountNo ||
      !ifsc ||
      !name ||
      !bankName ||
      !phoneNo
    ) {
      return res.status(404).json({
        missingField: "require missing fields",
        requirefiled: {
          token: !token ? "token is require" : undefined,
          amount: !amount ? "amount is require" : undefined,
          accountNo: !accountNo ? "accountNo is require" : undefined,
          ifsc: !ifsc ? "ifsc is require" : undefined,
          name: !name ? "name is require" : undefined,
          bankName: !bankName ? "bankName is require" : undefined,
          phoneNo: !phoneNo ? "phoneNo is require" : undefined,
        },
      });
    }
    const payOutUrl =
      "https://planetctechnology.in/planetcapi/auth/payout/payoutApi";
    const clientReferenceNo = "dvdded34";
    const token_key = "ef47aa25d8dd80fd6e63fa3fb464b2bd";
    const fundTransferType = "imps";
    const formData = new FormData();
    formData.append("amount", amount);
    formData.append("beneAccountNo", accountNo);
    formData.append("beneifsc", ifsc);
    formData.append("beneName", name);
    formData.append("beneBankName", bankName);
    formData.append("benePhoneNo", phoneNo);
    formData.append("clientReferenceNo", clientReferenceNo);
    formData.append("token_key", token_key);
    formData.append("fundTransferType", fundTransferType);
    formData.append("lat", "19.475");
    formData.append("long", 10.994);
    formData.append("remarks", "remarks");
    const response = await axios.post(payOutUrl, formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `${token}`,
      },
    });
    console.log("payOut Response", response.data);

    res.status(200).json({
      message: "payout api hit successfully",
      response: response.data,
    });
  } catch (error) {
    console.log("payOut Error", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = {
  getToken,
  payOut,
};

import axios from "axios";
import { PostPaymentResponse } from "@type/paymentTypes";

async function getUsers() {
  axios
    .post<PostPaymentResponse>("https://gateway.zibal.ir/v1/request", {
      merchant: "zibal",
      amount: 150000,
      callbackUrl: "https://google.com/",
    })
    .then((res) => {
      console.log(`https://gateway.zibal.ir/start/${res.data.trackId}`);
    })
    .catch((err) => {
      console.log(err);
    });
}

export default getUsers;

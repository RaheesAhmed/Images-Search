import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Mq5_IFzwjsdIFocQX-ZvNsi_4_0rkSCh4QWhJKpMvPQ",
  },
});

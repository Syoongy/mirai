import { YNetwork } from "ynetwork";

const useAuthorisationApi = (accessToken) => {
  const getAuthorisationToken = async () => {
    let data = null;
    try {
      const query = `query {
        Viewer {
          id
        }
      }`;
      const res = await YNetwork.post(
        "https://graphql.anilist.co",
        {
          query: query,
        },
        {
          Authorization: "Bearer " + accessToken.value,
          "Content-Type": "application/json",
          Accept: "application/json",
        }
      );
      console.log(res);
      data = res;
    } catch (error) {
      const errMsg = await error.response.json();
      console.log(errMsg);
    }
    return data;
  };
  const updatePurchaseRequest = async () => {
    // let data = false;
    // try {
    //   const res = await api.put(`${id.value}`, {
    //     json: {
    //       PRANo: PRANo.value,
    //       title: title.value,
    //       createdDate: new Date(createdDate.value),
    //       totalPrice: totalPrice.value,
    //       deliveryDate: deliveryDate.value,
    //       needByDate: new Date(needByDate.value),
    //     },
    //   });
    //   toast.success("PurchaseRequest update success!");
    //   data = true;
    // } catch (error) {
    //   const errMsg = await error.response.json();
    //   toast.error(errMsg.message);
    // }
    // return data;
  };
  return { getAuthorisationToken, updatePurchaseRequest };
};

export { useAuthorisationApi };

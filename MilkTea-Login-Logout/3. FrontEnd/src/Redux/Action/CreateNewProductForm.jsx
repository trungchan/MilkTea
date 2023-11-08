import { CLOSE_FORM_CREATE, SHOW_FORM_CREATE } from "../Contants/CreateNewProductType";

export let actionShowFormCreate = () => {
    return {
      type: SHOW_FORM_CREATE,
    };
  };
  
  // Khai báo action đóng Form
  export let actionCloseFormCreate = () => {
    return {
      type: CLOSE_FORM_CREATE,
    };
  }

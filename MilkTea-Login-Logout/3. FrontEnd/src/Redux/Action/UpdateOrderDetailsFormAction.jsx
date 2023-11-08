import { CLOSE_FORM,  SHOW_FORM } from "../Contants/UpdateOrderDetailsForm";

export let actionShowForm = () => {
    return {
      type: SHOW_FORM,
    };
  };
  
  // Khai báo action đóng Form
  export let actionCloseForm = () => {
    return {
      type: CLOSE_FORM,
    };
  }




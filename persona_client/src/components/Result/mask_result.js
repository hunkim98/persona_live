import "./mask_result.css";
import mask0 from "../svg/mask_result/mask0.svg";
import mask1 from "../svg/mask_result/mask1.svg";
import mask2 from "../svg/mask_result/mask2.svg";
import mask3 from "../svg/mask_result/mask3.svg";
import mask4 from "../svg/mask_result/mask4.svg";
import mask5 from "../svg/mask_result/mask5.svg";
import mask6 from "../svg/mask_result/mask6.svg";
import mask7 from "../svg/mask_result/mask7.svg";
import mask8 from "../svg/mask_result/mask8.svg";
import mask9 from "../svg/mask_result/mask9.svg";

export const mask_circle = [
  mask0,
  mask1,
  mask2,
  mask3,
  mask4,
  mask5,
  mask6,
  mask7,
  mask8,
  mask9,
];

export const show_mask = (type) => {
  return mask_circle[type];
};

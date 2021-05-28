import { mask_raw } from "../masks/mask_raw";
import { show_mask_name } from "./mask_info";
import { Link } from "react-router-dom";

export const best_with_gender = (personality, number) => {
  if (number === 0) {
    //man
    if (personality === 1) {
      return (
        <div className="partner_mask_container">
          <Link to="/masks/2">
            <img className="partner_mask_image" src={mask_raw[1]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(2)}</div>
        </div>
      );
    } else if (personality === 2) {
      return (
        <div className="partner_mask_container">
          <Link to="/masks/2">
            <img className="partner_mask_image" src={mask_raw[1]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(2)}</div>
        </div>
      );
    } else if (personality === 3) {
      return (
        <div className="partner_mask_container">
          <Link to="/masks/1">
            <img className="partner_mask_image" src={mask_raw[0]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(1)}</div>
          <Link to="/masks/2">
            <img className="partner_mask_image" src={mask_raw[1]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(2)}</div>
        </div>
      );
    } else if (personality === 4) {
      return (
        <div className="partner_mask_container">
          <Link to="/masks/2">
            <img className="partner_mask_image" src={mask_raw[1]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(2)}</div>
          <Link to="/masks/6">
            <img className="partner_mask_image" src={mask_raw[5]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(6)}</div>
        </div>
      );
    } else if (personality === 5) {
      return (
        <div className="partner_mask_container">
          <Link to="/masks/5">
            <img className="partner_mask_image" src={mask_raw[4]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(5)}</div>
          <Link to="/masks/2">
            <img className="partner_mask_image" src={mask_raw[1]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(2)}</div>
        </div>
      );
    } else if (personality === 6) {
      return (
        <div className="partner_mask_container">
          <Link to="/masks/2">
            <img className="partner_mask_image" src={mask_raw[1]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(2)}</div>
          <Link to="/masks/4">
            <img className="partner_mask_image" src={mask_raw[3]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(4)}</div>
        </div>
      );
    } else if (personality === 7) {
      return (
        <div className="partner_mask_container">
          <Link to="/masks/2">
            <img className="partner_mask_image" src={mask_raw[1]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(2)}</div>
          <Link to="/masks/4">
            <img className="partner_mask_image" src={mask_raw[3]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(4)}</div>
        </div>
      );
    } else if (personality === 8) {
      return (
        <div className="partner_mask_container">
          <Link to="/masks/1">
            <img className="partner_mask_image" src={mask_raw[0]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(1)}</div>
          <Link to="/masks/2">
            <img className="partner_mask_image" src={mask_raw[1]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(2)}</div>
          <Link to="/masks/4">
            <img className="partner_mask_image" src={mask_raw[3]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(4)}</div>
        </div>
      );
    } else if (personality === 9) {
      return (
        <div className="partner_mask_container">
          <Link to="/masks/2">
            <img className="partner_mask_image" src={mask_raw[1]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(2)}</div>
          <Link to="/masks/4">
            <img className="partner_mask_image" src={mask_raw[3]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(4)}</div>
        </div>
      );
    }
  } else {
    //woman
    if (personality === 1) {
      return (
        <div className="partner_mask_container">
          <Link to="/masks/5">
            <img className="partner_mask_image" src={mask_raw[4]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(5)}</div>
          <Link to="/masks/9">
            <img className="partner_mask_image" src={mask_raw[8]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(9)}</div>
        </div>
      );
    } else if (personality === 2) {
      return (
        <div className="partner_mask_container">
          <Link to="/masks/5">
            <img className="partner_mask_image" src={mask_raw[4]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(5)}</div>
          <Link to="/masks/9">
            <img className="partner_mask_image" src={mask_raw[8]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(9)}</div>
        </div>
      );
    } else if (personality === 3) {
      return (
        <div className="partner_mask_container">
          <Link to="/masks/1">
            <img className="partner_mask_image" src={mask_raw[0]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(1)}</div>
          <Link to="/masks/9">
            <img className="partner_mask_image" src={mask_raw[8]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(9)}</div>
        </div>
      );
    } else if (personality === 4) {
      return (
        <div className="partner_mask_container">
          <Link to="/masks/9">
            <img className="partner_mask_image" src={mask_raw[8]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(9)}</div>
        </div>
      );
    } else if (personality === 5) {
      return (
        <div className="partner_mask_container">
          <Link to="/masks/5">
            <img className="partner_mask_image" src={mask_raw[4]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(5)}</div>
        </div>
      );
    } else if (personality === 6) {
      return (
        <div className="partner_mask_container">
          <Link to="/masks/9">
            <img className="partner_mask_image" src={mask_raw[8]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(9)}</div>
        </div>
      );
    } else if (personality === 7) {
      return (
        <div className="partner_mask_container">
          <Link to="/masks/9">
            <img className="partner_mask_image" src={mask_raw[8]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(9)}</div>
        </div>
      );
    } else if (personality === 8) {
      return (
        <div className="partner_mask_container">
          <Link to="/masks/5">
            <img className="partner_mask_image" src={mask_raw[4]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(5)}</div>
          <Link to="/masks/6">
            <img className="partner_mask_image" src={mask_raw[5]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(6)}</div>
          <Link to="/masks/9">
            <img className="partner_mask_image" src={mask_raw[8]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(9)}</div>
        </div>
      );
    } else if (personality === 9) {
      return (
        <div className="partner_mask_container">
          <Link to="/masks/3">
            <img className="partner_mask_image" src={mask_raw[2]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(3)}</div>
          <Link to="/masks/6">
            <img className="partner_mask_image" src={mask_raw[5]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(6)}</div>
          <Link to="/masks/7">
            <img className="partner_mask_image" src={mask_raw[6]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(7)}</div>
          <Link to="/masks/9">
            <img className="partner_mask_image" src={mask_raw[8]} />
          </Link>
          <div className="partner_mask_name">{show_mask_name(9)}</div>
        </div>
      );
    }
  }
};

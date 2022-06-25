import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useClickOutside from "../../helpers/clickOutside";
import './style.css'

export default function ErrorPopup() {
    const dispatch = useDispatch();
    const errorPopup = useRef(null);
    const { error } = useSelector((state) => ({ ...state }));
    useClickOutside(errorPopup, () => {});

    return (
        <div className="blur" id="errorPopup">
            <div className="postBox" ref={errorPopup} id="errorPost1">
                <div className="box_header">
                    <div className="small_circle">
                        <i className="exit_icon"></i>
                    </div>
                    <span>{error.header}</span>
                </div>
                <div className="error_body">{error.error}</div>
            </div>
        </div>
    );
}
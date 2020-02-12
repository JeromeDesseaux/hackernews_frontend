import React, { useState } from "react";
import { Input } from "antd";

const {Search} = Input;

const NewsSearchInput = (props) => {
    return (
        <div>
            <Search placeholder="What do you wanna know ?" onSearch={props.handleChange} enterButton />
        </div>
    )

}

export default NewsSearchInput;
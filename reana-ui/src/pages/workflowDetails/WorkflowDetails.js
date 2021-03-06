/*
	-*- coding: utf-8 -*-

	This file is part of REANA.
	Copyright (C) 2018 CERN.

  REANA is free software; you can redistribute it and/or modify it
  under the terms of the MIT License; see LICENSE file for more details.
*/

import React, { Component } from "react";
import Header from "../../components/Header";
import WorkflowHeader from "./components/WorkflowHeader";
import WorkflowSpace from "./components/WorkflowSpace";
import "./WorkflowDetails.css";

export default class WorkflowDetailsPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <WorkflowHeader />
        <WorkflowSpace />
      </div>
    );
  }
}

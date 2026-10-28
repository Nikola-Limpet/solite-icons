"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var data_exports = {};
__export(data_exports, {
  iconCategories: () => iconCategories,
  icons: () => icons
});
module.exports = __toCommonJS(data_exports);
var import_navigation = require("./definitions/navigation.js");
var import_people = require("./definitions/people.js");
var import_sales = require("./definitions/sales.js");
var import_payments = require("./definitions/payments.js");
var import_operations = require("./definitions/operations.js");
var import_files = require("./definitions/files.js");
var import_actions = require("./definitions/actions.js");
var import_communication = require("./definitions/communication.js");
var import_data = require("./definitions/data.js");
var import_devices = require("./definitions/devices.js");
var import_interface = require("./definitions/interface.js");
var import_workflow = require("./definitions/workflow.js");
var import_developer = require("./definitions/developer.js");
var import_media = require("./definitions/media.js");
var import_discovery = require("./definitions/discovery.js");
var import_interface_expansion = require("./definitions/interface-expansion.js");
var import_editing_expansion = require("./definitions/editing-expansion.js");
var import_apps_expansion = require("./definitions/apps-expansion.js");
const icons = {
  ...import_navigation.navigationIcons,
  ...import_people.peopleIcons,
  ...import_sales.salesIcons,
  ...import_payments.paymentIcons,
  ...import_operations.operationIcons,
  ...import_files.fileIcons,
  ...import_actions.actionIcons,
  ...import_communication.communicationIcons,
  ...import_data.dataIcons,
  ...import_devices.deviceIcons,
  ...import_interface.interfaceIcons,
  ...import_workflow.workflowIcons,
  ...import_developer.developerIcons,
  ...import_media.mediaIcons,
  ...import_discovery.discoveryIcons,
  ...import_interface_expansion.interfaceExpansionIcons,
  ...import_editing_expansion.editingExpansionIcons,
  ...import_apps_expansion.appsExpansionIcons
};
const names = (group) => Object.keys(group);
const iconCategories = {
  Navigation: names(import_navigation.navigationIcons),
  "People & access": names(import_people.peopleIcons),
  Sales: names(import_sales.salesIcons),
  "Payments & time": names(import_payments.paymentIcons),
  "Business operations": names(import_operations.operationIcons),
  Files: names(import_files.fileIcons),
  Actions: names(import_actions.actionIcons),
  "Communication & status": names(import_communication.communicationIcons),
  Data: names(import_data.dataIcons),
  Devices: names(import_devices.deviceIcons),
  "Interface essentials": names(import_interface.interfaceIcons),
  Workflow: names(import_workflow.workflowIcons),
  "Developer tools": names(import_developer.developerIcons),
  "Media & sharing": names(import_media.mediaIcons),
  "Discovery & learning": names(import_discovery.discoveryIcons),
  "Accessibility & interface": names(import_interface_expansion.interfaceExpansionIcons),
  "Editing & development": names(import_editing_expansion.editingExpansionIcons),
  "Everyday applications": names(import_apps_expansion.appsExpansionIcons)
};

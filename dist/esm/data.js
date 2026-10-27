import { navigationIcons } from "./definitions/navigation.js";
import { peopleIcons } from "./definitions/people.js";
import { salesIcons } from "./definitions/sales.js";
import { paymentIcons } from "./definitions/payments.js";
import { operationIcons } from "./definitions/operations.js";
import { fileIcons } from "./definitions/files.js";
import { actionIcons } from "./definitions/actions.js";
import { communicationIcons } from "./definitions/communication.js";
import { dataIcons } from "./definitions/data.js";
import { deviceIcons } from "./definitions/devices.js";
import { interfaceIcons } from "./definitions/interface.js";
import { workflowIcons } from "./definitions/workflow.js";
import { developerIcons } from "./definitions/developer.js";
import { mediaIcons } from "./definitions/media.js";
import { discoveryIcons } from "./definitions/discovery.js";
const icons = {
  ...navigationIcons,
  ...peopleIcons,
  ...salesIcons,
  ...paymentIcons,
  ...operationIcons,
  ...fileIcons,
  ...actionIcons,
  ...communicationIcons,
  ...dataIcons,
  ...deviceIcons,
  ...interfaceIcons,
  ...workflowIcons,
  ...developerIcons,
  ...mediaIcons,
  ...discoveryIcons
};
const names = (group) => Object.keys(group);
const iconCategories = {
  Navigation: names(navigationIcons),
  "People & access": names(peopleIcons),
  Sales: names(salesIcons),
  "Payments & time": names(paymentIcons),
  "Business operations": names(operationIcons),
  Files: names(fileIcons),
  Actions: names(actionIcons),
  "Communication & status": names(communicationIcons),
  Data: names(dataIcons),
  Devices: names(deviceIcons),
  "Interface essentials": names(interfaceIcons),
  Workflow: names(workflowIcons),
  "Developer tools": names(developerIcons),
  "Media & sharing": names(mediaIcons),
  "Discovery & learning": names(discoveryIcons)
};
export {
  iconCategories,
  icons
};

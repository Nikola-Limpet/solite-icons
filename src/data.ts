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
import type { IconGroup } from "./geometry.js";

export const icons = {
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
} as const;
export type SoliteIconName = keyof typeof icons;
const names = <T extends IconGroup>(group: T) => Object.keys(group) as (keyof T & string)[];
export const iconCategories = {
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
} as const;

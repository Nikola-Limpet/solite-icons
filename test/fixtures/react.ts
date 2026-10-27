import { createElement, createRef } from "react";
import { HomeIcon, ShopIcon, type SoliteIconName, type SoliteIconProps } from "solite-icons";
import CashRegisterIcon from "solite-icons/icons/cash-register";
import { SoliteIcon } from "solite-icons/dynamic";
import { icons } from "solite-icons/data";
const props: SoliteIconProps = { size: 20, strokeWidth: 2, "aria-label": "Home" };
const name: SoliteIconName = "cash-register";
createElement(HomeIcon, { ...props, ref: createRef<SVGSVGElement>() });
createElement(ShopIcon, { title: "Shop" });
createElement(CashRegisterIcon, { className: "toolbar-icon" });
createElement(SoliteIcon, { name });
icons.shop;
// @ts-expect-error Unknown dynamic names must fail TypeScript.
createElement(SoliteIcon, { name: "does-not-exist" });

// The essentials batch is available as typed named, deep, and dynamic exports.
import { CodeIcon, AccessibilityIcon } from "solite-icons";
import TerminalIcon from "solite-icons/icons/terminal";
createElement(CodeIcon, props);
createElement(AccessibilityIcon, { title: "Accessibility" });
createElement(TerminalIcon, { size: 16 });
createElement(SoliteIcon, { name: "microphone-off" });
icons["git-branch"];

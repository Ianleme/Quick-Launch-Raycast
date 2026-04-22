/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `manage-app-groups` command */
  export type ManageAppGroups = ExtensionPreferences & {}
  /** Preferences accessible in the `open-group-slot-1` command */
  export type OpenGroupSlot1 = ExtensionPreferences & {
  /** Group Name - Exact group name to open with this slot. */
  "groupName"?: string
}
  /** Preferences accessible in the `open-group-slot-2` command */
  export type OpenGroupSlot2 = ExtensionPreferences & {
  /** Group Name - Exact group name to open with this slot. */
  "groupName"?: string
}
  /** Preferences accessible in the `open-group-slot-3` command */
  export type OpenGroupSlot3 = ExtensionPreferences & {
  /** Group Name - Exact group name to open with this slot. */
  "groupName"?: string
}
  /** Preferences accessible in the `open-group-slot-4` command */
  export type OpenGroupSlot4 = ExtensionPreferences & {
  /** Group Name - Exact group name to open with this slot. */
  "groupName"?: string
}
  /** Preferences accessible in the `open-group-slot-5` command */
  export type OpenGroupSlot5 = ExtensionPreferences & {
  /** Group Name - Exact group name to open with this slot. */
  "groupName"?: string
}
}

declare namespace Arguments {
  /** Arguments passed to the `manage-app-groups` command */
  export type ManageAppGroups = {}
  /** Arguments passed to the `open-group-slot-1` command */
  export type OpenGroupSlot1 = {}
  /** Arguments passed to the `open-group-slot-2` command */
  export type OpenGroupSlot2 = {}
  /** Arguments passed to the `open-group-slot-3` command */
  export type OpenGroupSlot3 = {}
  /** Arguments passed to the `open-group-slot-4` command */
  export type OpenGroupSlot4 = {}
  /** Arguments passed to the `open-group-slot-5` command */
  export type OpenGroupSlot5 = {}
}


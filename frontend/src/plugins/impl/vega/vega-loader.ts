/* Copyright 2024 Marimo. All rights reserved. */
// @ts-expect-error - no types
import * as vl from "vega-loader";
import type { DataFormat } from "./types";
import type { DataType } from "./vega-loader";

// Re-export the vega-loader functions to add TypeScript types

export function read<T = object>(
  data: string | Record<string, unknown> | Array<Record<string, unknown>>,
  format:
    | DataFormat
    | {
        type: DataFormat["type"];
        parse: "auto";
      }
    | {
        type: DataFormat["type"];
        parse: Record<string, DataType>;
      }
    | undefined,
): T[] {
  return vl.read(data, format);
}

export function createLoader(): {
  load: (
    url: string,
  ) => Promise<
    string | Record<string, unknown> | Array<Record<string, unknown>>
  >;
  http: (url: string) => Promise<string>;
} {
  return vl.loader();
}

export type VegaDataType =
  | "boolean"
  | "integer"
  | "number"
  | "date"
  | "string"
  | "unknown";

export type FieldTypes = Record<string, VegaDataType>;

export const typeParsers: Record<VegaDataType, (value: string) => unknown> =
  vl.typeParsers;

export type { DataType } from "@/core/kernel/messages";

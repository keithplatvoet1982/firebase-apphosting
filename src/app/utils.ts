import { randomUUID } from "node:crypto";
import { initializeApp, getApps } from "firebase-admin/app";

export const app = getApps()[0] || initializeApp()

export function getDateString() {
  return new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "long",
    timeZone: "UTC",
  });
}

export function getRandomUUID() {
  return randomUUID();
}


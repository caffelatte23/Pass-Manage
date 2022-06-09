import { app, BrowserWindow } from "electron";

app.whenReady().then(() => {
  new BrowserWindow({ width: 1000, height: 600 }).loadURL(
    "http://localhost:3000"
  );
});

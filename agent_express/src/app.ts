import express from "express";
import * as nodeDiskInfo from "node-disk-info";
import packageJson from "../package.json";
import si from "systeminformation";

const app = express();

const { PORT = 3000 } = process.env;

app.get("/status", async (req, res) => {
  try {
    const diskInfo = await nodeDiskInfo.getDiskInfo();
    const memory = process.memoryUsage();
    const system = await si.system();
    const cpu = await si.cpu();
    const mem = await si.mem();
    const hdd = await si.disksIO();
    const graphics = await si.graphics();
    const networkInterfaces = await si.networkInterfaces();
    const networkStats = await si.networkStats();
    res.send({
      version: packageJson.version,
      akashDSEQ: process.env.AKASH_DSEQ,
      date: new Date(),
      system,
      cpu,
      mem,
      hdd,
      networkInterfaces,
      networkStats,
      graphics,
      diskInfo,
      memory,
    });
  } catch (e) {
    res.status(500).send({ error: (e as any).message });
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

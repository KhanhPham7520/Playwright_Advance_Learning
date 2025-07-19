import path from "path";
import fs from 'fs';

export const readConfig = () => {
    const env = (process.env.ENV || 'dev').trim();

    const dataFilePath = path.join(process.cwd(), `data/${env}.json`);
    const jsonObject = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

    return jsonObject;
}
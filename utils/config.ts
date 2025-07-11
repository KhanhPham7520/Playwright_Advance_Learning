import path from 'path';
import fs from 'fs';
import * as dotenv from 'dotenv';

export const readConfig = () => {
    const env = (process.env.ENV || 'dev').trim();
    dotenv.config({ path: `.env.${env}` });
    const dataFilePath = path.join(process.cwd(), `data/${env}.json`);
    const jsonObject = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

  Object.entries(jsonObject).forEach(([key, value]) => {
    process.env[key] =  String(value); // đảm bảo mọi giá trị là string
  });
  
    return jsonObject;
}
import * as sequelize from "sequelize";

import db from "../db/db";
import { ClientFactory } from "./client";

export const Client = ClientFactory(db.sequelize);
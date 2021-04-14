import { Op } from "sequelize"
import { BuildOptions, Model } from "sequelize/types"

interface DataBaseModel extends Model<any, any> { }

type ModelStatic = typeof Model & {
  new(values?: object, options?: BuildOptions): DataBaseModel;
}

type sumParams = {
  model: ModelStatic;
  identifyField: string;
  identifyValue?: string | number;
  sumField: string;
  date?: string;
}

export const sumRecords = async ({
  model,
  identifyField,
  identifyValue,
  sumField,
  date,
}: sumParams) => {
  let summary;
  if (identifyValue && date) {
    summary = await model.sum(sumField, {
      where: {
        [identifyField]: identifyValue,
        currency: "USD",
        createdAtString: {
          [Op.startsWith]: date
        }
      }
    });
  };

  return summary;
}
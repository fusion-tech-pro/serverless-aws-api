export const createFilter = (params: any) => {
  const options: any = {
    where: {}
  };

  options.limit = params.perPage || 5;
  let page;
  if (isNaN(params.page) || params.page < 1) {
    page = 1;
  } else {
    page = params.page;
  }

  options.offset = (page - 1) * options.limit;
  const orderBy = params.orderBy || 'createdAt';
  const sortType = params.sortType || 'DESC';
  options.order = [[orderBy, sortType]];

  if (params.currency) {
    const currencyFilter = JSON.parse(params.currency);
    options.where.currency = currencyFilter.length > 0
      ? currencyFilter
      : ["USD", "EUR"]
  }

  if (params.clientId) {
    options.where.clientId = params.clientId
  }

  return options;
}

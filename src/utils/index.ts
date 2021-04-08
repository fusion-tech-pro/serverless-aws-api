export const createFilter = (params: any) => {
  const options: any = {};
  
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

  return options;

}

const UsePagination = (arr, amount) => {
  return arr?.reduce(
    (rows, key, index) =>
      (index % amount === 0
        ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows,
    []
  );
};

export default UsePagination;

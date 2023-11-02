export function filterBillTableData(
  bills,
  filter,
  searchTerm,
  selectedCategory
) {
  return bills.filter((row) => {
    const values = Object.values(row).map((value) =>
      (value || "").toString().toLowerCase()
    );

    if (filter === "tarjeta") {
      return (
        row.payment_method &&
        values.some((value) => {
          return value.includes(searchTerm.toLowerCase());
        }) &&
        (selectedCategory === "Todas" || row.category.name === selectedCategory)
      );
    } else if (filter === "efectivo") {
      return (
        !row.payment_method &&
        values.some((value) => {
          return value.includes(searchTerm.toLowerCase());
        }) &&
        (selectedCategory === "Todas" || row.category.name === selectedCategory)
      );
    } else {
      return (
        values.some((value) => {
          return value.includes(searchTerm.toLowerCase());
        }) &&
        (selectedCategory === "Todas" || row.category.name === selectedCategory)
      );
    }
  });
}

export function filterEarningTableData(earnings, searchTerm, selectedCategory) {
  return earnings.filter((row) => {
    const values = Object.values(row).map((value) =>
      (value || "").toString().toLowerCase()
    );
    return (
      values.some((value) => {
        return value.includes(searchTerm.toLowerCase());
      }) &&
      (selectedCategory === "Todas" || row.category.name === selectedCategory)
    );
  });
}

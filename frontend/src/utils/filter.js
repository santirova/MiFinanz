export function filterTableData(bills, filter, searchTerm, selectedCategory) {
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
        (selectedCategory === "Todas" ||
          row.CategoryBill.name === selectedCategory)
      );
    } else if (filter === "efectivo") {
      return (
        !row.payment_method &&
        values.some((value) => {
          return value.includes(searchTerm.toLowerCase());
        }) &&
        (selectedCategory === "Todas" ||
          row.CategoryBill.name === selectedCategory)
      );
    } else {
      return (
        values.some((value) => {
          return value.includes(searchTerm.toLowerCase());
        }) &&
        (selectedCategory === "Todas" ||
          row.CategoryBill.name === selectedCategory)
      );
    }
  });
}

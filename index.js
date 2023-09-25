const employee = {
    name: "John",
    streetAddress: "123 Main Street"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updateEmployeeList = { ...employee };
    updateEmployeeList[key] = value;
    return updateEmployeeList;
}

const newList = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Bob"
);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
const newEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Harold");

function deleteFromEmployeeByKey(employee, key) {
    const newList = { ...employee };
    delete newList[key];
    return newList;
}
deleteFromEmployeeByKey(employee, "name");

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
destructivelyDeleteFromEmployeeByKey(employee, "name");
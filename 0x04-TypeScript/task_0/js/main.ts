interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 19,
  location: 'Accra',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Dough',
  age: 23,
  location: 'Lagos',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tableHeader = document.createElement('tr');

const headerName = document.createElement('th');
headerName.textContent = 'First Name';
const headerLocation = document.createElement('th');
headerLocation.textContent  = 'Location';

tableHeader.appendChild(headerName);
tableHeader.appendChild(headerLocation);
table.appendChild(tableHeader);

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);

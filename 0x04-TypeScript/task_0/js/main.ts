interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const alex: Student = {
    firstName: 'Alex',
    lastName: 'Sifuna',
    age: 35,
    location: 'Nairobi',

}

const solomon: Student = {
    firstName: 'Solomon',
    lastName: 'Uche',
    age: 24,
    location: 'Lagos',

}

const studentsList: Array<Student> = [
    alex,
    solomon
]

var table = document.createElement('table');

var headerRow = document.createElement('tr');

var header1 = document.createElement('th');
header1.textContent = 'First Name';

var header2 = document.createElement('th');
header2.textContent = 'Location';

// Append the table headers to the header row
headerRow.appendChild(header1);
headerRow.appendChild(header2);

// Append the header row to the table
table.appendChild(headerRow);

studentsList.forEach(student => {
    var row = document.createElement('tr');
    var name = document.createElement('td');
    name.textContent = student.firstName;
    var loc = document.createElement('td');
    loc.textContent = student.location;
    row.appendChild(name);
    row.appendChild(loc);
    table.appendChild(row)
})
document.body.appendChild(table);
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('Students Must be an array');
    }
    if (!students.every((student) => typeof student === 'string')) {
      throw new TypeError('All students must be strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(value) {
    // setter for name attribute
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  get name() {
    // getter for name attribute
    return this._name;
  }

  set length(value) {
    // setter for length attribute
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  get length() {
    // getter for length attribute
    return this._length;
  }

  set students(value) {
    // setter for students
    if (!Array.isArray(value)) {
      throw new TypeError('Students Must be an array');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('All students must be strings');
    }
    this._students = value;
  }

  get students() {
    // getter for students attribute
    return this._students;
  }
}

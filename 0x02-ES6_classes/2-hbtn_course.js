export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new Error('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new Error('Students Must be an array');
    }
    if (!students.every((student) => typeof student === 'string')) {
      throw new Error('All students must be strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    // getter for name attribute
    return this._name;
  }

  get length() {
    // getter for length attribute
    return this._length;
  }

  get students() {
    // getter for students attribute
    return this._length;
  }
}

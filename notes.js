const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your notes...';

const addNote = (title, body) => {
  console.log('hovno');
  const notes = loadNotes();
  const duplicateNotes = checkDuplicateNotes(notes);
  if (duplicateNotes.length === 0) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.blue('New note added!'));
  } else {
    console.log(chalk.red('Note title taken!'));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSyncs('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const checkDuplicateNotes = notes => notes.filter(note => note.title === title);

module.exports = { getNotes, addNote };

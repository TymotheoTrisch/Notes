const backendURL = 'http://localhost:3000/api';


async function getNotes() {
  try {
    await axios.get(`${backendURL}/notes`).then(response => {
      console.log(response.data)
      loadNotes(response.data);
      
      }).catch(erro => console.error(erro));
    } catch (error) {
    console.error('Erro ao buscar notas:', error);
    throw error;
  }
}


async function createNote(title, description) {
  try {
    await axios.post(`${backendURL}/notes`, { title, description }).then(resposta => {
      console.log(resposta)
      // getNotes();
      
    }).catch(erro => console.error(erro));
  
  } catch (error) {
    console.error('Erro ao criar nota:', error);
    throw error;
  }
}


async function updateNote(id, title, description) {
  try {
    await axios.put(`${backendURL}/notes/${id}`, { title, description }).then(resposta =>{
      console.log(resposta)
      // getNotes();
      
    }).catch(erro => console.error(erro));

  } catch (error) {
    console.error('Erro ao atualizar nota:', error);
    throw error;
  }
}


async function deleteNote(id) {
  try {
    await axios.delete(`${backendURL}/notes/${id}`).then(resposta => {
      console.log(resposta)
      // getNotes();
      
    }).catch(erro => console.error(erro));

  } catch (error) {
    console.error('Erro ao excluir nota:', error);
    throw error;
  }
}


async function loadNotes(note) {
  const notes = note;
  const notesList = document.getElementById('notes-list');
  notesList.innerHTML = '';

  if (Array.isArray(notes) && notes.length > 0) {
    for (const note of notes) {
      const noteElement = document.createElement('div');
      noteElement.innerHTML = `<p><strong>${note.title}</strong></p><p>${note.description}</p>`;
      notesList.appendChild(noteElement);
    }
  } else {
    notesList.innerHTML = 'Nenhuma nota criada.';
  }
}


document.addEventListener('DOMContentLoaded', getNotes());


document.getElementById('add-note-form').addEventListener('submit', async function (e) {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  await createNote(title, description);
  resetFormFields(this);
  getNotes();
});

document.getElementById('update-note-form').addEventListener('submit', async function (e) {
  e.preventDefault();
  const id = document.getElementById('note-id').value;
  const title = document.getElementById('update-title').value;
  const description = document.getElementById('update-description').value;
  await updateNote(id, title, description);
  resetFormFields(this);
  getNotes();
});

document.getElementById('delete-note-form').addEventListener('submit', async function (e) {
  e.preventDefault();
  const id = document.getElementById('delete-id').value;
  await deleteNote(id);
  resetFormFields(this);
  getNotes();
});

function resetFormFields(form) {
  const inputElements = form.querySelectorAll('input, textarea');
  for (const input of inputElements) {
    input.value = '';
  }
}

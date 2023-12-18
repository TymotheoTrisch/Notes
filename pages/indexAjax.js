/** @format */
const backendURL = 'http://localhost:3000/api';


function getNotes() {
	const xhr = new XMLHttpRequest();

	xhr.open("GET", `${backendURL}/notes`, true);

	xhr.onload = function () {
		if (xhr.status >= 200 && xhr.status < 300) {
			const response = JSON.parse(xhr.responseText);
			console.log(response);

		} else {
			console.error("Erro na solicitação:", xhr.statusText);
		}
	};

	xhr.onerror = function () {
		console.error("Erro na solicitação. Verifique sua conexão de rede.");
	};

	xhr.send();
}

function createNote(title, description) {
	const xhr = new XMLHttpRequest();

	xhr.open("POST", `${backendURL}/notes`, true);
	xhr.setRequestHeader("Content-Type", "application/json");

	const data = JSON.stringify({title, description});

	xhr.onload = function () {
		if (xhr.status >= 200 && xhr.status < 300) {
			const response = JSON.parse(xhr.responseText);
			console.log(response);
			
		} else {
			console.error("Erro na solicitação:", xhr.statusText);
		}
	};

	xhr.onerror = function () {
		console.error("Erro na solicitação. Verifique sua conexão de rede.");
	};

	xhr.send(data);
}

function updateNote(id, title, description) {
    const xhr = new XMLHttpRequest();
  
    xhr.open("PUT", `${backendURL}/notes/${id}`, true);
    xhr.setRequestHeader("Content-Type", "application/json");
  
    const data = JSON.stringify({ title, description });
  
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);

      } else {
        console.error('Erro na solicitação:', xhr.statusText);
      }
    };
  
    xhr.onerror = function () {
      console.error('Erro na solicitação. Verifique sua conexão de rede.');
    };
  
    xhr.send(data);
  }
  

function deleteNote(id) {
	const xhr = new XMLHttpRequest();

	xhr.open("DELETE", `${backendURL}/notes/${id}`, true);

	xhr.onload = function () {
		if (xhr.status >= 200 && xhr.status < 300) {
			const response = JSON.parse(xhr.responseText);
			console.log(response);

		} else {
			console.error("Erro na solicitação:", xhr.statusText);
		}
	};

	xhr.onerror = function () {
		console.error("Erro na solicitação. Verifique sua conexão de rede.");
	};

	xhr.send();
}

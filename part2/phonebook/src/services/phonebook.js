import axios from 'axios';
const rootUrl = 'http://localhost:3001/persons';

const getAll = () => {
  return axios
    .get(rootUrl)
    .then(response => response.data);
};

const create = (newContact) => {
  return axios
    .post(rootUrl, newContact)
    .then(response => response.data);
};

const deleteContact = (id) => {
  return axios
    .delete(`${rootUrl}/${id}`)
    .then(response => response.data);
};

const update = (contact) => {
  return axios
    .put(`${rootUrl}/${contact.id}`, contact)
    .then(response => response.data);
};

export default { getAll, create, deleteContact, update };
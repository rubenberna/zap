import variables from '../../db/variables/variables'

export default {
  fetchZapfloorRooms(token) {
    return fetch(`${variables.root}v1/meeting_rooms`, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        'Authorization': `Bearer ${ token }`
      }
    })
    .then(response => response.json())
    .then(function(data) { return data.data} )
    .catch(err => console.log(err))
  },

  fetchImage(id, token) {
    return fetch(`${variables.root}v1/meeting_rooms/${id}/images`, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        'Authorization': `Bearer ${ token }`
      }
    })
    .then(response => response.json())
    .then(function(data) { return data.data[0].attributes.image_url} )
    .catch(err => console.log(err))
  }
}

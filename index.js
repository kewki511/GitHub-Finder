"use strict";

function list(param){

	$('#results-list').empty();

	for(let i = 0; i < param.length; i++){
		console.log(param[i].name);
		console.log(param[i].url);

		$('#results-list').append(
      `<li>
      <h3>${param[i].name}</h3>
			<a href = "${param[i].url}">${param[i].url}</a>
			</li>`
    )
	};

	$('#results').removeClass('hidden');
};

function search(name){
	const url = 'https://api.github.com/users/' + name + '/repos';
	console.log(url);

	fetch(url)
	.then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => list(responseJson));
}

function start(){
	 $('form').submit(event => {
		 event.preventDefault();
		 const username = $('#js-id').val();
		 search(username);
});
}

$(start());
$('#submit').click(() => {
	if ($('#number').val()) {
		$.get('https://pokeapi.co/api/v2/pokemon/' + $('#number').val(), data => {
			$('#content').html(
				`<h1>${data.name}</h1><img src="${data.sprites.front_default}" width="300px" height="300px"/>`
			);
		});
	}
});

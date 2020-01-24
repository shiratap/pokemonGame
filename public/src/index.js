$('#submit').click(() => {
	if ($('#number').val()) {
		$.get('https://pokeapi.co/api/v2/pokemon/' + $('#number').val(), data => {
			$('#content').prepend(`
				<div class="col s3">
					<div class="card">
						<div class="card-image">
							<img src="${data.sprites.front_default}"/>
						</div>
						<div class="card-content">
							<p class="card-text">${data.name.charAt(0).toUpperCase() +
								data.name.slice(1)}</p>
						</div>
					</div>
				</div>
				`);
		});
	}
});

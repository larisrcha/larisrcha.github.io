export default () => {
    const container = document.createElement('div');

    const template = `
    <section id="perfil">

	<div id="sidebar">
		<div id="icon">
			<img src="./assets/img/cat.jpg">
		</div>
	</div>
		<div class="secao__texto">
			<p class="secao__texto__p1">Olá, me chamo</p>
			<h1 class="titulo">Larissa Rocha</h1>
			<p class="secao__texto__p2">Frontend Developer</p>

			<div class="bnt-container">
				<button class="btn btn-color-2" onclick="window.open('https://drive.google.com/file/d/1R65BHUmpYTSn0FVKn4Ibdvd-Cwz4EYDF/view?usp=share_link')">Currículo
				</button>
			</div>

			<div id="social-container">
				<img src="./assets/img/Linkedin.png" class="icon" onclick="location.href='https://www.linkedin.com/in/larissa-rochas/'">
				<img src="./assets/img/github.png" class="icon" onclick="location.href='https://github.com/larisrcha'">
			</div>

		</div>
	</section>
    `;

    container.innerHTML = template;

    return container;
}
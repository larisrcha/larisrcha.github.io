export default () => {
    const container = document.createElement('div');

    const template = ` <section id="sobre">
    <p class="secao__texto__p1"> Conheça mais</p>
    <h1 class="titulo">Sobre mim</h1>
    <div class="secao-container">
        <div class="secao__pic-container">
            <img class="sobre-pic" src="./assets/img/cat2.jpg">
        </div>
        <div class="sobre-detalhes-container">
            <div class="sobre-container">
                <div class="detalhes-container">
                    <img src="https://thriving-dragon-a3fcd9.netlify.app/assets/experience.png" class="icon">
                    <h3>Experiências</h3>
                    <p>Frontend</p>
                </div>
                <div class="detalhes-container">
                    <img src="https://thriving-dragon-a3fcd9.netlify.app/assets/education.png" class="icon">
                    <h3>Educação</h3>
                    <p>Estácio</p>
                </div>
            </div>
            <div class="texto-container">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem unde eligendi, officiis libero cupiditate sequi aliquid impedit a ullam, amet id quod rerum odio suscipit iusto deleniti. Reiciendis, odio adipisci!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem unde eligendi, officiis libero cupiditate sequi aliquid impedit a ullam, amet id quod rerum odio suscipit iusto deleniti. Reiciendis, odio adipisci!</p>
            </div>
        </div>
    </div>
</section>


`;

    container.innerHTML = template;

    return container;
}
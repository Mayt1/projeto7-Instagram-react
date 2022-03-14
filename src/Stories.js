export default function Stories() {
    const stories = [""]

    return (
        <div class="stories">
          <Story url='assets/imagens/dragonball_1.jpg' user="DragonBall" alt="Dragonballimage"/>

          <Story url='assets/imagens/bleach_1.jpg' user="Bleach" alt="bleachimage"/>

          <Story url='assets/imagens/bokunohero_1.png' user="BokuNoHero" alt="bokunoheroimage"/>

          <Story url='assets/imagens/shingeky_1.png' user="ShingekyNoKyojin" alt="erenimage"/>
          
          <Story url='assets/imagens/onepiece_1.jpg' user="Joyboy" alt="mugiwarasimage"/>

          <Story url='assets/imagens/naruto_1.jpg' user="Naruto" alt="narutoimage"/>

          <Story url='assets/imagens/oyasumipunpun_1.png' user="OyasumiPunpun" alt="punpunimage"/>

          <Story url='assets/imagens/gato-telefone 1.png' user="Gatito" alt="gatitoimage"/>

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>

    );
}

function Story(props) {
    return (
            <div class="story">
                <div class="imagem">
                    <img src={props.url} alt-text={props.alt}/>
                </div>
                <div class="usuario">
                    {props.user}
                </div>
            </div>
    );
}
export default function Stories() {
    const stories = [
        {
            url: 'assets/imagens/dragonball_1.jpg',
            user: "DragonBall",
            alt: "Dragonballimage"
        },
        {
            url: 'assets/imagens/bleach_1.jpg',
            user: "Bleach",
            alt: "bleachimage"
        },
        {
            url: 'assets/imagens/bokunohero_1.png',
            user: "BokuNoHero",
            alt: "bokunoheroimage"
        },
        {
            url: 'assets/imagens/shingeky_1.png',
            user: "ShingekyNoKyojin",
            alt: "erenimage"
        },
        {
            url: 'assets/imagens/onepiece_1.jpg',
            user: "Joyboy",
            alt: "mugiwarasimage"
        },
        {
            url: 'assets/imagens/naruto_1.jpg',
            user: "Naruto",
            alt: "narutoimage"
        },
        {
            url: 'assets/imagens/oyasumipunpun_1.png',
            user: "OyasumiPunpun",
            alt: "punpunimage"
        },
        {
            url: 'assets/imagens/gato-telefone 1.png',
            user: "Gatito",
            alt: "gatitoimage"
        },
    ]

    return (
        <div class="stories">
            {stories.map(stories => <Story url={stories.url} user={stories.user} alt={stories.alt} />)}
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
                <img src={props.url} alt-text={props.alt} />
            </div>
            <div class="usuario">
                {props.user}
            </div>
        </div>
    );
}
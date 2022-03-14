export default function Posts() {
    return (
        <div class="posts">

            <Post
                urlUser='assets/imagens/meowed 1.png'
                user="Gatito"
                alt="Gatitoimage"
                urlContent='assets/imagens/gato-telefone 1.png'
                urlUltimoLike='assets/imagens/respondeai 2.png'
                userUltimoLike="respondeai"
                nroLikes="101.523"
            />

            <Post
                urlUser='assets/imagens/meowed 1.png'
                user="Gatito"
                alt="Gatitoimage"
                urlContent='assets/imagens/gato-telefone 1.png'
                urlUltimoLike='assets/imagens/respondeai 2.png'
                userUltimoLike="respondeai"
                nroLikes="101.523"
            />

        </div>
    );
}

function Post(props) {
    return (

        <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={props.urlUser} alt-text={props.alt} />
                <p>{props.user}</p>
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src={props.urlContent} />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.urlUltimoLike} />
                <div class="texto">
                  Curtido por <strong>{props.userUltimoLike}</strong> e <strong>outras {props.nroLikes} pessoas</strong>
                </div>
              </div>
            </div>
          </div>

    );
}
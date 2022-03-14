export default function SideBar() {
    const user = [
        {
            urlUserImg:'assets/imagens/catanacomics 1.png',
            urlUserImgAlt:"catanacomics1Imagen",
            userAccount:"yctor.ulian",
            userName:"Victor Ulian"
        }
    ]
    
    const sugestion = [
        {
            urlUserImg:'assets/imagens/luffy.jpg',
            userAccount:"luffy.oficial",
            situation:"Segue você"
        },
        {
            urlUserImg:'assets/imagens/frutaluffy.jpg',
            userAccount:"fruta.luffy",
            situation:"Seguido(a) por jushijushinomi"
        },
        {
            urlUserImg:'assets/imagens/nika.jpg',
            userAccount:"nika.deus.do.sol",
            situation:"Segue você"

        },
        {
            urlUserImg:'assets/imagens/joyboy.jpg',
            userAccount:"joyboy",
            situation:"Novo no Instagram"
        },
        {
            urlUserImg:'assets/imagens/goldroger.jpg',
            userAccount:"gol.d.roger",
            situation:"Sugestões para você"
        }
    ]

    return (
        <div class="sidebar">

            {user.map(user => <SideBarUser
                urlUserImg={user.urlUserImg}
                urlUserImgAlt={user.urlUserImgAlt}
                userAccount={user.userAccount}
                userName={user.userName}
            />)}

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {sugestion.map(sugestion => <SideBarSugestion
                    urlUserImg={sugestion.urlUserImg}
                    userAccount={sugestion.userAccount}
                    situation={sugestion.situation}
                />)} 
                
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>

    );
}

function SideBarUser(props) {
    return (
        <div class="usuario">
            <img src={props.urlUserImg} />
            <div class="texto">
                <strong>{props.userAccount}</strong>
                {props.userName}
            </div>
        </div>
    );
}

function SideBarSugestion(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.urlUserImg} />
                <div class="texto">
                    <div class="nome">{props.userAccount}</div>
                    <div class="razao">{props.situation}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>

    );
}
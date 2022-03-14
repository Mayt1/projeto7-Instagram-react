export default function SideBar() {
    return (
        <div class="sidebar">
            <SideBarUser
                urlUserImg='assets/imagens/catanacomics 1.png'
                urlUserImgAlt="catanacomics1Imagen"
                userAccount="yctor.ulian"
                userName="Victor Ulian"
            />
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                <SideBarSugestion
                    urlUserImg='assets/imagens/dragonball_1.jpg'
                    userAccount="DragonBall"
                    situation="Segue você"
                />
                <SideBarSugestion
                    urlUserImg='assets/imagens/onepiece_1.png'
                    userAccount="frutadoluffy"
                    situation="Seguido(a) por jushijushinomi"
                />
                <SideBarSugestion
                    urlUserImg='assets/imagens/dragonball_1.jpg'
                    userAccount="DragonBall"
                    situation="Segue você"
                />
                <SideBarSugestion
                    urlUserImg='assets/imagens/dragonball_1.jpg'
                    userAccount="DragonBall"
                    situation="Segue você"
                />
                <SideBarSugestion
                    urlUserImg='assets/imagens/dragonball_1.jpg'
                    userAccount="DragonBall"
                    situation="Segue você"
                />
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
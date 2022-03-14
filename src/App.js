// arquivo App.js

import NavBar from './NavBar';
import Stories from './Stories';
import Posts from './Posts';
import SideBar from './SideBar';
//import Menu from './Menu';

export default function App() {
    return (
        <div>
			<NavBar />
            <div class="corpo">
                <div class="esquerda">
                    <Stories />
                    <Posts />
                    
                </div>
                <SideBar />
            </div>
		</div>
    );
}
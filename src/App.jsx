import gsap from "gsap";
import {Draggable} from "gsap/Draggable";

import {Navbar, Welcome, Dock, Home} from "#components";
import {Finder, Image, Resume, Safari, Terminal, Text, Contact, Photos} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
    return (
       <main>
           <Navbar />
           <Welcome />
           <Dock />
           <Home />

           <Terminal />
           <Safari />
           <Resume />
           <Photos />
           <Finder />
           <Text />
           <Image />
           <Contact />
       </main>
    );
};

export default App;
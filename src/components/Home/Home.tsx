import { Cards } from "./Cards/Cars";
import { Slider } from "./Slider/Slider";
import { About } from "./About/About";
import { Experts } from "./Experts/Experts";

export function Home() {
  
    return (
        <>
        <Slider/>
        <Cards/>
        <About/>
        <Experts/>
        </>
        
    );
}
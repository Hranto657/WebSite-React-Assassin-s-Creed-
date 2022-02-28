import React from "react";
import style from "./main.module.scss";
import image from "../images/mainimage.png";


export default function Main() {
  return(
    <>
      <div className={style.main}>
        <img src={image} alt="god of war" className={style.img}></img>
        <div className={style.text}>
          <h1 className={style.h1}>God <span>Of</span> War</h1>
          <p>God of War is an action-adventure game franchise created by David Jaffe at Sony's Santa Monica Studio. 
            It began in 2005 on the PlayStation 2 (PS2) video game console, and has become a flagship title for the PlayStation 
            and, consisting of eight games across multiple platforms with a ninth currently in development. Based in ancient 
            mythology, the story follows the titular protagonist, Kratos, a Spartan warrior and later the God of War, who was 
            tricked into killing his family by his former master, the original Greek god of war Ares. This sets off a series
            of events that leads to wars with the mythological pantheons. The Greek mythology era of the series sees Kratos 
            follow a path of vengeance due to the machinations of the Olympian gods, while the Norse mythology era, which 
            introduces his son Atreus as a secondary protagonist, shows an older Kratos on a path of redemption, which
            inadvertently brings the two into conflict with the Norse gods. 
          </p>
          <p>Santa Monica has developed all main entries, while Ready at Dawn and Javaground/Sony Online Entertainment-
            Los Angeles (SOE-LA) developed the three side games. Sony Interactive Entertainment (SIE) has published all 
            games except the mobile phone installment, which was published by Sony Pictures Digital. The first seven games 
            make up the Greek era of the franchise. God of War (2005), God of War II (2007), and God of War III (2010) 
            comprise its main trilogy; the first two were released on the PS2 with the third on the PlayStation 3 (PS3). 
            A prequel, Ascension (2013), was also released for the PS3. Other games include Chains of Olympus (2008) and 
            Ghost of Sparta (2010) for the PlayStation Portable (PSP) and Betrayal (2007) for mobile phones that supported 
            the Java Platform, Micro Edition (Java ME). The Norse era began with the 2018 installment that was also titled 
            God of War and released for the PlayStation 4 (PS4) and later Microsoft Windows in January 2022. It was 
            accompanied by a short prequel, A Call from the Wilds (2018), a text-based game through Facebook Messenger. 
            A sequel, Ragnarök, is in development for a 2022 release on the PlayStation 4 and PlayStation 5 and will 
            be the finale to the Norse era.
          </p>
          <p>Games in the series have been praised as some of the best action games of all time. The series has received 
            numerous awards, including several Game of the Year recognitions for the 2005 and 2018 installments. Some games 
            have also been remastered for newer PlayStation platforms. As of November 2020, the franchise has sold over 51 
            million games worldwide. Strong sales and support of the series led to the franchise's expansion into other media, 
            such as three comic book series and three novels. A film adaptation of the original installment had been in 
            development but was ultimately canceled. Merchandise includes artwork, clothing, toys, and prop replicas, as well as 
            the games' soundtracks, including a heavy metal album, Blood & Metal (2010), featuring original music by various 
            bands who were inspired by the series.
          </p>
        </div> 
      </div>
    </>
  )
}
import React from "react";
import style from "./kratos.module.scss";
import image from "../../images/kratos.png";

export default function Kratos() {
  return(
    <div className="container-fluid">
      <div className={style.main }>
        <div className={style.sidebar}>
          <h1 className="text-center">Kratos</h1>
          <img src={image} alt="Kratos"></img>
          <div className={style.box}>
            <h1>Nationality:</h1>
            <p>Greek</p>
          </div>
          <div className={style.box}>
            <h1>Origin:</h1>
            <p>	Sparta, Greece</p>
          </div>
          <div className={style.box}>
            <h1>Home:</h1>
            <p>Sparta, Greece</p>
          </div>
          <div className={style.box}>
            <h1>Father:</h1>
            <p>Zeus</p>
          </div>
          <div className={style.box}>
            <h1>Mother:</h1>
            <p>Callisto</p>
          </div>
          <div className={style.box}>
            <h1>Brother:</h1>
            <p>Deimos</p>
          </div>
          <div className={style.box}>
            <h1>Species:</h1>
            <p>God</p>
          </div>
        </div>
        <div className={style.text}>
          <p>Throughout the Greek era of the series, Kratos is portrayed as a Spartan warrior, who becomes known as the 
            "Ghost of Sparta" after accidentally killing his family due to Ares' trickery. He later avenges the deaths of
            his family and becomes the God of War after killing Ares. Kratos is eventually revealed to be a demigod and 
            the son of Zeus, who later betrays him. Kratos embarks on several adventures in attempts to avert disaster or 
            to change his fate. He is usually portrayed as being oblivious to all else and is stoic, bloodthirsty, and 
            arrogant in nature. He often engages in morally ambiguous activities and performs acts of extreme violence. 
            Vengeance is a central theme of the Greek era, and installments focus on Kratos' origins and his relationships 
            with his family and the Olympian gods. In the Norse era of the series, Kratos finds himself controlling his 
            rage and learning how to truly be a father and mentor to his son, Atreus. Along their journey, they combat 
            monsters and gods of the Norse realm, of whom they make enemies, which leads to the pair trying to prevent 
            Ragnarök.In designing Kratos, God of War (2005) creator and game director David Jaffe attempted to create a character 
            at looked brutal, but did not resemble a typical traditional Greek hero.The character would not wear traditional 
            armor as Jaffe wanted him to be individualistic.Although the idea of using a fully masked character was approved, 
            the concept was abandoned as the design seemed soulless and lacked a defined personality.Some models included 
            unconventional elements, such as portraying him carrying an infant on his back,while others had excessive detail, 
            such as hair and other "flowing things".Charlie Wen, director of visual development on God of War (2005) and 
            God of War II, was responsible for designing Kratos. Wen said that his direction for designing Kratos was as 
            much influenced by similarly themed films as it was by pop culture, which led him to conceive Kratos on a 
            series of napkins at a restaurant, having forgotten his sketchbook, introducing the idea of the double-chained 
            blades and eventually Kratos' iconic design.[12][13] Double-chained blades were chosen as Kratos' signature 
            weapon because they emphasized the character's animal nature while also allowing combat to remain fluid.Wen 
            visualized the double-chained blades activating simultaneously as Kratos threw them with a balance of 
            ferocity and accuracy. Jaffe said of the final version of the character, "[Kratos] may not totally feel at 
            home in Ancient Greece from a costume standpoint, I think he achieves the greater purpose which is to give 
            players a character who they can play who really does just let them go nuts and unleash the nasty fantasies 
            that they have in their head.
          </p>
        </div> 
      </div>
    </div>
    
  );
}
import React from "react";
import style from "./story.module.scss";

export default function Story() {
  return(
    <div className={style.text}>
      <h1 className={style.h1}>Gameplay</h1>
      <p>The series consists of seven single-player-only games, and one that includes multiplayer. 
        Throughout the first era, the games featured a third-person, fixed cinematic camera with the exception of Betrayal,
        which is the only installment to feature a 2D side-scrolling view. In 2018's God of War, the camera was switched 
        from being fixed and became an over-the-shoulder free camera. A first-person camera is featured in God of War III
        and Ascension.Throughout the series, the player controls the character Kratos in a combination of hack and slash 
        combat, platforming, and puzzle game elements to achieve goals and complete the story (platforming elements were 
        removed from 2018's God of War due to the camera change).2018's God of War adds Kratos' son Atreus, and although 
        the game is played entirely as Kratos, there are times when the player may choose to passively control Atreus 
        (a button is dedicated to Atreus, and he will fire an arrow from his bow depending on where the camera is pointed).
      </p>
      <p>Throughout the Greek era, Kratos' main weapon is a pair of double-chained blades that appear in three iterations:
        the Blades of Chaos, the Blades of Athena (or Athena's Blades), and the Blades of Exile. They each perform similarly,
        but differ in the types of combos and amount of damage each yields, as well as cosmetic differences. Other weapons 
        are also obtained during the games and vary in gameplay.Magic is also used, and four abilities are typically 
        acquired.God of War III differs in that instead of separate abilities, there are four primary weapons that 
        possess their own respective magic offensive. The game also features "Items"—additional secondary weapons 
        with limited usage, such as the Bow of Apollo. With each new game, most weapons and magic are lost via a 
        plot device, and a new arsenal of weapons and abilities are acquired during gameplay. Ascension differs 
        from the previous games in that instead of acquiring new weapons that are kept throughout the entire game, 
        the player collects up to five World Weapons (such as a sword or a javelin) that have limited usage. 
        When there is not a World Weapon equipped, the player can punch or kick foes as part of a new mechanic added to 
        the game. In 2018's God of War, Kratos' primary weapon is a magical battle axe called the Leviathan Axe. It 
        can be thrown and summoned back to his hand, similar to Thor's hammer Mjölnir. Later on in the game, he recovers 
        the Blades of Chaos, which perform similarly as they did during the Greek games, but with different abilities. 
        Both the Leviathan Axe and Blades of Chaos can be upgraded to use special magical attacks called runic attacks. 
        Each weapon has a light and heavy runic attack, and the player can choose which runic attacks to equip on the weapons.
      </p>
      <p>The series offers combo-based combat, and includes a quick time event (QTE) feature, also called context 
        sensitive attacks, which is initiated when the player has weakened a foe or to perform a defensive maneuver. 
        It allows limited control of Kratos during the QTE cinematic sequence; success ends the battle, while failure 
        usually results in damage to the player.As well as the QTE system, Ascension features a prompt-less 
        free-form system, allowing players the choice of when to attack or dodge based on the enemy's actions A grab 
        maneuver can be used on minor foes.2018's God of War changed this up; after an enemy has been weakened enough, 
        a prompt will appear above its head, and depending on the enemy, Kratos may rip it in half or grab them and throw 
        them into other enemies, among other possible outcomes. He will also jump on top of and ride large enemies, 
        such as ogres, causing them to attack other enemies, similar to the cyclopes in the Greek games.
      </p>
    </div>
  );
}
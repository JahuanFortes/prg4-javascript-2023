import "../css/style.css";
import { Actor, Engine, Vector, Label, Font, Color, Physics } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Background } from "./background";
import { Floor } from "./floor";
import { Ground } from "./ground";

export class Game extends Engine {
  constructor() {
    super({ width: 800, height: 700 });
    this.showDebug(true);
    Physics.useArcadePhysics();
    Physics.gravity = new Vector(0, 800);
    this.start(ResourceLoader).then(() => this.startGame());
    // als je geen plaatjes wil laden:
    // this.start().then(() => this.startGame())
  }

  startGame() {
    // voorbeeld tekstlabel
    let textField = new Label({
      font: new Font({
        family: "po",
        size: 32,
        color: Color.White,
      }),
    });

    textField.text = `Score: 0`;
    textField.pos = new Vector(20, 30);
    this.add(textField);

    //#region background
    // const bgImgsky = new Background();
    // this.add(bgImgsky);

    // const bgImgBuild2 = new Background();
    // this.add(bgImgBuild2);

    // const bgImgBuild3 = new Background();
    // this.add(bgImgBuild3);

    // const bgImgBuild4 = new Background();
    // this.add(bgImgBuild4);

    // const bgImgBuild5 = new Background();
    // this.add(bgImgBuild5);

    // const bgImgBuild6 = new Background();
    // this.add(bgImgBuild6);

    const bgImgBuild10 = new Background();
    this.add(bgImgBuild10);
    //#endregion background

    const floorImg = new Floor();
    this.add(floorImg);

    const groundtest = new Ground();
    this.add(groundtest);
    //#region player
    // const player = new Actor();
    // player.graphics.use(Resources.tosSprite);

    //#endregion player
  }
  // use gravety (false )
}

new Game();

export class Client {
  url: string;
  name: string;
  lastGamedDate: Date;
  constructor(url: string, name: string) {
    this.url = url;
    this.name = name;
    this.lastGamedDate = new Date()
  }
  getNext(post: Stone[][]):Stone[][] {
    return new Array();
  }
}

export class Ban {
  black: Client;
  white: Client;
  status: GameStatus;
  banmen: Stone[][];
  constructor(black: Client, white: Client, status: GameStatus) {
    this.black = black;
    this.white = white;
    this.status = status;
    this.banmen = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, -1, 0, 0, 0],
      [0, 0, 0, -1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ]
  }
}

export enum GameStatus {
  Waiting,
  Playing,
  Finished
}

export enum Stone {
  Black = -1,
  None = 0,
  White = 1,
}

let bans: Ban[] = [];
const Ban1: Ban = new Ban(
  new Client("url1", "name!!"),
  new Client("url1", "name!!"),
  GameStatus.Waiting
);
bans.push(Ban1);

console.log("module kiteru2");

module.exports = bans;


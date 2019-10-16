

class NoOfObjectCalculate{
  
  const usedSpace = [];
  const overall = [];
  /** accept 2d Array **/
  constructor(space) {
  
    Object.keys(space).forEach((k) => {
      Object.keys(space[k]).forEach((i) => {
        if (space[k][i] === 1) {
          this.usedSapces.push(`${parseInt(k)}|${parseInt(i)}`);
        }
      });
    });
  }
  
  
 removeElement = (index) => {
    this.usedSapces.splice(index,1);
 }
  
  
  findPosition = (pos) => {
    if (this.usedSapces.indexOf(pos) > -1 ) {
      this.removeElement( this.usedSapces.indexOf(pos));
      return true;
    }
    return false;
  };
  
  /** find Adjecent locations accordingly 
       top, left down, right
 **/
 findAdjecents = (pos, arr) => {
    let [rPos, cPos] = pos.split('|');
    rPos = parseInt(rPos);
    cPos = parseInt(cPos);

    if (this.usedSapces.indexOf(pos) > -1) {
      arr.push(pos);
      this.removeElement(this.usedSapces.indexOf(pos));
    }


    const pUp = `${rPos - 1}|${cPos}`;
    const pDonw = `${rPos + 1}|${cPos}`;
    const pLeft = `${rPos}|${cPos - 1}`;
    const pRight = `${rPos}|${cPos + 1}`;
  

    const up = this.findPosition(pUp);
    const down = this.findPosition(pDonw);
    const left = this.findPosition(pLeft);
    const right = this.findPosition(pRight);


  if (up) {
    arr.push(pUp);
    const res = this.findAdjecents(pUp, []);
    if (res.length > 0) {
      arr = arr.concat(res);
    }
  }

  if (down) {
    arr.push(pDonw);
    const res = this.findAdjecents(pDonw, []);
    if (res.length > 0) {
      arr = arr.concat(res);
    }
  }

  if (left) {
    arr.push(pLeft);
    const res = this.findAdjecents(pLeft, []);
    if (res.length > 0) {
      arr = arr.concat(res);
    }
  }

  if (right) {
    arr.push(pRight);
    const res = this.findAdjecents(pRight, []);
    if (res.length > 0) {
      arr = arr.concat(res);
    }
  }

    return arr;
  };
  
  iterateArr = () => {
    const result = this.findAdjecents(this.usedSapces[0], []);
    if (result.length > 0) {
      this.overall.push(result);
    }

    if (this.usedSapces.length > 0) {
      this.iterateArr();
    }
  };
   
   /** calculate the total object count **/
   gettotalObjects = () => {
    return overall.length;
   }
  
}

const space = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [1, 0, 1, 0, 1],
];

const obj = new NoOfObjectCalculate(space);

console.log( obj->gettotalObjects() );

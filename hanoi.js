const minMoves = disks => {
  if (disks < 3) {
    console.error("Need atleast 3 disks");
  } else if (disks === 3) {
    return 7;
  } else if (disks >= 3) {
    return minMoves(disks - 1) * 2 + 1;
  }
};

let index = 1;
const move = (source, target) => {
  console.log(index, `Move Disk from ${source} to ${target}`);
  index += 1;
};

const hanoi = (disks, source, intermediary, target) => {
  if (disks === 0) {
    //pass
  } else {
    hanoi(disks - 1, source, target, intermediary);
    move(source, target);
    hanoi(disks - 1, intermediary, source, target);
  }
};
// console.log(minMoves(8));
// console.log(move("A", "B"))

const noOfDisks = 1;
console.log("Number of Moves Required: ", minMoves(noOfDisks));
console.log(hanoi(noOfDisks, "A", "B", "C"));

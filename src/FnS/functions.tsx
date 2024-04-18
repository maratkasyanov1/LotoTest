
export function resultCheck(res: number[][], selected: number[][], statusWin: () => void, statusField: () => void) {
  const result = [0, 0]
  console.log(selected)
  if (selected[0].length === 8 && selected[1].length === 1) {
    for (let i = 0; i < selected[0].length; i++) {
      const elem = selected[0][i]
      for (let j = 0; j < 8; j++) {
        if (elem === res[0][j]) {
          console.log('совпадение')
          result[0]++
        }
      }
    }
    if (selected[1][0] === res[1][0]) {
      result[1] = 1
    }

    if (result[1] === 1 && result[0] >= 4) {
      statusWin()
  
    } else {
      statusField()
  
    }
  }else{
    alert('Не все числа отмечены!')
  }
  

}
export function generatenum(num:any) {
  const arr1:number[] = []
  while (arr1.length < num) {
    const randomNum = Math.floor(Math.random() * 99) + 1;
    if (!arr1.includes(randomNum)) {
      arr1.push(randomNum);
    }
  }
  return arr1
}
export function randomNumber(min: number, max: number) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}
export function uniqnumbers(arrall: any[]) {
  const res: any[] = []
  const resarr: any[] = []
  for (let i = 0; i < arrall.length - 1; i++) {
    const elem = randomNumber(0, arrall.length - 1)
    if (!res.includes(elem) && typeof elem !== 'undefined') res.push(elem * -1 * -1)
  }
  for (let j = 0; j < 8; j++) {
    const indx = res.slice(0, 8)
    resarr.push(arrall[indx[j]])
  }
  return resarr
}